# Portfolio

A static-first Nuxt portfolio for a backend-focused software engineer interested in systems architecture, AI workflows, frontend delivery, and DevOps.

## Start locally

Install Node.js 22+ and run:

```sh
npm install
npm run dev
```

## Docker

Docker is the recommended local setup in this workspace because Node is not installed on the host.

```sh
docker compose up portfolio
```

Open http://localhost:3000. The source directory is mounted for hot reload; dependencies live in a Docker volume rather than on the host.

To validate the production static build locally:

```sh
docker compose up --build preview
```

Open http://localhost:8080.

## Build for Cloudflare Pages

```sh
npm run generate
```

Connect this repository in Cloudflare Pages with:

- Build command: `npm run generate`
- Build output directory: `.output/public`

For the project context, intended experience, and deferred scope, see [PROJECT.md](PROJECT.md). For contribution guidance, see [AGENTS.md](AGENTS.md).
