"""Kasra MCP Server — local code review via Model Context Protocol.

Runs on the user's machine (pip install kasra-mcp), reads local files,
and sends them to the Kasra API server for security scanning.

Usage::

    kasra-mcp
    # or
    python -m kasra_mcp.server

Environment:
    KASRA_API_URL   Kasra API base URL (default: http://localhost:8090)
    KASRA_API_KEY   API key for authentication
"""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path

import httpx
from mcp.server.fastmcp import FastMCP


# ── Configuration ──────────────────────────────────────────────────────

_API_URL = os.environ.get("KASRA_API_URL", "http://localhost:8090").rstrip("/")
_API_KEY = os.environ.get("KASRA_API_KEY", "")

_headers: dict[str, str] = {}
if _API_KEY:
    _headers["X-API-Key"] = _API_KEY


def _api(path: str, method: str = "GET", **kwargs) -> httpx.Response:
    """Make an API request to the Kasra backend."""
    url = f"{_API_URL}{path}"
    headers = {**_headers, **kwargs.pop("headers", {})}
    with httpx.Client(timeout=30.0, headers=headers) as client:
        return client.request(method, url, **kwargs)


# ── MCP Server ────────────────────────────────────────────────────────

kasra_server = FastMCP(
    name="Kasra Code Reviewer",
    instructions=(
        "Kasra Code Review tool. Scans files and directories for security "
        "vulnerabilities: SQL injection, XSS, hardcoded secrets, "
        "Docker/K8s misconfigurations, and 160+ other code security rules. "
        "Use kasra_scan_file to review code before committing."
    ),
)


# ======================================================================
# Tool: health
# ======================================================================


@kasra_server.tool(
    name="health",
    description="Check the Kasra API health status.",
)
def health() -> str:
    """Return Kasra API health status as JSON."""
    try:
        resp = _api("/health")
        data = resp.json()
        return json.dumps({
            "status": data.get("status", "unknown"),
            "rules_loaded": data.get("rules_loaded", 0),
            "cr_rules_loaded": data.get("cr_rules_loaded", 0),
            "rules_total": data.get("rules_total", 0),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }, ensure_ascii=False)
    except httpx.RequestError as e:
        return json.dumps({
            "status": "unhealthy",
            "error": f"Cannot reach Kasra API at {_API_URL}: {e}",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        })


# ======================================================================
# Tool: kasra_scan_file
# ======================================================================


@kasra_server.tool(
    name="kasra_scan_file",
    description=(
        "SECURITY: Scan a file or directory for security vulnerabilities. "
        "Reads local file content and sends it to the Kasra API for analysis. "
        "Runs code review rules (SQL injection, XSS, hardcoded secrets, "
        "Docker/K8s misconfigurations, etc.). "
        "Supports all major programming languages and config formats."
    ),
)
def scan_file(path: str) -> str:
    """Scan a file or directory for security vulnerabilities.

    Reads the file content locally and sends it to the Kasra API
    for code review scanning.

    Args:
        path: Absolute or relative path to a file to scan.

    Returns:
        JSON string with scan findings.
    """
    resolved = Path(path).resolve()

    # Path traversal check
    if ".." in path.split(os.sep):
        return json.dumps({"error": "Path traversal is not allowed", "findings": []}, ensure_ascii=False)

    if not resolved.exists():
        return json.dumps({"error": f"Path not found: {resolved}"}, ensure_ascii=False)

    # Single file scan
    if resolved.is_file():
        return _scan_single_file(resolved)

    # Directory scan — walk all files
    all_results = []
    total_files = 0
    total_findings = 0
    for f in sorted(resolved.rglob("*")):
        if f.is_file() and _is_scanable(f):
            result = _scan_single_file(f, silent=True)
            data = json.loads(result)
            if "error" in data:
                continue
            total_files += 1
            total_findings += data.get("total_findings", 0)
            # Flatten triggered rules from API BatchScanResponse
            file_triggered = []
            for r in data.get("results", []):
                file_triggered.extend(r.get("triggered_rules", []))
            all_results.append({
                "file": str(f.relative_to(resolved)),
                "findings": file_triggered,
                "total_findings": len(file_triggered),
            })

    return json.dumps({
        "scan_path": str(resolved),
        "total_files": total_files,
        "total_findings": total_findings,
        "results": all_results,
    }, ensure_ascii=False, indent=2)


# ── Ignored extensions and dirs for directory scanning ──

