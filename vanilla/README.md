# Guayaba Bit — services app

Vanilla multi-page site built with **Tailwind CDN**, **jQuery**, and `localStorage` for data persistence.

## Run locally

Use a static server (not `file://`), e.g. VS Code **Live Server** or:

```bash
python3 -m http.server 8080
```

Opening `/` redirects automatically to `src/pages/home.html` via [`index.html`](index.html).

## Pages

| Path                                                               | Notes                               |
| ------------------------------------------------------------------ | ----------------------------------- |
| [`src/pages/home.html`](src/pages/home.html)                       | Landing page with featured services |
| [`src/pages/admin/services.html`](src/pages/admin/services.html)   | Create and delete services — image auto-generated from title via [picsum.photos](https://picsum.photos) |
| [`src/pages/services/index.html`](src/pages/services/index.html)   | Services list                       |
| [`src/pages/services/detail.html`](src/pages/services/detail.html) | Service detail (`?id=`)             |
| [`src/pages/favorites.html`](src/pages/favorites.html)             | Saved favorites                     |
| [`src/pages/contact.html`](src/pages/contact.html)                 | Contact form                        |

## JavaScript

```
src/js/
  store/
    storage.js       — readStoredJson / writeStoredJson
    initial-data.js  — INITIAL_SERVICES seed data
    services.js      — loadAllServices, findServiceById, addService, deleteServiceById
  pages/
    home.js          — featured services grid
    admin-services.js — create / delete services
```

## Stack

- **Tailwind CSS** — CDN, no build step.
- **jQuery 4** — loaded on each page that needs it.
- **Tabler Icons** — webfont CDN, add in `<head>` where needed:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.26.0/dist/tabler-icons.min.css"
/>
```

Usage: `<i class="ti ti-mail" aria-hidden="true"></i>` — [Docs](https://tabler.io/icons)

## Assets

Images go in `src/assets/images/`. Reference them from `src/pages/` as `../assets/images/filename.jpg`.

## Boilerplate

Header, footer, and full page template: [`src/partials-for-copy-paste.html`](src/partials-for-copy-paste.html).
