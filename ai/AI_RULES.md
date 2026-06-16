# AI Rules for MVP Projects

Use these rules when an AI coding agent works on a project generated from AI MVP Starter Kit.

## Core Behavior

- Create complete, working code for the requested scope.
- Do not leave unfinished placeholders, empty modules, fake screenshots, fake tests, or fake integrations.
- If a feature cannot be completed, document the limitation in `HANDOFF.md` and explain why.
- Keep the architecture simple, readable, and ready for future growth.
- Use clear names for files, modules, functions, routes, and configuration.
- Preserve multilingual support when the project includes localization.

## Architecture Rules

- Separate public assets, application logic, configuration, storage, and documentation.
- Avoid unnecessary dependencies and frameworks.
- Prefer small modules with clear responsibility.
- Keep environment-specific values in `.env` or protected configuration.
- Never mix secrets into frontend files.

## Security Rules

- Protect secrets, tokens, API keys, and credentials.
- Validate input on the server when a backend exists.
- Escape output before rendering user-provided data.
- Use secure password hashing for authentication.
- Use CSRF protection for sensitive state-changing actions.
- Use prepared statements for SQL.
- Protect admin routes and private files.
- Do not expose debug output in production.

## Documentation Rules

- Update `README.md` when installation, running, usage, or deployment changes.
- Update `PROJECT_CONTEXT.md` when business logic or architecture changes.
- Update `TASK.md` when requirements change.
- Update `HANDOFF.md` with known limitations or unfinished work.
- Add a dated entry to `Codex_History.md` or `CHANGELOG.md` for meaningful changes.

## Validation Rules

- Run the project locally before final delivery.
- Check desktop and mobile layouts.
- Test forms, empty states, and validation errors.
- Run available validation scripts.
- Report any command that could not be run.

## Russian Note

ИИ-агент не должен выдавать незавершенную функцию за готовую. Если есть ограничение, его нужно честно описать в документации и итоговом отчете.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
