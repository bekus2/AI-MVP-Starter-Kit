# Starter MVP Template

This folder is a small dependency-free starter template for a new MVP.

## What It Includes

- Static landing section.
- Features section.
- Contact or lead form demo.
- Simple JavaScript validation.
- Responsive CSS.
- Example `.env.example`.
- Example SQL schema for future backend planning.
- Architecture notes in `src/`.

## How To Run

Open:

```text
starter/public/index.html
```

Or serve the folder:

```bash
python -m http.server 8000 -d starter/public
```

Then open:

```text
http://localhost:8000
```

## How To Use

1. Copy `starter/` into a new repository.
2. Rename the project title and copy.
3. Replace demo form handling with your real backend when needed.
4. Use `database/schema.sql` as a planning reference, not as a production migration.
5. Add tests and deployment scripts when the project scope requires them.

## Security Notes

- The demo form does not send data to a server.
- Do not store real secrets in frontend code.
- Use `.env.example` only as a safe configuration template.
- Add server-side validation before using a real backend.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
