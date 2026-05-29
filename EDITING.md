# Editing Guide — SNSU ComSoc Website

This site is hosted on **GitHub** and edits go live in ~30 seconds. You don't need to know how to code — only how to find text and type new text.

## Quick reference

| What you want to change | File to open |
|---|---|
| President / VP / officer names | `officers.html` |
| Event titles, dates, descriptions | `events.html` |
| Mission / vision / values | `about.html` |
| Hero text, stats, hero photo | `index.html` |
| Anything in the topbar or footer | All four `.html` files (search-and-replace) |

## How to edit text

1. Go to https://github.com/mrfost07/snsu-comsoc
2. Click the file you want to edit (e.g., `officers.html`)
3. Click the **pencil icon** (✏️) at the top right of the file view
4. Press `Ctrl+F` to find the text you want to change. Examples:
   - `[President Name]` — placeholder for the president
   - `Hackathon 2026` — find this event
   - `200+` — the stats number on the home page
5. Type your new text directly over the old text
6. Scroll to the bottom of the page
7. In the **Commit changes** box, write a short note like "Update president name"
8. Click the green **Commit changes** button

The site updates within 30 seconds. Check at https://mrfost07.github.io/snsu-comsoc/

## How to add or replace photos

### Step 1 — Upload the photo to the repo

1. On the repo home page, click **Add file → Upload files**
2. (Optional) Type `images/` in the path field to put it in an `images` folder
3. Drag your photo into the upload box
4. Click **Commit changes**

Note the **filename** you uploaded (e.g., `president-2026.png`).

### Step 2 — Use the photo in the page

1. Open the `.html` file where the photo should appear (e.g., `officers.html`)
2. Click the pencil icon
3. Find the placeholder image, which looks like:
   ```html
   <img src="https://placehold.co/500x680/F2F2F2/000000?text=+" alt="President portrait">
   ```
4. Replace the URL with your file path:
   ```html
   <img src="images/president-2026.png" alt="President portrait">
   ```
5. Commit changes.

## Photo guidelines

For officer portraits, transparent **PNG** (no background) works best — they'll sit cleanly on the gray stage. Aim for ~600×800 pixels.

For event cover photos, JPG is fine. Aim for ~1200×900 pixels.

## How to update the topbar / footer

The topbar and footer appear on **all four pages**. To edit them, you have to edit all four files: `index.html`, `events.html`, `officers.html`, `about.html`.

Use GitHub's search to find a phrase across files:
1. Go to the repo home
2. Press `/` to open the search
3. Type the text you want to find (e.g., `Computer Society 2025`)
4. GitHub shows every file containing it — you'll see all four

Edit each one the same way, commit each one.

## Common edits

### Change an officer's name
File: `officers.html` → Search `[President Name]` → Type the real name.

### Change an event date
File: `events.html` → Search `June 15–17, 2026` → Replace with new date.
Also update the day/month in the list:
```html
<p class="ev-row-day">15</p>
<p class="ev-row-month">Jun 2026</p>
```

### Change the hero photo
File: `index.html` → Search `unsplash.com` → Replace the URL with your `images/your-photo.jpg`.

### Hide a section temporarily
Wrap the whole `<section>...</section>` block in HTML comments:
```html
<!--
<section class="section">
  ...
</section>
-->
```

## What NOT to touch

Avoid editing these unless you know HTML/CSS:

- `styles.css` — site-wide design tokens
- `app.js` — JavaScript interactions
- Anything inside `<style>` tags in the `.html` files
- Anything starting with `<svg>` (icons)
- The structure of `<div class="...">` blocks — just edit the text between tags

If you accidentally break something, GitHub keeps every version. Click the file's **History** button → click an earlier version → **Restore**.

## Need help?

Tag the repo owner on a GitHub issue, or contact the website maintainer.
