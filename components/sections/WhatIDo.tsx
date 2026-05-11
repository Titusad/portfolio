import Container from '@/components/ui/Container'
import { ArrowRight } from 'lucide-react'

const cards = [
  {
    number: '01',
    eyebrow: '01 / Enterprise Platforms',
    title: 'Salesforce + SAP-integrated SaaS',
    body: "Designing UI on top of major enterprise platforms — where you don't get to redesign the world, only the workflows that matter inside it. Legacy modernization, design systems, and configurators for B2B teams.",
    bullets: [
      'Platform-aware UI design',
      'Legacy modernization without disruption',
      'Design system token architecture',
      'Configurator UX',
    ],
    cta: 'View Enterprise cases',
    href: '#featured-cases',
  },
  {
    number: '02',
    eyebrow: '02 / Product Design',
    title: 'Founder-led products & B2B SaaS',
    body: 'Building products from spec to working MVP, with AI tools woven into ideation, prototyping, and validation. Cross-surface systems where habit, retention, and trust live in the architecture, not the visuals.',
    bullets: [
      'End-to-end product strategy',
      'Spec-driven design',
      'AI-augmented prototyping',
      'Cross-surface systems (web, app, WhatsApp, email)',
    ],
    cta: 'View Product cases',
    href: '#featured-cases',
  },
]

export default function WhatIDo() {
  return (
    <section className="bg-white py-32">
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            What I Do
          </span>
          <h2 className="text-[36px] md:text-[44px] font-light tracking-tight text-black leading-snug max-w-xl">
            Designing where complexity meets users
          </h2>
        </div>

        {/* Two-column cards */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-light">
          {cards.map((card) => (
            <div key={card.number} className="bg-white p-10 lg:p-12 flex flex-col gap-7">
              <span className="text-label font-medium tracking-label uppercase text-red-accent">
                {card.eyebrow}
              </span>
              <h3 className="text-[24px] lg:text-heading font-light text-black leading-snug">
                {card.title}
              </h3>
              <p className="text-body font-light leading-relaxed text-gray-dark">{card.body}</p>
              <ul className="flex flex-col gap-2">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-red-accent text-body leading-relaxed mt-px">·</span>
                    <span className="text-body font-light text-gray-dark">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-body-s font-light text-black underline-offset-4 hover:underline group mt-auto pt-2"
              >
                {card.cta}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
