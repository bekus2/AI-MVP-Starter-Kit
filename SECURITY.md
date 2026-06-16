# Security Policy

AI MVP Starter Kit is a static educational and workflow tool. It does not include a backend, database, authentication system, payment flow, analytics script, or external API integration in the initial release.

## Reporting Security Issues

Please report suspected security issues privately through GitHub Security Advisories when available for this repository. Do not publish exploit details in public issues before maintainers have time to review them.

## Security Principles

- Do not commit real secrets, API keys, tokens, passwords, private `.env` files, or production credentials.
- Use `.env.example` only for safe example variables.
- Treat LocalStorage as demo-only storage. Do not store sensitive or regulated personal data there.
- Escape user input before rendering it.
- Validate form input before processing it.
- Review AI-generated code before production deployment.
- Keep dependencies minimal and audit them before adding any.
- Disable debug output before production deployment.
- Use HTTPS on deployed sites.
- Protect admin routes in any future backend implementation.
- Back up production databases if the starter is extended with persistent storage.

## Current Static App Notes

- Demo lead submissions are stored only in the current browser LocalStorage.
- Clearing browser storage removes saved generated briefs, checklist state, and demo leads.
- No data is sent to a server by the default app.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
