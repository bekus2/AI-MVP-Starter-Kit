# AI Handoff Guide

## Current State

AI MVP Starter Kit v0.1.0 is a complete static toolkit for creating AI-ready MVP briefs, tasks, checklists, and starter structures.

## Main Areas

- `public/` contains the actual browser app.
- `ai/` contains AI-agent rules and prompt templates.
- `docs/` contains user and maintainer documentation.
- `starter/` contains a copyable MVP starter.
- `examples/` contains small runnable examples.
- `scripts/validate.mjs` checks required files and translation basics.

## How To Continue

1. Read `README.md`.
2. Read this file and `ai/AI_RULES.md`.
3. Inspect the relevant app files before changing behavior.
4. Keep translations synchronized across EN/RU/KK.
5. Run `node scripts/validate.mjs`.
6. Update documentation and changelog for meaningful changes.

## High-Risk Areas

- Translation keys used by `data-i18n`.
- LocalStorage key names in `storage.js`.
- HTML escaping in `security.js`.
- GitHub Pages compatibility with relative paths.

## Known Limitations

- No automated browser test suite yet.
- No backend starter yet.
- No export-to-Markdown button yet.
- LocalStorage data is browser-local and not secure.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
