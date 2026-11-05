# Guada Franco’s Portfolio

My bilingual portfolio for sharing my projects, experience, and the way I approach software engineering. It’s built with Nuxt, Vue, and TypeScript, and deployed as a static site on Cloudflare Pages.

## Run locally

With Docker Compose:

```sh
docker compose up portfolio
```

Open <http://localhost:3000>.

With Node.js 22 and npm:

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run check
```

This runs linting, type checking, static generation, and generated-page tests. CI also checks the diagrams and smoke-tests the production preview, including its 404 response.

## Diagrams

After editing a PlantUML source, regenerate its light and dark SVGs with:

```sh
docker compose run --rm diagrams
```

## Deployment

Cloudflare Pages deploys the generated static site from the repository.
