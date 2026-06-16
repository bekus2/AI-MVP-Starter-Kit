# Deployment

AI MVP Starter Kit is a static project. It can be deployed anywhere that serves HTML, CSS, JavaScript, SVG, and text files.

## GitHub Pages

1. Push the repository to GitHub.
2. Open repository settings.
3. Enable GitHub Pages for the `main` branch.
4. Use the root folder as the source.
5. Open the published Pages URL.

The root `index.html` redirects to `public/index.html`, so no build step is required.

## Static Hosting

Upload the repository or the `public/` folder to a static host. Make sure relative paths stay intact:

```text
./assets/css/app.css
./assets/js/app.js
```

## Shared Hosting

Upload files through the hosting file manager or FTP/SFTP. The project does not require PHP, MySQL, Node.js, or Composer for the main app.

## VPS

Serve the `public/` folder with any static web server such as Nginx, Apache, Caddy, or a simple Node/Python static server.

## Plesk

Upload the repository to the site root. If the hosting document root must point to one folder, point it to `public/`.

## Netlify-Like Static Hosting

Use these settings:

- Build command: leave empty.
- Publish directory: `public` or repository root if you want to use the redirect page.
- Environment variables: none required for the static app.

## Production Notes

- Use HTTPS.
- Do not store secrets in the repository.
- Do not treat LocalStorage as secure storage.
- Review any AI-generated changes before deployment.
- Test desktop and mobile layout after publishing.

No automatic deployment workflow is included in v0.1.0.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
