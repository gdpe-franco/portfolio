# Project brief

## Purpose

A personal portfolio for a full-stack software engineer and independent developer. It should serve prospective clients and full-time recruiters through one clear professional identity.

## Direction

The visual reference is https://ceo.pronexus.in/: a confident, editorial, dark-first portfolio with prominent type, layered colour, clear career narrative, and technical case studies. This project takes inspiration from that direction without copying its layout or content.

## Product principles

- Lead with backend systems and outcomes, not a list of tools.
- Present client services alongside recruiter-friendly experience and public project proof, without splitting the site into separate brands or journeys.
- Explain architecture decisions and trade-offs in selected case studies.
- Keep motion restrained, performant, and optional for people who prefer reduced motion.
- Ship as a static site first. Do not add a backend without a concrete need.

## Initial scope

- Single-page landing page with an animated CSS aurora, mono-first typography, and a subtle grain surface.
- Light and dark mode with the preference stored in the browser.
- Sections for presentation and mission, about, experience, selected projects, a small experiment, services, technologies, and contact.
- Formal UML component diagrams are authored in PlantUML and rendered to static, theme-specific SVG during the build. They remain concise technical-design content, not exhaustive architecture documentation.
- Static Nuxt output suitable for Cloudflare Pages.

## Deferred until content is ready

- Resume, blog, analytics, contact form backend, and CMS.
- Project screenshots. A real portrait, CV PDF, GitHub profile URL, Discord profile URL, and exact employer history still need to be supplied.
- Any paid Cloudflare product.

## Deployment target

Cloudflare Pages Free. The site should remain static unless a dynamic capability is explicitly justified.

Cloudflare Pages deploys production through Git integration from protected `main`. GitHub Actions validates pull requests but does not deploy or hold Cloudflare credentials. Preview deployments are for review and should be protected with Cloudflare Access.
