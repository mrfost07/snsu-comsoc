# SNSU Computer Society — Website

Editorial minimalist site for the SNSU Computer Society. Black & white foundation with orange accent (`#FF4D00`).

## Live site

https://mrfost07.github.io/snsu-comsoc/

## Stack

Pure HTML / CSS / JavaScript. No build step. No frameworks.

- `index.html` — Home
- `events.html` — Events
- `officers.html` — Officers
- `about.html` — About
- `styles.css` — Shared design system
- `app.js` — Mobile menu, scroll reveals, stat counter, event filter

## Editing content

See [`EDITING.md`](./EDITING.md) for non-coder instructions.

## Editing locally

Open any `.html` file in your browser. No server needed for basic preview. For accurate testing of `Ctrl+F5` reload behavior and the fonts loading, use a local server:

```bash
# Python (any OS)
python -m http.server 8000
# then open http://localhost:8000
```

## License

© 2026 SNSU Computer Society Organization
