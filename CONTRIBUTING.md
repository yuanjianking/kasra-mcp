# Contributing to kasra-mcp

Thank you for your interest in contributing to **kasra-mcp** — the Kasra MCP Server for local code review.

We welcome contributions of all kinds, including bug reports, feature requests, documentation improvements, and code changes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Reporting Issues](#reporting-issues)
- [Security Disclosures](#security-disclosures)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/kasra-mcp.git
   cd kasra-mcp
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Python 3.11+
- A running Kasra API instance (or Docker setup from the main kasra project)

### Install in development mode

```bash
pip install -e .
```

### Run the server

```bash
python3 -m kasra_mcp.server
```

By default, the server connects to `http://localhost:8090`. Override with environment variables:

```bash
export KASRA_API_URL=http://your-server:8090
export KASRA_API_KEY=your-api-key
```

## Project Structure

```
kasra-mcp/
├── src/
│   └── kasra_mcp/
│       ├── server.py       # MCP server implementation
│       └── ...
├── system-test/            # System integration tests
├── skills/                 # Claude Code skills
└── pyproject.toml          # Project metadata
```

## Pull Request Process

1. **Keep changes focused** — one feature or fix per PR.
2. **Write tests** for new functionality.
3. **Update documentation** (README) if your change affects usage or configuration.
4. **Ensure the server starts and responds** to basic MCP tool calls.
5. **Rebase** onto the latest `main` before submitting.
6. **Describe your changes** in the PR description — what problem it solves and how.
7. PRs require at least one review before merging.

## Coding Standards

- Follow [PEP 8](https://peps.python.org/pep-0008/) for Python code.
- Type hints are required for all function signatures.
- Use descriptive variable names and write docstrings for public APIs.

### Commit messages

Use conventional commit format:

```
type(scope): brief description

feat:     New feature
fix:      Bug fix
docs:     Documentation only
style:    Formatting, no code change
refactor: Code restructuring
test:     Adding or fixing tests
chore:    Build/config changes
```

## Testing

```bash
# Run tests
python -m pytest tests/ -v

# Manual: start server and call via MCP client
python3 -m kasra_mcp.server
```

## Reporting Issues

When opening an issue, please include:

- A clear, descriptive title.
- Steps to reproduce (for bugs).
- Expected vs actual behavior.
- Environment details (OS, Python version).
- Logs or screenshots where applicable.

## Security Disclosures

If you discover a security vulnerability, **do not** open a public issue. Please report it privately to the maintainers.

---

Thank you for helping make kasra-mcp better!
