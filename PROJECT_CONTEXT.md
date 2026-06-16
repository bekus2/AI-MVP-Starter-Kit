# Project Context

## Purpose

AI MVP Starter Kit helps people start better MVP projects with AI coding agents by combining a static planning app, prompt templates, documentation, examples, and a reusable starter structure.

## Business Logic

The project solves a practical workflow problem: many AI-generated MVPs fail because the prompt lacks context, architecture, security rules, and acceptance criteria. This toolkit collects that information before code generation begins.

## Target Users

- Developers
- Freelancers
- Students
- Vibe coders
- AI-assisted developers
- Small business automation specialists

## Main Features

- Generate a clean project brief.
- Generate an AI-agent task.
- Track MVP readiness.
- Review a starter project structure.
- Test a safe LocalStorage lead form pattern.
- Reuse AI rules and prompt templates.

## Architecture Overview

The project is a static HTML/CSS/JavaScript application. It uses no backend, no database, no external APIs, and no build step. State is stored in LocalStorage for demonstration and convenience.

## Data Flow

1. User enters data in the browser.
2. JavaScript validates and formats the data.
3. Generated content is displayed in the page.
4. Optional state is saved to LocalStorage.
5. User-entered lead data is escaped or rendered with safe text helpers.

## Security Logic

- LocalStorage is treated as non-secure demo storage.
- User input is escaped before rendering.
- The project does not transmit user data.
- The project does not include analytics, tracking, API keys, or secrets.

## Future Direction

- More starter templates.
- Markdown export for generated prompts.
- GitHub issue templates.
- Optional backend starter.
- Additional localization improvements.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
