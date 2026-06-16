# App Layer Notes

The `App/` layer is for application composition.

Examples:

- route registration;
- controller wiring;
- service container setup;
- frontend app initialization;
- middleware configuration.

## Rules

- Keep business logic inside modules, not in wiring code.
- Keep environment-specific configuration outside source code.
- Make startup flow easy to read for a new developer.
- Document important bootstrapping decisions.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
