import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const output = new URL('../.output/public/', import.meta.url)

test('prerenders the AI case study in English and Spanish with both diagram themes', async () => {
  const english = await readFile(new URL('projects/ai-coding-agent-pipeline/index.html', output), 'utf8')
  const spanish = await readFile(new URL('es/projects/ai-coding-agent-pipeline/index.html', output), 'utf8')
  const englishHome = await readFile(new URL('index.html', output), 'utf8')
  const spanishHome = await readFile(new URL('es/index.html', output), 'utf8')

  assert.match(english, /AI orchestration &amp; developer tooling/)
  assert.match(english, /Each agent returns structured, validated output/)
  assert.match(spanish, /Orquestación de IA y herramientas para desarrollo/)
  assert.match(spanish, /Cada agente devuelve una salida estructurada y validada/)
  assert.match(englishHome, /I find this new wave of tools fascinating/)
  assert.match(spanishHome, /Esta nueva ola de herramientas me parece fascinante/)
  assert.match(english, /href="\/es\/projects\/ai-coding-agent-pipeline"/)
  assert.match(spanish, /href="\/projects\/ai-coding-agent-pipeline"/)
  assert.match(english, /rel="canonical" href="https:\/\/guada-franco\.pages\.dev\/projects\/ai-coding-agent-pipeline"/)
  assert.match(spanish, /hreflang="en" href="https:\/\/guada-franco\.pages\.dev\/projects\/ai-coding-agent-pipeline"/)
  assert.match(englishHome, /href="https:\/\/cdn\.jsdelivr\.net\/gh\/gdpe-franco\/career-documents@main\/cv\.pdf"/)
  assert.match(spanishHome, /href="https:\/\/cdn\.jsdelivr\.net\/gh\/gdpe-franco\/career-documents@main\/cv-es\.pdf"/)
  assert.match(english, /\/diagrams\/dark\/ai-coding-agent-pipeline\.svg/)
  assert.match(spanish, /\/diagrams\/dark\/ai-coding-agent-pipeline\.svg/)

  await Promise.all(['light', 'dark'].map(theme => access(new URL(`diagrams/${theme}/ai-coding-agent-pipeline.svg`, output))))
})
