export default {
  "metadata": {
    "homeTitle": "Guada Franco · Full-Stack Software Engineer",
    "homeDescription": "Guada Franco is a full-stack software engineer and independent developer who builds integrations, backend systems, automation, and custom tools."
  },
  "copy": {
    "nav": [
      "Experience",
      "Projects",
      "Services",
      "Contact"
    ],
    "home": "Home",
    "role": "FULL-STACK SOFTWARE ENGINEER · INDEPENDENT DEVELOPER",
    "intro": "I’m an engineer who enjoys understanding systems in context: the custom workflows behind them and the people who rely on them. I build reliable software that fits the way work actually happens and makes it simpler.",
    "projectsCta": "See services →",
    "resume": "View resume →",
    "drives": "↗ WHAT DRIVES ME",
    "drivesText": "Making thoughtful technical choices, working generously with others, and building software that remains cared for over time.",
    "about": "About me",
    "experience": "Experience",
    "experienceIntro": "Professional experience across SaaS, logistics, integrations, and internal tools.",
    "viewResume": "View full resume →",
    "projects": "Projects",
    "projectsIntro": "Each project includes a concise case study of the system, trade-offs, and delivery.",
    "experienceLink": "My professional experience is described separately in the Experience section.",
    "experiment": "Experiment",
    "services": "Services",
    "servicesIntro": "I take on focused work involving integrations, automation, backend systems, and internal tools.",
    "technologies": "Technologies I use",
    "technologiesIntro": "A mix of what I use often and things I’m getting better at.",
    "contact": "Contact",
    "contactIntro": "Have a project in mind, or want to talk about working together?",
    "discuss": "Discuss a project →",
    "readEnglish": "Read in English",
    "readSpanish": "Leer en español",
    "github": "Open on GitHub",
    "logo": "logo",
    "light": "Switch to light mode",
    "dark": "Switch to dark mode",
    "highlights": "Portfolio highlights",
    "years": "years",
    "months": "months",
    "greeting": "hey, I’m Guada",
    "openMenu": "Open navigation",
    "closeMenu": "Close navigation",
    "navigation": "Main navigation",
    "portraitAlt": "Portrait of Guada Franco",
    "viewProject": "View project",
    "experienceBefore": "My professional experience is described separately in the",
    "experienceAfter": "section."
  },
  "services": [
    {
      "name": "APIs & integrations",
      "level": "Primary focus",
      "text": "Connect e-commerce, payment, shipping, invoicing, and internal systems through APIs and webhooks."
    },
    {
      "name": "Automation & data",
      "level": "Focused offer",
      "text": "Automate repetitive reporting, CSV, spreadsheet, and data-cleanup tasks."
    },
    {
      "name": "Backend & web systems",
      "level": "Primary focus",
      "text": "Build and maintain APIs and web systems with PHP, TypeScript, JavaScript, Go, Python or other languages as appropriate for the project."
    },
    {
      "name": "Custom tools & AI",
      "level": "Focused offer",
      "text": "Build small internal tools and practical AI-assisted workflows for specific needs."
    }
  ],
  "experiments": [
    {
      "name": "Cat Gesture Meme Tracker",
      "text": "A browser experiment that uses MediaPipe to respond to detected hand gestures with cat reactions.",
      "repo": "https://github.com/gdpe-franco/gesture-meme-tracker",
      "stack": [
        [
          "JavaScript",
          "javascript"
        ],
        [
          "MediaPipe",
          "mediapipe"
        ],
        [
          "Docker",
          "docker"
        ]
      ]
    }
  ],
  "experiences": [
    {
      "role": "Software Engineer",
      "company": "MedTrainer",
      "url": "https://medtrainer.com/",
      "period": "Sep 2025 – Jul 2026",
      "workMode": "Remote",
      "location": "Querétaro, México",
      "summary": "Owned Symfony features from design through production support for a SaaS platform serving 8,000+ organizations. Authored and presented technical design proposals, and designed and shipped an internal MCP integration to production on OpenAI’s Responses API.",
      "tags": [
        "Symfony",
        "APIs",
        "MCP",
        "OpenAI"
      ]
    },
    {
      "role": "Full-Stack Developer",
      "company": "Mienvío",
      "url": "https://www.mienvio.mx/",
      "period": "Aug 2023 – Sep 2025",
      "workMode": "Remote",
      "location": "Monterrey, México",
      "summary": "Owned the Laravel 5.2 to 6.x monolith migration version by version for a logistics platform serving 1,000+ active merchants. Built and publicly shipped API v2 for shipment rates and labels with a staged rollout; implemented SAML 2.0 SSO with Auth0 for enterprise customers; maintained and refactored marketplace and carrier integrations.",
      "tags": [
        "Laravel",
        "React",
        "Go",
        "Python",
        "Vue.js",
        "Auth0"
      ]
    },
    {
      "role": "Web Developer Intern",
      "company": "Universidad Politécnica de Querétaro",
      "url": "https://www.upq.mx/#/",
      "period": "2022 – 2023",
      "workMode": "On-site",
      "location": "Querétaro, México",
      "summary": "Worked on system analysis, UI implementation, Laravel APIs, and documentation.",
      "tags": [
        "Laravel",
        "PrimeVue",
        "UML"
      ]
    }
  ],
  "about": [
    "My work spans user-facing interfaces, APIs, data, and the practical details that make a product work well as a whole. I build integrations and internal tools that support daily work.",
    "Backend engineering is where I feel most at home, especially background jobs, queues and retries, observability, authentication, and clear service boundaries. At the same time, I care about the whole development lifecycle, from understanding a problem to shipping and supporting a solution.",
    "On a normal workday I use AI agents, MCP servers, and coding assistants for research, prototyping, and routine development tasks. I find this new wave of tools fascinating."
  ],
  "projectLabels": {
    "navigation": "Project navigation",
    "home": "Portfolio home",
    "all": "All projects",
    "readEnglish": "Read in English",
    "readSpanish": "Leer en español",
    "source": "Source on GitHub",
    "contextLabel": "Context & scope",
    "approachLabel": "Approach",
    "decisionsLabel": "Key decisions",
    "design": "System design",
    "resultLabel": "Result",
    "technologies": "Technologies",
    "back": "Back to projects →",
    "light": "Switch to light mode",
    "dark": "Switch to dark mode"
  },
  "projects": {
    "cfdi-4-generator": {
      "kind": "Integration & document processing",
      "description": "A focused Laravel technical test that converts structured JSON into CFDI 4.0 Ingreso XML and validates it locally.",
      "context": "Generate a CFDI 4.0 Ingreso document from structured invoice data without treating a specification-heavy task as a string-formatting exercise. It supports one IVA traslado per concepto; PAC integration, timbrado, real certificates, signatures, APIs, and a user interface are deliberately outside its scope.",
      "approach": "An Artisan command reads JSON, applies input, SAT catalogue, and filling-guide checks, calculates amounts, builds XML with DOMDocument, writes the output, and validates it locally.",
      "decisions": "Amounts stay as decimal strings and use bcmath rather than PHP floats. Validation is layered: input and catalogue gates, local SAT XSD validation, then advisory structural checks.",
      "result": "The command writes a tracked XML deliverable and reports validation failures with a non-zero exit status. It is a public demonstration, not an invoicing system.",
      "diagramDescription": "CFDI command reads JSON, validates and calculates it, then produces and validates XML."
    },
    "book-management-system": {
      "kind": "Internal tool",
      "description": "A local book-management dashboard with role-based access, append-only audit history, and live notifications.",
      "context": "Managing book records is only part of the workflow. Changes also need clear authorization, a dependable history, and timely feedback. Books can be created, updated, and soft-deleted; admins and superadmins manage books and view history, while only superadmins can list users.",
      "approach": "The Vue dashboard calls a versioned Laravel API. Laravel owns users and books, then publishes committed book changes to Redis Streams. A separate audit service stores each event and notifies connected dashboards through Socket.IO.",
      "decisions": "Laravel is the single security authority: Sanctum issues and validates tokens, and Policies enforce access. Redis Streams keeps audit work separate from book writes; unique event IDs make retries safe. Each service accesses only its own MySQL database.",
      "result": "Authorized users can manage books and inspect their history. A change produces one audit record despite retries, then reaches connected dashboards after it is stored.",
      "diagramDescription": "Book changes flow through Laravel and Redis to the audit service, which notifies the dashboard."
    },
    "geographical-keys": {
      "kind": "Public data application",
      "description": "A public Laravel application for browsing Mexico’s federal entities and municipalities through the INEGI Geo Catalog.",
      "context": "Make INEGI’s geographic catalogue practical to browse without turning a small public application into a general-purpose geographic platform. The scope is Mexico only: the application persists the 32 federal entities, while municipality data is retrieved after a visitor selects a state.",
      "approach": "An Artisan command reads INEGI’s state catalog and upserts records by state code. A Vue data table offers search, sorting, and pagination; selecting a state fetches its municipalities through a versioned Laravel endpoint.",
      "decisions": "External INEGI responses are validated and mapped through readonly DTOs before use. A unique state-code index and upsert make imports safe to repeat. Municipalities stay live-only and are cached in browser storage for one day instead of being persisted.",
      "result": "The application provides a browsable state catalog and inline municipality tables while keeping the stored data model limited to the state records it needs.",
      "diagramDescription": "States are imported from INEGI, while municipalities are retrieved when a visitor selects a state."
    }
  }
}
