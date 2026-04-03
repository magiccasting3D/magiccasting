# Magic Casting Website

Production-ready static website for a local 3D hand and foot casting business in Shivamogga.

## Stack

- HTML5
- Tailwind CSS (compiled to `css/main.css`)
- Minimal vanilla JavaScript

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts `live-server` for local preview.

## Tailwind Workflow

Watch mode:

```bash
npm run watch
```

Production CSS build:

```bash
npm run build
```

Alias (same output):

```bash
npm run build:css
```

## Project Structure

```text
.
|- index.html
|- css/
|  |- src/input.css
|  `- main.css
|- assets/images/
|  |- site.webmanifest
|  |- web-app-manifest-192x192.png
|  `- web-app-manifest-512x512.png
|- tailwind.config.js
`- package.json
```

## Deployment

This project is suitable for static hosting (GitHub Pages / custom domain).

Recommended deploy checklist:

1. Run `npm run build`.
2. Commit updated `css/main.css`.
3. Push to your hosting branch.
