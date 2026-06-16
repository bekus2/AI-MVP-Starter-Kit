# AI MVP Starter Kit Context

## Purpose

AI MVP Starter Kit is a public open-source repository that helps users prepare better instructions for AI coding agents before building an MVP.

The project is intentionally static and dependency-free so it can run by opening `public/index.html` or through any simple static server.

## How AI Agents Should Understand This Repository

This repository is not just a landing page. It is a toolkit with:

- an interactive planning app;
- reusable AI task documents;
- prompt libraries;
- practical docs;
- a starter template;
- runnable examples;
- a validation script.

## Important Design Decisions

- No backend in v0.1.0.
- No database in the main app.
- No external CDN or API dependency.
- Translations are stored in `translations.js` instead of JSON files because `fetch()` can fail when opened through `file://`.
- LocalStorage is used only for demo state and convenience.
- User-entered demo lead data is escaped before rendering.

## Target Users

- Developers
- Freelancers
- Students
- AI-assisted developers
- Vibe coders
- Small business automation specialists

## Expected AI Behavior

When extending this repository:

- preserve the static zero-dependency model unless explicitly asked otherwise;
- keep English, Russian, and Kazakh UI support;
- update affected documentation;
- run the validation script;
- document limitations honestly.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
