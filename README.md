# Personal Portfolio / Resume Framework — Showcase Carousel

A **slideshow of 10 complete portfolio/resume website examples** across different careers
(product designer, software engineer, wedding photographer, marketing strategist, architect,
registered nurse, music producer, private chef, writer/editor, fitness coach). Each example
is a full portfolio with its own person, work samples, résumé, and contact — and, crucially,
its own **visual style** (see below), so they look genuinely different, not just recoloured.
Perfect as a sales showcase: a prospect flips through to find the look they want built.

### Visual styles
Each preset picks a `style` that swaps the whole aesthetic + layout:
- **editorial** — light, elegant, serif headings (designer)
- **noir** — dark mode, bold uppercase, neon accent + offset glow (engineer, producer)
- **warm** — cream, rounded, organic blob portrait, friendly type (photographer, chef)
- **bold** — brutalist: huge uppercase type, sharp corners, offset shadows (marketer, coach)
- **minimal** — airy, flat, mono labels, centered round-portrait hero (architect, writer)
- **classic** — formal résumé: serif, portrait-left header, underlined headings (nurse)

Pure HTML/CSS/JS, no build step, hosts free on GitHub Pages. Built on the shared
design-system starter kit; reuses the lightbox + Pexels-image pattern from the other
frameworks.

## How the carousel works

- **Navigate:** the `‹ ›` arrows in the showcase bar, the big side arrows (desktop), the
  dots, or the keyboard **← →** keys.
- Each "slide" is a **preset** in the `PRESETS` array in `app.js`. Switching a preset
  re-themes the whole page (accent colour via CSS variables) and re-renders all content.
- Pexels photos (portrait + work samples) are fetched per preset and cached in
  `localStorage`, so each example only hits the API once.

## Personalising / selling

**To sell ONE example to a client:**
1. In `app.js`, set `CAROUSEL_ENABLED = false` (hides the arrows/dots so it’s a normal
   single site).
2. Keep just the preset they liked in `PRESETS` (delete the others), or reorder so theirs
   is first.
3. Edit that preset’s fields: `name`, `role`, `lede`, `about`, `stats`, `skills`, `work`,
   `experience`, `quote`, `email`, `location`, and the `accent` colour triple.
4. **Real images:** give a work item an `image:` path (e.g. `image:"assets/project1.jpg"`)
   to override Pexels, and replace the headshot by setting that preset’s
   `portraitQuery` → or drop in a real photo. Best fit: the client’s real headshot + their
   actual work (great for photographers, designers, architects, artists).
5. **CV download:** point the "Download CV" button at a real PDF
   (`href="assets/name-cv.pdf" download`) and remove the demo handler.

**To add another career example:** copy a preset object in `PRESETS`, give it a unique
`id`, and edit its content + `accent`.

## Make the contact form deliver

Currently a demo confirmation. To receive real messages: point the `<form>` at **Formspree**
(`action` + `method="post"`, remove the JS handler), or write to a **Firebase** Firestore
`messages` collection.

## Local preview

```bash
python3 -m http.server 5530   # then open http://localhost:5530
```

## Notes

- Pexels photos are demo placeholders (free key, same as the other frameworks). Swap for the
  client's real images when sold.
- Hosting upgrade path for paying clients: Netlify / Cloudflare Pages + custom domain.

## Selling this site to a client (lead delivery)

The contact form is wired to **Web3Forms** so messages email the client.

1. Get a FREE key at [web3forms.com](https://web3forms.com) using the **client's email**.
2. Paste it into `CONFIG.web3formsKey` in `app.js`.
3. The fallback recipient uses the active preset's `email` — set that to the client's email too (and trim to their single preset when selling one site).
4. Test from the live site and confirm the `🔔 NEW MESSAGE` email arrives.

Free tier = 250 submissions/month per key.
