# kasra-mcp

**Kasra MCP Server** — local code review via the Model Context Protocol.

Reads files on your machine and sends them to the Kasra API for security scanning. Designed to work with AI tools like Claude Desktop, Cursor, Claude Code, and any MCP-compatible client.

---

## Install

```bash
pip install kasra-mcp
```

Requires Python 3.11+.

---

## Quick Start

```bash
# Verify installation
python3 -m kasra_mcp.server --help
```

The server connects to a Kasra API instance (default: `http://localhost:8090`).

---

## Configuration

Environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `KASRA_API_URL` | `http://localhost:8090` | Kasra API base URL |
| `KASRA_API_KEY` | `""` | API key for authentication |

---

## Tools

### `kasra_scan_file`

Scan a file or directory for security vulnerabilities.

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | `string` | Path to a file or directory to scan |

Supports both single files and directories. Ignores common non-source files (images, binaries, `.git`, `node_modules`, etc.).

### `kasra_get_rules`

List all loaded security rules.

| Parameter | Type | Description |
|-----------|------|-------------|
| `severity` | `string?` | Filter by severity (P0, P1, P2) |
| `enabled_only` | `boolean?` | Only return enabled rules |

### `health`

Check the Kasra API connection and engine status.

---

## Integration with AI Tools

### Claude Desktop

```json
{
  "mcpServers": {
    "kasra": {
      "command": "python3",
      "args": ["-m", "kasra_mcp.server"],
      "env": {
        "KASRA_API_URL": "http://localhost:8090",
        "KASRA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

Paste this into `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows).

### Cursor

```json
{
  "mcpServers": {
    "kasra": {
      "command": "python3",
      "args": ["-m", "kasra_mcp.server"],
      "env": {
        "KASRA_API_URL": "http://localhost:8090",
        "KASRA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Claude Code

```json
{
  "mcpServers": {
    "kasra": {
      "command": "python3",
      "args": ["-m", "kasra_mcp.server"],
      "env": {
        "KASRA_API_URL": "http://localhost:8090",
        "KASRA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

---

## How it works

```

 Claude Desktop / Cursor / Claude Code
        │
        │  stdio (JSON-RPC over stdin/stdout)
        ▼
 ┌─────────────────┐        POST /v1/scan/file     ┌────────────────┐
 │   kasra-mcp     │ ─────────────────────────────→ │  Kasra API     │
 │                 │        POST /v1/rules/export   │  (Docker)      │
 │  reads local    │ ←───────────────────────────── │  193 rules     │
 │  file content   │        findings + results      │  CR scanning    │
 └─────────────────┘                                └────────────────┘
```

1. **Claude Desktop** starts `kasra-mcp` as a subprocess (stdio transport)
2. When the user asks to scan a file, **Claude calls `kasra_scan_file`** with a path
3. **`kasra-mcp` reads the file** content from local disk
4. **Sends the content** to the Kasra API via `POST /v1/scan/file`
5. **Kasra API** runs 83 code review rules, returns findings
6. **`kasra-mcp` returns** the results to Claude

The MCP server never stores your code — it reads, sends, and discards.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Development

```bash
git clone <repo>
cd kasra-mcp
pip install -e .
python3 -m kasra_mcp.server
```