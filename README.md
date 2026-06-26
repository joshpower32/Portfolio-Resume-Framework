# Personal Portfolio / Resume Framework — "Jordan Bennett"

A clean, re-skinnable **personal website** template for individuals — freelancers, job
seekers, designers, photographers, artists, consultants — who want their own portfolio but
can't build one. Hero with portrait, about + stats + skills, a filterable **work gallery
with lightbox**, a **resume timeline**, testimonial, and contact form. Pure HTML/CSS/JS, no
build step, hosts free on GitHub Pages.

Built on the shared design-system starter kit, re-skinned editorial/elegant (off-white +
indigo, serif headings). Reuses the lightbox + Pexels-image pattern from the other frameworks.

## Personalising for a client

1. **Identity & copy** — name, role, bio, stats, skills, experience timeline, testimonial,
   and contact info all live in `index.html`.
2. **Brand & colours** — edit the `:root` tokens in `styles.css` (`--brand`, fonts).
3. **Work projects** — edit the `WORK` array in `app.js` (title, category, Pexels `query`).
4. **Real images** — set a project's `image:` field, or set `imgCache.__portrait` /
   `CONFIG.portraitQuery` for the headshot. Best results: a real headshot + the client's
   actual project shots (great fit for photographers/artists/designers).
5. **CV download** — point the "Download CV" button at a real PDF:
   `href="assets/name-cv.pdf" download` (and remove the demo handler).

## Make the contact form deliver

Currently shows a demo confirmation. To receive real messages:
- **Formspree** (easiest): set the `<form>`'s `action` to your endpoint + `method="post"`,
  remove the JS submit handler; or
- **Firebase**: write submissions to a Firestore `messages` collection.

## Local preview

```bash
python3 -m http.server 5530   # then open http://localhost:5530
```

## Notes

- Pexels photos are demo placeholders (free key, same as the other frameworks), cached in
  `localStorage`. Swap for the client's real images when sold.
- Hosting upgrade path for paying clients: Netlify / Cloudflare Pages + custom domain.
