# AI Workflow

Use this workflow to get better results from AI coding agents and reduce rework.

## 1. Define The Project Idea

Write the project name, target users, main problem, required features, stack, and deployment target.

Good AI output starts with concrete context.

## 2. Generate A Brief

Use the MVP Project Brief Generator in `public/index.html`.

The brief should explain:

- the problem;
- users;
- features;
- stack;
- deployment target;
- instructions for the AI agent;
- acceptance criteria.

## 3. Generate An AI Task

Use the AI Agent Task Generator to create a structured prompt for Codex, Claude Code, Cursor, Windsurf, Cline, or another agent.

The generated task includes:

- project goal;
- required files;
- architecture;
- code quality rules;
- security rules;
- documentation requirements;
- validation checklist.

## 4. Ask The AI Agent To Create The Project

Paste the generated brief and task into the AI agent. Ask it to read project files before editing and to run validation before final response.

## 5. Review Code

Check:

- project structure;
- data flow;
- security assumptions;
- UI behavior;
- mobile layout;
- error handling;
- documentation accuracy.

AI-generated code must be reviewed before production use.

## 6. Test Locally

Run the documented local command. Test the main user flow, forms, saved state, and edge cases.

## 7. Fix Issues

Ask the AI agent for focused fixes. Avoid large rewrites unless the architecture is clearly wrong.

## 8. Deploy

Deploy only after local validation and documentation review. Use `docs/DEPLOYMENT.md` as a checklist.

## 9. Document Changes

Update:

- `README.md`;
- `TASK.md`;
- `PROJECT_CONTEXT.md`;
- `HANDOFF.md`;
- `CHANGELOG.md` or `Codex_History.md`.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
