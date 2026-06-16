# Modules Layer Notes

The `Modules/` layer is for feature-specific business logic.

Possible modules:

- Leads
- Projects
- Users
- Billing
- Notifications
- Reports

## Recommended Module Shape

```text
Modules/
└── Leads/
    ├── LeadService.*
    ├── LeadRepository.*
    └── LeadValidator.*
```

## Rules

- Keep each module focused on one business area.
- Do not let one module directly own another module's data.
- Put shared behavior in `Core/` only when it is genuinely reusable.
- Add tests when module logic grows beyond simple validation.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
