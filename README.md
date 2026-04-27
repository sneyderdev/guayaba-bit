# Guayaba Bit — services app

Two siblings live in this repo:

- [`vanilla/`](vanilla/) — original site built with HTML, Tailwind (CDN), jQuery, and `localStorage`. See [vanilla/README.md](vanilla/README.md).
- [`angular-app/`](angular-app/) — Angular 21 app, fully migrated from vanilla. Same `localStorage` schema (keys `services` and `favorites`), so both stacks share data when run on the same origin. See [angular-app/README.md](angular-app/README.md).

## Migration status

| Page                | Vanilla | Angular |
| ------------------- | ------- | ------- |
| Home (dashboard)    | ✅      | ✅      |
| Admin — services    | ✅      | ✅      |
| Services list       | ✅      | ✅      |
| Service detail      | ✅      | ✅      |
| Favorites           | ✅      | ✅      |
| Contact             | ✅      | ✅      |
