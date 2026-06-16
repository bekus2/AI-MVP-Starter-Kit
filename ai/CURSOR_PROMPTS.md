# Cursor Prompts

Use these prompts inside Cursor when working with the project tree.

## Implement Feature With Documentation

```text
Implement the following feature:
[FEATURE DESCRIPTION]

Before editing, inspect the related files and documentation.

Requirements:
- Keep the existing architecture.
- Avoid unnecessary dependencies.
- Add or update translations when UI text changes.
- Preserve accessibility and responsive layout.
- Update README/HANDOFF/PROJECT_CONTEXT/TASK when needed.
- Run available validation before final response.
```

## Refactor Without Behavior Change

```text
Refactor the selected module for readability and maintainability.

Rules:
- Do not change user-facing behavior.
- Keep public APIs and storage keys compatible.
- Add only useful comments.
- Run validation and explain what was refactored.
```

## Fix UI Bug

```text
Fix this UI issue:
[BUG DESCRIPTION]

Check desktop and mobile layouts. Make the smallest maintainable change that resolves the issue. Do not rewrite unrelated UI.
```

## Russian Note

В Cursor удобно выделить конкретный файл или компонент и попросить точечный fix без полной переработки архитектуры.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
