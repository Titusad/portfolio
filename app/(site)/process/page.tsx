import Container from '@/components/ui/Container'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'Design Process — David Castrillón',
  description:
    'A non-linear design process accelerated by AI. Six phases that compress concept to validated direction.',
}

const phases = [
  {
    num: '01',
    title: 'Discovery & Alignment',
    body: 'Stakeholder workshops, problem framing, business goal alignment. I often coach PMs to use AI tools to externalize ideas before our sessions to arrive with material, not a blank page.',
  },
  {
    num: '02',
    title: 'Platform & User Research',
    body: "Audit of the platform stack + design systems + user research. Defines what's possible vs. what's customizable, upfront.",
  },
  {
    num: '03',
    title: 'Concept & AI Prototyping',
    body: 'Direct jump from concept to a working AI-generated prototype. The prototype IS the wireframe — testable from day one.',
  },
  {
    num: '04',
    title: 'Validation',
    body: 'Stakeholder reviews + user testing on the AI prototype. Decisions backed by evidence on something people can actually click.',
  },
  {
    num: '05',
    title: 'Design System Application',
    body: 'Once direction is validated, the design system is applied — tokens, components, accessibility, polish. The prototype becomes the production-ready design.',
  },
  {
    num: '06',
    title: 'Handoff & Design QA',
    body: "In modern stacks, the AI-built prototype's front-end can be the starting point for engineering — handoff is closer to a code review than a spec dump.",
  },
]

export default function ProcessPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Design Process</Eyebrow>
          <p className="mt-4 text-[22px] italic text-gray-dark max-w-2xl">
            A non-linear design process accelerated by AI
          </p>
          <h1 className="mt-2 text-display-m md:text-[96px] font-light leading-[1.0] tracking-tight">
            How I work.
          </h1>

          <p className="mt-12 text-[18px] italic text-gray-dark max-w-3xl">
            Feedback and design decisions, accelerated with AI, validated from
            day one — taste and judgment still belong to the designer.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
            {phases.map((p) => (
              <div key={p.num}>
                <p className="text-[32px] font-light text-red-accent">
                  {p.num}
                </p>
                <h3 className="mt-2 text-[22px] font-bold">{p.title}</h3>
                <p className="mt-4 text-body leading-relaxed text-gray-dark">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-3xl border-l-[3px] border-red-accent pl-6">
            <Eyebrow>Loop note</Eyebrow>
            <p className="mt-2 text-body italic leading-relaxed text-gray-dark">
              Phases 3—5 cycle 2—3 times before going to production. Workshops
              (Phase 1) revisit at major decision points. AI accelerates
              phases 3 and 6 dramatically, but never replaces the judgment in
              phases 1, 2 and 4 — those are where senior design lives.
            </p>
          </div>
        </Container>
      </section>
    </article>
  )
}
