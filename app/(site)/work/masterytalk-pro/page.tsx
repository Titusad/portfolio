import Container from '@/components/ui/Container'
import PageTitle from '@/components/case-study/PageTitle'
import MetaBlock from '@/components/case-study/MetaBlock'
import ImageGrid from '@/components/case-study/ImageGrid'
import PullQuote from '@/components/case-study/PullQuote'
import ClosingBlock from '@/components/case-study/ClosingBlock'
import TableOfContents from '@/components/case-study/TableOfContents'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'MasteryTalk PRO — Case Study 02 | David Castrillón',
  description:
    'Founder-led product. AI-powered communication coach for nearshoring professionals. Built end-to-end: product strategy, business model, design system, and working MVP.',
}

export default function MasteryTalkProPage() {
  return (
    <article className="bg-white">
      <TableOfContents
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'brief', label: 'The Brief' },
          { id: 'discovery', label: 'Discovery' },
          { id: 'decisions', label: 'Key Decisions' },
          { id: 'solution', label: 'The Solution' },
          { id: 'outcome', label: 'Outcome' },
        ]}
      />

      {/* OVERVIEW */}
      <section id="overview" className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Case Study · 02</Eyebrow>
          <h1 className="mt-4 text-display-m md:text-[80px] font-light leading-[1.05] tracking-tight">
            MasteryTalk PRO
          </h1>
          <p className="mt-4 text-[22px] italic text-gray-dark max-w-2xl">
            Founder Project · End-to-End Product Ownership
          </p>

          <div className="mt-8 inline-block border border-gray-light px-4 py-2 rounded">
            <p className="text-label uppercase tracking-wider text-gray-dark">
              Project shown under NDA · Real assets can be shown on a videocall.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <MetaBlock label="Industry">
              Professional English Coaching · Nearshoring (LATAM → US)
            </MetaBlock>
            <MetaBlock label="Client">
              Founder-led product · Currently in active development
            </MetaBlock>
            <MetaBlock label="Role">
              Founder · Product Designer · Product Manager
            </MetaBlock>
          </div>

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl">
            An AI-powered communication coach for nearshoring professionals — a
            90-day program with immersive voice simulations, executive
            feedback, and a WhatsApp spaced-repetition coach. Built from zero
            across every layer: product strategy, business model, design
            system, and a working MVP.
          </p>

          <div className="mt-12 max-w-3xl">
            <Eyebrow>What I own</Eyebrow>
            <p className="mt-4 text-body-l leading-relaxed">
              Product strategy, 3-tier pricing model, ~600-line product spec
              governing every decision, design system in Tailwind v4, FSD
              architecture, Spec-Driven Development. AI tools (Claude Code,
              Cursor, Figma Make) for ideation, prototyping and MVP
              acceleration — integrated with Stripe, Twilio, OpenAI GPT-4o,
              Gemini, Azure Speech, Supabase.
            </p>
          </div>

          <PullQuote className="mt-16">
            The point isn&apos;t &quot;I&apos;m an engineer.&quot; The point
            is: I can take a product from spec to a working, testable MVP — and
            design decisions get validated in real conditions, not static
            mockups.
          </PullQuote>

          <p className="mt-8 text-[14px] text-gray-dark">
            <a
              href="https://masterytalk.pro"
              className="underline decoration-red-accent decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              → masterytalk.pro
            </a>{' '}
            · MasteryTalk PRO is a work in progress, early access available on
            request.
          </p>
        </Container>
      </section>

      {/* BRIEF */}
      <section id="brief" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="The Brief"
            title="Designing a 90-day transformation, not another English app"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Status">
              Beta v14.9, live on masterytalk.pro. Founding Member program open
              with 25 slots, price locked forever.
            </MetaBlock>
            <MetaBlock label="Surfaces">
              Web app · Landing · WhatsApp coach · Transactional and marketing
              email · Stripe checkout
            </MetaBlock>
            <MetaBlock label="Stack context">
              React 18 · Feature-Sliced Design · Supabase · GPT-4o · Gemini
              Flash · Azure Speech
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">The brief</h3>
            <p className="text-body-l leading-relaxed mt-4">
              MasteryTalk PRO is a professional communication simulator for
              tech professionals across LATAM who already speak English but
              feel their delivery isn&apos;t at the level their position
              demands. It is sold as a structured 90-day program with a
              measurable outcome — moving the user from B2 to C1 on the CEFR
              framework.
            </p>

            <h3 className="text-heading font-light mt-12">The market gap</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Demand for LATAM tech talent in US companies is at historic
              highs — 76% of US firms already employing nearshore talent plan
              to hire more in 2026. But the EF English Proficiency Index 2026
              places Colombia, Brazil and Mexico in the Low band. World-class
              technical talent. English in low band. The bottleneck
              isn&apos;t talent — it&apos;s communication under pressure.
            </p>

            <h3 className="text-heading font-light mt-12">The product reframe</h3>
            <p className="text-body-l leading-relaxed mt-4">
              The category is saturated with English apps that treat the
              problem as missing knowledge — Duolingo for gamification, Babbel
              for content, Talaera for human tutors. For a senior developer
              leading retros with US clients, the gap isn&apos;t vocabulary;
              it&apos;s authority under pressure. The product was reframed not
              as another English app, but as a professional communication
              simulator with a measurable outcome.
            </p>

            <h3 className="text-heading font-light mt-12">The design problem</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Translating that reframe into a coherent system meant
              orchestrating five paths, fifty micro-lessons, a war room, a
              WhatsApp coach, transactional and marketing email — features
              that would normally fragment any product.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              The challenge wasn&apos;t building the features — it was making
              them feel like one program, not a feature buffet.
            </p>
          </div>
        </Container>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Discovery"
            title="Three tensions that shaped every decision"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Method">
              Structural product audit before opening Figma. Mapping where the
              system could break before designing what it would look like.
            </MetaBlock>
            <MetaBlock label="Inputs">
              Commercial brief · Technical spec v3.5 · Journey map v1.2 ·
              Market research (EF EPI 2026, nearshore demand data)
            </MetaBlock>
            <MetaBlock label="Output">
              Three product tensions that became the design north stars for
              the entire engagement.
            </MetaBlock>
          </div>

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl">
            <strong>Three tensions.</strong> Before designing a single screen,
            I audited the full spec to find where the system could break.
            Three structural tensions surfaced — each one capable of
            dissolving the program promise if resolved poorly. They became the
            lens for every screen, every microcopy decision, every state
            transition.
          </p>

          <div className="mt-16 space-y-12 max-w-3xl">
            <div>
              <Eyebrow color="red">01</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Personalization vs. cognitive load
              </h3>
              <p className="mt-4 text-body-l leading-relaxed">
                The product collects rich signal at intake — pillar scores,
                context, profession. But every feature that uses that signal
                adds cognitive surface for the user. Visible logic becomes
                work. Invisible logic stops being perceived. Personalization
                had to be felt, not explained.
              </p>
            </div>

            <div>
              <Eyebrow color="red">02</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Program structure vs. urgency
              </h3>
              <p className="mt-4 text-body-l leading-relaxed">
                A 90-day program needs sequence to deliver outcomes. But real
                users have an interview tomorrow and a presentation in two
                days. Strict gating breaks trust. Open access breaks the
                program. The system needed two parallel logics — structured
                progression AND an urgency valve — without either feeling like
                a workaround.
              </p>
            </div>

            <div>
              <Eyebrow color="red">03</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                High-stakes practice vs. emotional safety
              </h3>
              <p className="mt-4 text-body-l leading-relaxed">
                The session is the product&apos;s core loop. It needs enough
                pressure to simulate a real interview or sales call. But too
                much pressure on session 1 sends the user back to Duolingo.
                Pressure had to ramp — Support, Guidance, Challenge — in a way
                the user opts into rather than gets pushed through.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Key Decisions"
            title="Four decisions that hold the program together"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Framework">
              Each decision maps to one of the three tensions from Discovery.
              Decision 4 is cross-cutting — it serves the program promise as a
              whole, not a single tension.
            </MetaBlock>
            <MetaBlock label="Validation">
              Spec v3.5 governing source of truth · Beta v14.9 usage signals ·
              Founding Member feedback from first cohort
            </MetaBlock>
            <MetaBlock label="Maps to">
              D1 → Tension 1 (Personalization) · D2 → Tension 2 (Urgency) · D3
              → Tension 3 (Pressure) · D4 → Cross-cutting
            </MetaBlock>
          </div>

          <div className="mt-16 space-y-16 max-w-3xl">
            <div>
              <Eyebrow color="red">D1</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                The free session is the product, not a demo
              </h3>
              <p className="mt-2 text-body-s uppercase tracking-wider text-gray">
                Resolves Tension 1 — Personalization
              </p>
              <p className="mt-4 text-body-l leading-relaxed">
                The free Self-Introduction Warm-Up runs the exact same session
                engine as every paid path — same screens, same Strategy
                framework, same Context selection, same voice practice, same
                feedback. The user doesn&apos;t experience a preview. They
                experience the product, with one scenario unlocked. Pillar
                scores, context, and profession data flow into Primary Path
                recommendation without the user ever filling a form. The work
                that earned the recommendation IS the warm-up.
              </p>
            </div>

            <div>
              <Eyebrow color="red">D2</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                War Room as parallel logic, not exception
              </h3>
              <p className="mt-2 text-body-s uppercase tracking-wider text-gray">
                Resolves Tension 2 — Urgency
              </p>
              <p className="mt-4 text-body-l leading-relaxed">
                War Room sits alongside the Primary Path with its own button
                in the header — visually and architecturally separate. Five
                sessions per month, any scenario, immediate access. The
                framing is deliberate: not &apos;free practice&apos; but
                urgency release valve — for the interview tomorrow, for the
                experienced user who wants unstructured reps. It protects the
                structured program and protects trust.
              </p>
            </div>

            <div>
              <Eyebrow color="red">D3</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Pressure as opt-in, not forced ramp
              </h3>
              <p className="mt-2 text-body-s uppercase tracking-wider text-gray">
                Resolves Tension 3 — Emotional Safety
              </p>
              <p className="mt-4 text-body-l leading-relaxed">
                Hints render collapsed by default — active recall, not passive
                reading. Challenge Mode is a toggle the user activates for
                themselves: no hints, no prep, exactly like the real thing.
                Combined with arena phases that ramp Support → Guidance →
                Challenge within each session, pressure becomes a tool the
                user controls.
              </p>
            </div>

            <div>
              <Eyebrow color="red">D4</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Habit infrastructure across three surfaces
              </h3>
              <p className="mt-2 text-body-s uppercase tracking-wider text-gray">
                Cross-cutting — Retention
              </p>
              <p className="mt-4 text-body-l leading-relaxed">
                Retention isn&apos;t built in the app alone — it&apos;s built
                in the interstitial spaces between sessions. Three coordinated
                channels reinforce one loop: streak grid + recommended-next on
                the dashboard (loss aversion), WhatsApp SR Coach (daily
                30-second pronunciation challenge with TTS reference + Azure
                scoring), and lifecycle email (post-session ROI summary, not
                invoice). The habit forms across the user&apos;s day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="The Solution"
            title="What the program looks like at every layer"
          />

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl">
            The program runs across four moments — intake, dashboard, session,
            interstitial. Each one is engineered to reinforce the same loop:
            practice, feedback, measurable progress. What the user sees, in
            order:
          </p>

          <ImageGrid
            className="mt-16"
            images={[
              {
                src: '/images/cases/mtp/intake.png',
                alt: 'Self-Intro + Path Recommendation',
                caption: '01 · The intake',
                description:
                  'Self-Intro + Path Recommendation. The free 8-minute warm-up runs the same engine as paid paths. Pillar scores and context flow into Primary Path recommendation — without a single form.',
              },
              {
                src: '/images/cases/mtp/dashboard.png',
                alt: 'Dashboard with Progression Tree',
                caption: '02 · The dashboard',
                description:
                  'Day X of 90, streak grid, weakest-pillar suggestions. Primary Path active; other paths visible but locked. War Room separate in the header — present but not nested.',
              },
              {
                src: '/images/cases/mtp/session.png',
                alt: 'Strategy Briefing Practice Feedback',
                caption: '03 · The session',
                description:
                  'Vocabulary drill with IPA + scoring, briefing per question with shadowing, immersive interlocutor intro, live voice practice, feedback with 6 CEFR pillars and Before/After examples.',
              },
              {
                src: '/images/cases/mtp/interstitial.png',
                alt: 'WhatsApp Coach + Lifecycle Email',
                caption: '04 · The interstitial',
                description:
                  "Daily 30-second WhatsApp pronunciation challenge with Azure scoring. Session summary email reframed as ROI proof, not invoice. Habit forms across the user's day.",
              },
            ]}
            columns={2}
          />
        </Container>
      </section>

      {/* OUTCOME */}
      <section id="outcome" className="py-32">
        <Container>
          <PageTitle
            eyebrow="Outcome"
            title="A program that holds together — and what it taught me"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Status">
              Beta v14.9, live on masterytalk.pro. Founding Member tier (25
              slots) opened with price locked forever.
            </MetaBlock>
            <MetaBlock label="Spec maturity">
              v3.5 governing source-of-truth document. Every code change pulls
              from the spec; any spec change requires approval before code
              follows.
            </MetaBlock>
            <MetaBlock label="Personal output">
              20+ documented touchpoints · FSD-architected design system ·
              Dual-axis lesson recommendation engine · Cross-surface habit
              infrastructure
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">What shipped</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Primary Path / Advanced / Mastery progression with progressive
              unlocking. War Room as urgency valve. WhatsApp SR Coach with TTS
              reference and Azure pronunciation scoring. Dual-axis lesson
              engine across 50 micro-lessons. Five paths × six levels with
              6-pillar CEFR-aligned feedback. Lifecycle email integrated
              across Resend (transactional) and Loops (marketing).
            </p>

            <h3 className="text-heading font-light mt-12">The design wins</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Personalization is felt, not explained — the user never sees a
              form asking what they want to learn. Pressure is opt-in through
              Challenge Mode and Arena phases — the user controls intensity,
              the product calibrates to it. The program reads as one program,
              not a feature buffet — every surface reinforces the same loop
              without competing for attention.
            </p>

            <h3 className="text-heading font-light mt-12">
              What I&apos;d revisit
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              The dashboard still shows too much for a brand-new user. Empty
              states educate but density on day 1 is high. A first-visit mode
              that collapses everything except Hero + Start Warm-Up CTA is on
              the roadmap. The renewal email is currently transactional;
              converting it to a monthly progress report closer to a Spotify
              Wrapped per cycle is the highest-leverage retention bet I
              haven&apos;t shipped yet.
            </p>
          </div>

          <ClosingBlock className="mt-16">
            How to design a product where the user&apos;s own progress is the
            primary content. The architecture isn&apos;t a catalog to
            organize — it&apos;s the user&apos;s trajectory through 90 days.
          </ClosingBlock>
        </Container>
      </section>

      <NextCase
        eyebrow="Case Study · 03"
        title="DALOG"
        description="Industrial IoT · Equipment Health Monitoring"
        slug="dalog"
      />
    </article>
  )
}
