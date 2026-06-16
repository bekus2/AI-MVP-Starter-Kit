# Prompt Library

This file contains reusable prompt patterns for common AI-assisted development tasks.

## Create MVP

```text
Create a complete MVP for [PROJECT NAME].

Include:
- local run instructions;
- responsive UI;
- clear structure;
- input validation;
- safe output rendering;
- documentation;
- known limitations.

Do not leave placeholder-only files. Do not add unnecessary dependencies.
```

## Refactor Project

```text
Refactor the project for maintainability without changing behavior.

Focus on:
- clear file boundaries;
- simpler function names;
- duplicated logic reduction;
- updated documentation if structure changes.
```

## Add Authentication

```text
Add secure authentication.

Requirements:
- email and password login;
- hashed passwords;
- session protection;
- logout;
- CSRF protection for sensitive actions;
- protected admin routes;
- no plaintext passwords in the repository;
- setup notes in README.
```

## Add Admin Panel

```text
Add an admin panel for managing core content.

Requirements:
- protected login;
- content list/edit flow;
- input validation;
- success/error states;
- audit-friendly structure;
- documentation for default local setup.
```

## Add Multilingual Support

```text
Add English, Russian, and Kazakh UI support.

Requirements:
- language switcher;
- saved language preference;
- English fallback;
- no empty translation values;
- proper Kazakh Cyrillic text where needed;
- documentation explaining how to add translations.
```

## Add Security Hardening

```text
Harden the project security.

Check:
- secrets in Git;
- input validation;
- output escaping;
- session and CSRF protection if backend exists;
- debug output;
- admin route protection;
- dependency risk;
- deployment notes.
```

## Prepare Deployment

```text
Prepare the project for deployment.

Include:
- environment configuration;
- production run instructions;
- static or server deployment notes;
- permissions;
- backup notes;
- rollback notes;
- limitations.
```

## Write Tests

```text
Add practical tests for the main user flow.

Priorities:
- generation logic;
- validation;
- storage behavior;
- form submission;
- security escaping.

Document how to run the tests.
```

## Create Documentation

```text
Create or update documentation.

Include:
- project purpose;
- install steps;
- run steps;
- usage;
- file structure;
- security notes;
- deployment notes;
- known limitations;
- future improvements.
```

## Russian Note

Хороший prompt должен содержать цель, ограничения, стек, файлы, безопасность, документацию и критерии приемки.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
