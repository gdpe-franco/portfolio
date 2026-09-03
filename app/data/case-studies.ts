export const caseStudies = [
  {
    slug: 'cfdi-4-generator',
    kind: 'Integration & document processing',
    name: 'CFDI 4.0 Generator',
    description: 'A focused Laravel technical test that converts structured JSON into CFDI 4.0 Ingreso XML and validates it locally.',
    repository: 'https://github.com/gdpe-franco/cfdi-4-generator',
    technologies: [['Laravel', 'laravel'], ['PHP', 'php'], ['Docker', 'docker']],
    context: 'Generate a CFDI 4.0 Ingreso document from structured invoice data without treating a specification-heavy task as a string-formatting exercise. It supports one IVA traslado per concepto; PAC integration, timbrado, real certificates, signatures, APIs, and a user interface are deliberately outside its scope.',
    approach: 'An Artisan command reads JSON, applies input, SAT catalogue, and filling-guide checks, calculates amounts, builds XML with DOMDocument, writes the output, and validates it locally.',
    decisions: 'Amounts stay as decimal strings and use bcmath rather than PHP floats. Validation is layered: input and catalogue gates, local SAT XSD validation, then advisory structural checks.',
    result: 'The command writes a tracked XML deliverable and reports validation failures with a non-zero exit status. It is a public demonstration, not an invoicing system.',
    diagram: { description: 'CFDI command reads JSON, validates and calculates it, then produces and validates XML.' },
  },
  {
    slug: 'book-management-system',
    kind: 'Internal tool',
    name: 'Book Management System',
    description: 'A local book-management dashboard with role-based access, append-only audit history, and live notifications.',
    repository: 'https://github.com/gdpe-franco/book-management-system',
    technologies: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['Node.js', 'nodedotjs'], ['TypeScript', 'typescript'], ['Redis', 'redis']],
    context: 'Managing book records is only part of the workflow. Changes also need clear authorization, a dependable history, and timely feedback. Books can be created, updated, and soft-deleted; admins and superadmins manage books and view history, while only superadmins can list users.',
    approach: 'The Vue dashboard calls a versioned Laravel API. Laravel owns users and books, then publishes committed book changes to Redis Streams. A separate audit service stores each event and notifies connected dashboards through Socket.IO.',
    decisions: 'Laravel is the single security authority: Sanctum issues and validates tokens, and Policies enforce access. Redis Streams keeps audit work separate from book writes; unique event IDs make retries safe. Each service accesses only its own MySQL database.',
    result: 'Authorized users can manage books and inspect their history. A change produces one audit record despite retries, then reaches connected dashboards after it is stored.',
    diagram: { description: 'Book changes flow through Laravel and Redis to the audit service, which notifies the dashboard.' },
  },
  {
    slug: 'geographical-keys',
    kind: 'Public data application',
    name: 'Geographical Keys',
    description: 'A public Laravel application for browsing Mexico’s federal entities and municipalities through the INEGI Geo Catalog.',
    repository: 'https://github.com/gdpe-franco/geostatistical-keys',
    technologies: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['MySQL', 'mysql'], ['Docker', 'docker']],
    context: 'Make INEGI’s geographic catalogue practical to browse without turning a small public application into a general-purpose geographic platform. The scope is Mexico only: the application persists the 32 federal entities, while municipality data is retrieved after a visitor selects a state.',
    approach: 'An Artisan command reads INEGI’s state catalog and upserts records by state code. A Vue data table offers search, sorting, and pagination; selecting a state fetches its municipalities through a versioned Laravel endpoint.',
    decisions: 'External INEGI responses are validated and mapped through readonly DTOs before use. A unique state-code index and upsert make imports safe to repeat. Municipalities stay live-only and are cached in browser storage for one day instead of being persisted.',
    result: 'The application provides a browsable state catalog and inline municipality tables while keeping the stored data model limited to the state records it needs.',
    diagram: { description: 'States are imported from INEGI, while municipalities are retrieved when a visitor selects a state.' },
  },
] as const

export function findCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
