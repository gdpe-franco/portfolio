# Guada Franco Portfolio

A static-first portfolio for Guada Franco, a full-stack software engineer and independent developer.

## Technology

Nuxt, Vue, TypeScript, and CSS. The site generates static output for Cloudflare Pages.

## Local development

Docker is the recommended local setup in this workspace because Node is not installed on the host.

```sh
docker compose up portfolio
```

Open http://localhost:3000.

To validate the production static build locally:

```sh
docker compose up --build preview
```

Open http://localhost:8080.

## Quality checks

```sh
npm run check
```

This runs linting, type checking, and static generation. The production Docker build runs the same command from a clean dependency install.

GitHub Actions runs the same checks for pull requests to `main` and for merged changes on `main`.

## Deployment

Cloudflare Pages deploys the static output through Git integration. CI validates changes before they merge into protected `main`.

For the project context, intended experience, and deferred scope, see [PROJECT.md](PROJECT.md). For contribution guidance, see [AGENTS.md](AGENTS.md).
