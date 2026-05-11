import Container from '@/components/ui/Container'

const phases = [
  {
    num: '01',
    title: 'Discovery & Alignment',
    body: 'Stakeholder workshops, problem framing, business goal alignment. I often coach PMs to use AI tools to externalize ideas before sessions.',
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
    body: "In modern stacks, the AI-built prototype's front end can be the starting point for engineering — handoff is closer to a code review than a spec dump.",
  },
]

export default function DesignProcess() {
  return (
    <section className="bg-white py-32 border-t border-gray-light">
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-6">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            Design Process
          </span>
          <h2 className="text-[36px] md:text-[44px] font-light tracking-tight text-black leading-snug max-w-2xl">
            A non-linear process, accelerated by AI
          </h2>
        </div>
        <p className="text-[18px] font-light italic text-gray-dark leading-relaxed max-w-2xl mb-16">
          Feedback and design decisions, accelerated with AI, validated from day one — taste and
          judgment still belong to the designer.
        </p>

        {/* 3×2 grid of phases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-light mb-12">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-white p-8 lg:p-10 flex flex-col gap-4">
              <span className="text-label font-medium tracking-label uppercase text-red-accent">
                {phase.num}
              </span>
              <h3 className="text-[18px] font-light text-black leading-snug">{phase.title}</h3>
              <p className="text-body-s font-light leading-relaxed text-gray-dark">{phase.body}</p>
            </div>
          ))}
        </div>

        {/* Loop note */}
        <p className="text-body-s font-light italic text-gray leading-relaxed max-w-3xl">
          Phases 3–5 cycle 2–3 times before going to production. Workshops (Phase 1) revisit at
          major decision points. AI accelerates phases 3 and 6, but never replaces judgment in
          phases 1, 2 and 4 — that&apos;s where senior design lives.
        </p>
      </Container>
    </section>
  )
}
