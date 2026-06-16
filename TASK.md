# Task Specification

## Project Goal

Create and maintain AI MVP Starter Kit: a public, dependency-free, multilingual static toolkit for starting MVP projects with AI coding agents.

## Current Version

v0.1.0

## Required Functionality

- Multilingual app interface: English, Русский, Қазақша.
- MVP Project Brief Generator.
- AI Agent Task Generator.
- MVP Readiness Checklist with LocalStorage progress.
- Starter Project Structure Viewer.
- Demo lead form with safe rendering.
- Reusable AI prompt and documentation files.
- Static starter template and runnable examples.

## Pages And Modules

- `public/index.html` main app.
- `public/assets/js/translations.js` translation dictionary.
- `public/assets/js/i18n.js` language switching.
- `public/assets/js/storage.js` LocalStorage helpers.
- `public/assets/js/security.js` safe rendering helpers.
- `public/assets/js/app.js` app behavior.
- `starter/` reusable template.
- `examples/` runnable examples.

## User Roles

- Visitor: uses generators, checklist, and examples.
- Developer: copies prompts, starter files, and docs into a real project.
- Maintainer: reviews contributions and keeps quality rules current.

## UI Requirements

- Responsive layout.
- Semantic HTML.
- Labels for inputs.
- Keyboard-friendly controls.
- Visible focus states.
- Good contrast and readable font sizes.

## Backend Requirements

No backend is required in v0.1.0.

## Data Storage Requirements

Use browser LocalStorage only for demo state:

- selected language;
- generated brief;
- checklist progress;
- demo leads.

LocalStorage must not be presented as secure storage.

## Security Requirements

- Escape user-entered data before rendering.
- Avoid raw `innerHTML` with user input.
- Do not store secrets.
- Do not use tracking scripts.

## Deployment Requirements

- Must run from `public/index.html`.
- Must work through a static server.
- Must be compatible with GitHub Pages.

## Acceptance Criteria

- Required files exist and contain useful content.
- `node scripts/validate.mjs` passes.
- App works in English, Russian, and Kazakh.
- Checklist, brief saving, and demo leads persist in LocalStorage.
- User input is safely rendered.
- Documentation matches current behavior.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
