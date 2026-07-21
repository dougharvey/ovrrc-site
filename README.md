# OVRRC Site

Static Next.js rebuild of [ovrrc.com](https://ovrrc.com) — the Ouachita Valley Road Runners club site — migrated off WordPress and onto Vercel.

## Content

- `app/` — pages: home/schedule, results index, per-year results archive (2005–2026), running groups, photos, about
- `data/results.json` — race results parsed from the original WordPress site's REST API, per year
- `data/galleries.json` — photo gallery metadata
- `public/results/` — every race-results file (PDF and `.htm`) from the original site's media library, at its original relative path
- `public/photos/` — every photo from the original NextGEN Gallery photo albums

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed on Vercel. Push to `main` to trigger a production deploy.
