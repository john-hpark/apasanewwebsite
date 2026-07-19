# apasanewwebsite

A new website for APASA designed in Figma and implemented in Claude Code.

## Editing content (no coding required)

All of the content below can be edited directly on github.com — edit a file or drag-and-drop images into a folder, then commit to `main`. Vercel automatically redeploys the live site within about a minute.

### Member organizations

Edit `data/orgs.json`. Each entry is:

```json
{ "name": "Org Name", "image": "/images/org-placeholder.svg", "instagramUrl": "https://instagram.com/orgname" }
```

- Add or remove entries to change how many organizations appear.
- To use a real photo: upload the image file into `public/images/` (e.g. `public/images/my-org.jpg`), then set `"image"` to `/images/my-org.jpg`.

### Signature events (photo carousel)

The "Signature Events" section is a scrolling photo carousel with tabs — one tab per event, plus a "Gallery" tab that shows photos from every event combined.

- The list of event tabs lives in `data/events.json` (each entry has a `slug` and display `name`).
- Photos for an event go in `public/images/events/<slug>/` — just drag image files into that folder on GitHub. No JSON editing needed for photos; every image file in the folder is shown automatically, and old ones can be deleted at any time.
- To add a brand-new event: add `{ "slug": "my-event", "name": "My Event" }` to `data/events.json`, then create `public/images/events/my-event/` and upload photos into it.

### Photos in general

Any gray placeholder box on the site is a stand-in for a real photo — replace it by uploading the image into `public/images/` and updating the relevant `"image"` path in the JSON files above.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Geist, and self-hosts Satoshi Variable for headings.

## Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new) — connect this GitHub repo and it will auto-deploy on every push to `main`.
