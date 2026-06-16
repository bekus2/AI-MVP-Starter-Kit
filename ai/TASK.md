# Reusable MVP Task Template

Copy this template into your AI coding agent and fill in the sections before generation.

## Project Name

Write the project name here.

## Problem

Describe the user problem in practical language:

- What painful process exists now?
- Who experiences it?
- What outcome should improve?

## Target Users

- Primary user:
- Secondary user:
- Admin or operator:

## Features

### Must Have

- Feature 1 with acceptance check.
- Feature 2 with acceptance check.
- Feature 3 with acceptance check.

### Nice To Have

- Future feature 1.
- Future feature 2.

## Stack

- Frontend:
- Backend:
- Database or storage:
- Deployment target:
- External services:

## Architecture

Required structure:

```text
project/
├── README.md
├── AI_RULES.md
├── TASK.md
├── PROJECT_CONTEXT.md
├── HANDOFF.md
├── public/
├── src/
├── database/
└── docs/
```

Describe expected modules, routes, services, and storage responsibilities.

## Pages Or Screens

- Home or dashboard:
- Main workflow:
- Admin panel:
- Settings:
- Error or empty states:

## Data Model

Describe entities and fields:

- User:
- Lead:
- Project:
- Audit log:

## Security

- Secrets must not be committed.
- Input must be validated.
- Output must be escaped.
- Authentication must use secure hashing if implemented.
- Sensitive actions must use CSRF protection if a backend is included.
- Admin routes must be protected.

## Deployment

- Local run command:
- Production target:
- Environment variables:
- Database migration or import:
- Backup notes:

## Acceptance Criteria

- The app runs locally using documented steps.
- The main user flow works end to end.
- Forms validate input and handle errors.
- UI works on mobile and desktop.
- Documentation is current.
- No secrets or placeholder-only files are present.
- Known limitations are documented.

## Russian Note

Перед production код должен быть проверен человеком: безопасность, логика, данные, формы, права доступа и деплой.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
