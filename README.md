# OpenLab site (Astro)

The maintained version of the OpenLab website. Built with Astro + Starlight.

## Preview locally

```
cd openlab-astro
npm run dev
```

Open http://127.0.0.1:4321. Pages hot-reload on save.

## Edit

- Content pages: `src/content/docs/**/*.mdx`. Frontmatter `title:` sets the page title.
- `{/* EDIT: ... */}` comments mark places needing real content; invisible on the site.
- New equipment page: copy an existing one in `src/content/docs/equipment/`, add it to `sidebar` in `astro.config.mjs`.
- Components: `src/components/` (VideoCard, VideoEmbed, FooterWithReport). Styles: `src/styles/openlab.css`.

## Media rules

- **Images**: compressed JPEGs (≤ ~300 KB) in `public/assets/`. Resize before adding.
- **Videos**: NEVER put video files in this repo (GitHub: 100 MB/file hard limit, ~1 GB repo guidance).
  Upload lab-made instructional videos to the lab's Bilibili and/or YouTube channel, then embed:
  `<VideoEmbed bvid="BV1xxxx" title="..." />` or `<VideoEmbed youtube="VIDEO_ID" title="..." />`.
- **Manuals/PDFs**: `public/manuals/`. Current total (~64 MB) is fine; keep an eye on growth.

## Build

```
npm run build
```

Static output in `dist/`; serve anywhere.
