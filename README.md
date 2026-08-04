# sebfxyz

My personal website which can be accessed at either [seb.fousse.net](https://seb.fousse.net) or [sebf.xyz](https://sebf.xyz).

Built with Next.js (Pages Router), React and Tailwind CSS, deployed on Vercel.

## Running Site Locally

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

Requires Node.js 20.9 or newer.

## Other Commands

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Note that `npm run build` no longer runs linting, so `lint` and `typecheck`
need to be run separately.

## Environment Variables

Local values go in `.env.local`:

| Variable | Used by |
| --- | --- |
| `OPENWEATHER_API_KEY` | `/api/stats/current-weather` |