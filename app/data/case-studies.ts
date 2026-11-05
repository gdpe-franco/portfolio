export const caseStudies = [
  {
    slug: 'ai-coding-agent-pipeline',
    name: 'AI Multi-Agent Coding Platform',
    repository: 'https://github.com/gdpe-franco/ai-coding-agent-pipeline',
    technologies: [['Python', 'python'], ['FastAPI', 'fastapi'], ['LangGraph', 'langchain'], ['Azure OpenAI', 'openai'], ['PostgreSQL', 'postgresql'], ['Vue.js', 'vuedotjs'], ['Docker', 'docker']],
  },
  {
    slug: 'book-management-system',
    name: 'Book Management System',
    repository: 'https://github.com/gdpe-franco/book-management-system',
    technologies: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['Node.js', 'nodedotjs'], ['TypeScript', 'typescript'], ['Redis', 'redis']],
  },
  {
    slug: 'cfdi-4-generator',
    name: 'CFDI 4.0 Generator',
    repository: 'https://github.com/gdpe-franco/cfdi-4-generator',
    technologies: [['Laravel', 'laravel'], ['PHP', 'php'], ['Docker', 'docker']],
  },
  {
    slug: 'geographical-keys',
    name: 'Geographical Keys',
    repository: 'https://github.com/gdpe-franco/geostatistical-keys',
    technologies: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['MySQL', 'mysql'], ['Docker', 'docker']],
  },
] as const

export function findCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
