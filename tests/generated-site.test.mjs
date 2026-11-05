import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const output = new URL('../.output/public/', import.meta.url)

test('prerenders localized project pages, resume links, and diagram themes', async () => {
  const [english, spanish, englishHome, spanishHome] = await Promise.all([
    'projects/ai-coding-agent-pipeline/index.html',
    'es/projects/ai-coding-agent-pipeline/index.html',
    'index.html',
    'es/index.html',
  ].map(path => readFile(new URL(path, output), 'utf8')))

  assert.match(english, /AI orchestration &amp; developer tooling/)
  assert.match(english, /Each agent returns structured, validated output/)
  assert.match(spanish, /Orquestación de IA y herramientas para desarrollo/)
  assert.match(spanish, /Cada agente devuelve una salida estructurada y validada/)
  assert.match(english, /href="\/es\/projects\/ai-coding-agent-pipeline"/)
  assert.match(spanish, /href="\/projects\/ai-coding-agent-pipeline"/)
  assert.match(english, /rel="canonical" href="https:\/\/guada-franco\.pages\.dev\/projects\/ai-coding-agent-pipeline"/)
  assert.match(spanish, /hreflang="en" href="https:\/\/guada-franco\.pages\.dev\/projects\/ai-coding-agent-pipeline"/)
  assert.match(englishHome, /career-documents@main\/cv\.pdf/)
  assert.match(spanishHome, /career-documents@main\/cv-es\.pdf/)
  assert.match(englishHome, /Redux/)
  for (const tool of ['Cloudflare Pages', 'ngrok', 'pytest', 'Playwright']) {
    assert.ok(englishHome.includes(tool))
  }
  assert.match(english, /\/diagrams\/dark\/ai-coding-agent-pipeline\.svg/)

  await Promise.all(['light', 'dark'].map(theme => access(new URL(`diagrams/${theme}/ai-coding-agent-pipeline.svg`, output))))
})