_IGNORE_DIRS = {".git", "__pycache__", "node_modules", ".venv", "venv",
                ".tox", ".eggs", "eggs", ".mypy_cache", ".ruff_cache",
                ".pytest_cache", ".svn", ".hg", "dist", "build", ".next",
                "target", "bin", "obj", ".terraform", ".serverless"}

_IGNORE_EXTS = {".pyc", ".pyo", ".so", ".dll", ".dylib", ".exe",
                ".o", ".a", ".lib", ".obj", ".png", ".jpg", ".jpeg",
                ".gif", ".ico", ".svg", ".ttf", ".woff", ".woff2",
                ".eot", ".mp3", ".mp4", ".wav", ".zip", ".tar", ".gz",
                ".bz2", ".7z", ".rar", ".pdf", ".doc", ".docx",
                ".xls", ".xlsx", ".ppt", ".pptx", ".min.js", ".min.css"}
_MAX_FILE_SIZE = 1 * 1024 * 1024  # 1 MiB


def _is_scanable(path: Path) -> bool:
    """Check if a file should be scanned."""
    if path.suffix.lower() in _IGNORE_EXTS:
        return False
    for parent in path.parents:
        if parent.name in _IGNORE_DIRS:
            return False
    if parent.name == path.parent.name and path.parent.name in _IGNORE_DIRS:
        return False
    if path.stat().st_size > _MAX_FILE_SIZE:
        return False
    return True


def _scan_single_file(path: Path, silent: bool = False) -> str:
    """Read a single file and send to the Kasra API for scanning."""
    try:
        content = path.read_text("utf-8", errors="replace")
    except Exception as e:
        if not silent:
            return json.dumps({"error": f"Cannot read file: {e}", "findings": []}, ensure_ascii=False)
        return json.dumps({"error": str(e)})

    # Detect filename for extension-based rule matching
    filename = path.name

    try:
        resp = _api("/v1/scan/file", method="POST", json={
            "content": content,
            "filename": filename,
        })
        data = resp.json()
        return json.dumps(data, ensure_ascii=False, indent=2)
    except httpx.RequestError as e:
        err_msg = f"Cannot reach Kasra API at {_API_URL}: {e}"
        if not silent:
            return json.dumps({"error": err_msg, "findings": []}, ensure_ascii=False)
        return json.dumps({"error": err_msg})
    except Exception as e:
        err_msg = f"Scan failed: {e}"
        if not silent:
            return json.dumps({"error": err_msg, "findings": []}, ensure_ascii=False)
        return json.dumps({"error": err_msg})


# ======================================================================
# Tool: kasra_get_rules
# ======================================================================


@kasra_server.tool(
    name="kasra_get_rules",
    description="List all loaded security rules with their severity, action, and status.",
)
def get_rules(severity: str | None = None, enabled_only: bool | None = None) -> str:
    """Return all loaded rules from the Kasra API.

    Args:
        severity: Optional filter by severity (P0, P1, P2).
        enabled_only: If true, only return enabled rules.

    Returns:
        JSON string with total and rules list.
    """
    try:
        qs = []
        if severity:
            qs.append(f"severity={severity}")
        if enabled_only is not None:
            qs.append(f"enabled_only={'true' if enabled_only else 'false'}")

        path = "/v1/rules"
        if qs:
            path += "?" + "&".join(qs)

        resp = _api(path)
        data = resp.json()

        # Include I/O rules
        rules_list = []
        for r in data.get("items", []):
            rules_list.append({
                "id": r["id"],
                "name": r["name"],
                "severity": r["severity"],
                "action": r["action"],
                "category": r.get("category"),
                "enabled": r["enabled"],
                "is_custom": r.get("is_custom", False),
                "group": r.get("group"),
            })

        return json.dumps({
            "total": len(rules_list),
            "rules": rules_list,
        }, ensure_ascii=False)
    except httpx.RequestError as e:
        return json.dumps({
            "error": f"Cannot reach Kasra API at {_API_URL}: {e}",
            "total": 0, "rules": [],
        })
    except Exception as e:
        return json.dumps({
            "error": str(e), "total": 0, "rules": [],
        })


# ======================================================================
# CLI entry point
# ======================================================================


def main() -> None:
    """Start the MCP server via stdio transport."""
    print(f"Kasra MCP Server starting...", flush=True)
    print(f"  API target: {_API_URL}", flush=True)
    kasra_server.run(transport="stdio")


if __name__ == "__main__":
    main()
