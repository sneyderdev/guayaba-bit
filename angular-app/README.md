# Guayaba Bit — Angular app

Angular 21 app, fully migrated from the vanilla site under [`../vanilla/`](../vanilla/). Same `localStorage` schema, so both stacks share data when run on the same origin.

## Stack

- Angular 21 (standalone components, signals, new control flow `@if` / `@for`)
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Tabler Icons (CDN)
- Template-driven forms (`[(ngModel)]`)
- No SSR — data layer is `localStorage` only

## Run

```bash
npm install
npm start          # http://localhost:4200
npm run build      # output: dist/angular-app
```

## Routes

| Path                | Component                  |
| ------------------- | -------------------------- |
| `/`                 | `HomeComponent`            |
| `/admin/services`   | `AdminServicesComponent`   |
| `/services`         | `ServicesComponent`        |
| `/services/:id`     | `ServiceDetailComponent`   |
| `/favorites`        | `FavoritesComponent`       |
| `/contact`          | `ContactComponent`         |

## Project layout

```
src/app/
  app.ts, app.config.ts, app.routes.ts
  core/
    service.model.ts          — Service interface
    storage.ts                — readStoredJson / writeStoredJson
    initial-services.ts       — seed data (same as vanilla)
    services-store.ts         — signal store, key "services"
    favorites-store.ts        — signal store, key "favorites"
  shared/
    layout/                   — header, footer, <router-outlet>
    service-card/             — featured/list card
    favorite-button/          — heart toggle, reactive across the app
  pages/
    home/                     — featured grid
    admin-services/           — template-driven form + list
    services/                 — services list
    service-detail/           — single service detail
    favorites/                — saved favorites
    contact/                  — contact form
```

## Data layer

`ServicesStore` and `FavoritesStore` are root-provided injectable services backed by Angular signals. They read from / write to the same `localStorage` keys as the vanilla app:

- `services` — full catalog (seeded from `INITIAL_SERVICES` on first load if missing/empty)
- `favorites` — array of service IDs

Because the schema is identical, you can switch between the vanilla site and the Angular app on the same origin and your data follows you.

## Store API

```ts
// Services
store.services()                  // signal: Service[]
store.findById(id)                // Service | undefined
store.addService(svc)
store.deleteServiceById(id)

// Favorites
favorites.ids()                   // signal: string[]
favorites.isFavorite(id)
favorites.isFavoriteSignal(id)    // computed signal for templates
favorites.toggle(id)
```

## Deploy (Vercel)

A `vercel.json` SPA rewrite is included. When you create the Vercel project, set **Root Directory = `angular-app/`** and Vercel will auto-detect Angular and run `ng build`.
