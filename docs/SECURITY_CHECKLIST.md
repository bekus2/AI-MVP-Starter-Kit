# Security Checklist

Use this checklist before publishing an MVP or asking an AI agent to extend it.

## Repository Safety

- No real secrets in Git.
- `.env` files are ignored.
- `.env.example` contains example values only.
- Logs, dumps, backups, and local databases are ignored.
- Sensitive configuration is not exposed in frontend files.

## Input And Output

- User input is validated.
- Rendered user input is escaped.
- Error messages do not reveal private internals.
- Form fields have reasonable length limits in production systems.

## Authentication And Admin Areas

- Admin routes are protected.
- Passwords are hashed securely.
- Sessions are protected.
- Logout works.
- CSRF protection exists for sensitive actions.
- Default development credentials are changed before production.

## Database And Storage

- SQL uses prepared statements.
- Database backups exist.
- Production data is not committed.
- LocalStorage is used only for non-sensitive demo data.

## Deployment

- HTTPS is enabled.
- Debug mode is disabled.
- File permissions are limited.
- Private files are outside the public web root where possible.
- Backups and migration notes are documented.

## Dependencies

- Dependencies are necessary and reviewed.
- Outdated packages are updated.
- External scripts are avoided unless required and trusted.
- No analytics or tracking scripts are added by default.

## AI-Generated Code Review

- Human review completed.
- Security-sensitive logic inspected.
- Generated claims verified.
- Documentation matches actual behavior.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
