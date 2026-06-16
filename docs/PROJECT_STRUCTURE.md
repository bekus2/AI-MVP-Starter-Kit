# Project Structure

This repository is organized so humans and AI coding agents can quickly understand the project.

## Root Files

- `README.md` — main bilingual documentation in English and Russian.
- `LICENSE` — MIT License.
- `CHANGELOG.md` — release history.
- `CONTRIBUTING.md` — contribution guidance.
- `SECURITY.md` — security reporting and principles.
- `.gitignore` — common ignored files.
- `.env.example` — safe example environment variables.
- `index.html` — GitHub Pages-compatible redirect to `public/index.html`.
- `AI_RULES.md`, `TASK.md`, `PROJECT_CONTEXT.md`, `HANDOFF.md`, `Codex_History.md` — root project governance and handoff files.

## `public/`

The main static web app.

- `public/index.html` — semantic app shell.
- `public/manifest.json` — basic web app metadata.
- `public/robots.txt` — search crawler rules.
- `public/sitemap.xml` — static sitemap template.
- `public/assets/css/app.css` — responsive layout and theme.
- `public/assets/js/translations.js` — EN/RU/KK translation dictionary.
- `public/assets/js/i18n.js` — language detection, saving, and DOM translation.
- `public/assets/js/storage.js` — LocalStorage helpers.
- `public/assets/js/security.js` — escaping and safe text helpers.
- `public/assets/js/app.js` — generators, checklist, lead form, and structure viewer.
- `public/assets/img/preview.svg` — lightweight preview asset.

## `ai/`

Reusable files for AI coding agents.

- `AI_RULES.md` — behavior, security, documentation, and validation rules.
- `TASK.md` — reusable MVP task template.
- `PROJECT_CONTEXT.md` — project purpose and AI interpretation notes.
- `HANDOFF.md` — continuation guide.
- `CODEX_PROMPTS.md`, `CLAUDE_PROMPTS.md`, `CURSOR_PROMPTS.md` — tool-specific prompt examples.
- `PROMPT_LIBRARY.md` — common prompt patterns.

## `docs/`

Practical documentation for people using or extending the project.

- `QUICK_START.md`
- `PROJECT_STRUCTURE.md`
- `AI_WORKFLOW.md`
- `LOCALIZATION.md`
- `DEPLOYMENT.md`
- `SECURITY_CHECKLIST.md`
- `ROADMAP.md`

## `starter/`

A copyable static starter template for new MVP projects.

It includes a simple layout, form validation, responsive CSS, architecture notes, and example SQL schema.

## `examples/`

Small runnable examples:

- `landing-page/`
- `lead-form/`
- `mini-crm/`

Each example can be opened directly in a browser.

## `scripts/`

- `validate.mjs` — Node.js validation script using only built-in modules.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
