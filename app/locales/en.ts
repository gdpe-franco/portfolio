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
    "role": "FULL-STACK SOFTWARE ENGINEER · INDEPENDENT DEVELOPER",
    "intro": "I'm an engineer who enjoys understanding systems in context: the custom workflows behind them and the people who rely on them.",
    "introQuestions": "Give me a problem, and I'll start asking questions: what's the bigger picture, what are our options, and which trade-offs make sense?",
    "projectsCta": "Explore projects →",
    "resume": "View resume →",
    "drives": "↗ WHAT DRIVES ME",
    "drivesText": "Taking ownership, collaborating generously with others, and caring about the code and what happens after it's shipped.",
    "about": "About me",
    "experience": "Experience",
    "experienceIntro": "Building and supporting software across SaaS, logistics, APIs, and integrations.",
    "viewResume": "View full resume →",
    "projects": "Projects",
    "projectsIntro": "Some things I've built, the problems behind them, and the decisions that shaped their design.",
    "experiment": "Experiment",
    "services": "Services",
    "servicesIntro": "I offer integrations, automation, backend systems, and internal tools.",
    "technologies": "Technologies I use",
    "technologiesIntro": "Tools I've worked with, from everyday essentials to newer technologies I'm exploring.",
    "technologyFilters": "Filter technologies by category",
    "technologyCategories": ["All", "Backend & APIs", "Frontend", "Data & Infrastructure", "Dev Tools", "AI & Agents"],
    "contact": "Contact",
    "contactHeadline": "Let's talk",
    "contactIntro": "Have an opportunity, an interesting problem, or something worth building together? I'd love to hear about it.",
    "discuss": "Get in touch →",
    "github": "Open on GitHub",
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
  },
  "services": [
    {
      "name": "APIs & integrations",
      "level": "Primary focus",
      "text": "Connect products and services through APIs, webhooks, and custom integrations."
    },
    {
      "name": "Automation & data",
      "level": "Focused offer",
      "text": "Automate repetitive workflows, reporting, and data processing."
    },
    {
      "name": "Backend & web systems",
      "level": "Primary focus",
      "text": "Build, extend, and maintain APIs, backend services, and web applications."
    },
    {
      "name": "Custom tools & AI",
      "level": "Focused offer",
      "text": "Build internal tools and explore practical AI integrations for existing workflows."
    }
  ],
  "experiments": [
    {
      "name": "Cat Gesture Meme Tracker",
      "text": "A browser experiment that detects hand gestures and responds with cat reactions using MediaPipe.",
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
      "summary": "Developed Symfony features for a SaaS platform serving 8,000+ organizations, from technical design through production support. Contributed to architecture discussions and extended an existing course-recommendation chatbot: its RAG/vector-store flow remained separate from a new MCP flow for internal API questions.",
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
      "summary": "Worked on backend systems, APIs, and integrations for a logistics platform serving 1,000+ active merchants. Migrated a Laravel monolith from 5.2 to 6.x, redesigned shipment workflows through API v2, implemented enterprise SSO, and maintained carrier and marketplace integrations.",
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
      "summary": "Contributed to system analysis, interface design, Laravel APIs, and technical documentation.",
      "tags": [
        "Laravel",
        "PrimeVue",
        "UML"
      ]
    }
  ],
  "about": [
    "My work spans APIs, data, integrations, and user-facing applications. I enjoy connecting the pieces of a product, understanding how they interact, and identifying where changes can make a meaningful difference.",
    "Backend engineering is where I feel most at home, particularly with asynchronous workflows, authentication, service boundaries, and system integrations. I enjoy working across the development lifecycle, from exploring requirements and designing solutions to shipping and supporting them.",
    "Lately, I've been exploring AI agents, MCP, and agent-based applications. I'm particularly interested in how these technologies can enhance existing products and create new possibilities as AI becomes part of everyday software."
  ],
  "projectLabels": {
    "navigation": "Project navigation",
    "all": "All projects",
    "source": "Source on GitHub",
    "contextLabel": "Context & scope",
    "approachLabel": "Approach",
    "decisionsLabel": "Decisions & trade-offs",
    "design": "System design",
    "resultLabel": "Result",
    "technologies": "Technologies",
    "back": "Back to projects →",
    "light": "Switch to light mode",
    "dark": "Switch to dark mode"
  },
  "projects": {
    "ai-coding-agent-pipeline": {
      "kind": "AI orchestration & developer tooling",
      "description": "A platform that turns natural-language requests into web applications through coordinated planning, coding, and review agents.",
      "context": "Build a platform where people can describe a small web application, inspect how it is generated, and request changes in the same project conversation. The current implementation generates static HTML, CSS, and JavaScript; arbitrary repository modification and generated backend execution are out of scope.",
      "approach": "A Vue and TypeScript chat sends requests to a FastAPI service, which persists work in PostgreSQL for a separate LangGraph worker. Planner, Coder, and Reviewer agents use Azure OpenAI; approved files are published as a preview. For local deployments, ngrok can expose the application while Cloudflare Quick Tunnel provides a separate hostname for generated previews.",
      "decisions": "Each agent returns structured, validated output. The Reviewer can send bounded feedback to the Coder; when attempts run out or the case needs escalation, the run pauses for user guidance. A separate worker keeps long model calls out of HTTP requests, while PostgreSQL stores application state, queue work, history, and graph checkpoints. The preview uses a separate origin from the signed-in application.",
      "result": "Users can inspect plans, checks, review feedback, saved files, execution history, and reported token usage, then view the latest approved preview. Automated checks cover required files and JavaScript syntax; functional behavior still needs dedicated testing.",
      "diagramDescription": "A Vue chat sends requests through FastAPI to a PostgreSQL-backed worker running Planner, Coder, and Reviewer agents; approved applications are served on a separate preview origin."
    },
    "cfdi-4-generator": {
      "kind": "Integration & document processing",
      "description": "A Laravel application that transforms structured JSON into CFDI 4.0 XML and validates the generated documents locally.",
      "context": "Generate a CFDI 4.0 Ingreso document from structured invoice data without treating a specification-heavy task as a string-formatting exercise. It supports one IVA traslado per concepto; PAC integration, timbrado, real certificates, signatures, APIs, and a user interface are deliberately outside its scope.",
      "approach": "An Artisan command reads JSON, applies input, SAT catalogue, and filling-guide checks, calculates amounts, builds XML with DOMDocument, writes the output, and validates it locally.",
      "decisions": "Amounts stay as decimal strings and use bcmath rather than PHP floats. Validation is layered: input and catalogue gates, local SAT XSD validation, then advisory structural checks.",
      "result": "The command writes a tracked XML deliverable and reports validation failures with a non-zero exit status. It is a public demonstration, not an invoicing system.",
      "diagramDescription": "CFDI command reads JSON, validates and calculates it, then produces and validates XML."
    },
    "book-management-system": {
      "kind": "Internal tool",
      "description": "A book-management dashboard with role-based access, event-driven auditing, and real-time notifications.",
      "context": "Managing book records is only part of the workflow. Changes also need clear authorization, a dependable history, and timely feedback. Books can be created, updated, and soft-deleted; admins and superadmins manage books and view history, while only superadmins can list users.",
      "approach": "The Vue dashboard calls a versioned Laravel API. Laravel owns users and books, then publishes committed book changes to Redis Streams. A separate audit service stores each event and notifies connected dashboards through Socket.IO.",
      "decisions": "Laravel is the single security authority: Sanctum issues and validates tokens, and Policies enforce access. Redis Streams keeps audit work separate from book writes; unique event IDs make retries safe. Each service accesses only its own MySQL database.",
      "result": "Authorized users can manage books and inspect their history. A change produces one audit record despite retries, then reaches connected dashboards after it is stored.",
      "diagramDescription": "Book changes flow through Laravel and Redis to the audit service, which notifies the dashboard."
    },
    "geographical-keys": {
      "kind": "Public data application",
      "description": "A Laravel application for exploring Mexico's states and municipalities through INEGI's geographical catalog.",
      "context": "Make INEGI’s geographic catalogue practical to browse without turning a small public application into a general-purpose geographic platform. The scope is Mexico only: the application persists the 32 federal entities, while municipality data is retrieved after a visitor selects a state.",
      "approach": "An Artisan command reads INEGI’s state catalog and upserts records by state code. A Vue data table offers search, sorting, and pagination; selecting a state fetches its municipalities through a versioned Laravel endpoint.",
      "decisions": "External INEGI responses are validated and mapped through readonly DTOs before use. A unique state-code index and upsert make imports safe to repeat. Municipalities stay live-only and are cached in browser storage for one day instead of being persisted.",
      "result": "The application provides a browsable state catalog and inline municipality tables while keeping the stored data model limited to the state records it needs.",
      "diagramDescription": "States are imported from INEGI, while municipalities are retrieved when a visitor selects a state."
    }
  }
}
