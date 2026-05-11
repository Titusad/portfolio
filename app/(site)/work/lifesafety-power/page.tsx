import Container from '@/components/ui/Container'
import PageTitle from '@/components/case-study/PageTitle'
import MetaBlock from '@/components/case-study/MetaBlock'
import DecisionCard from '@/components/case-study/DecisionCard'
import BeforeAfter from '@/components/case-study/BeforeAfter'
import ImageGrid from '@/components/case-study/ImageGrid'
import PullQuote from '@/components/case-study/PullQuote'
import ClosingBlock from '@/components/case-study/ClosingBlock'
import TableOfContents from '@/components/case-study/TableOfContents'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'LifeSafety Power — Case Study 01 | David Castrillón',
  description:
    'Legacy modernization and design system work for LifeSafety Power, an ASSA ABLOY company. Modernizing the MSM platform used by thousands of integrators worldwide.',
}

export default function LifeSafetyPowerPage() {
  return (
    <article className="bg-white">
      {/* Sticky Table of Contents */}
      <TableOfContents
        sections={[
          { id: 'overview', label: 'Overview' },
          { id: 'context', label: 'Context & Challenge' },
          { id: 'discovery', label: 'Discovery' },
          { id: 'decisions', label: 'Key Decisions' },
          { id: 'solution', label: 'The Solution' },
          { id: 'outcome', label: 'Outcome' },
        ]}
      />

      {/* OVERVIEW */}
      <section id="overview" className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Case Study · 01</Eyebrow>
          <h1 className="mt-4 text-display-m md:text-[80px] font-light leading-[1.05] tracking-tight">
            LifeSafety Power
          </h1>
          <p className="mt-4 text-[22px] italic text-gray-dark max-w-2xl">
            Legacy Modernization · Design System · Configurator
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <MetaBlock label="Industry">
              Intelligent Power Management · Access Control · Surveillance
            </MetaBlock>
            <MetaBlock label="Client">
              LifeSafety Power — an ASSA ABLOY company
            </MetaBlock>
            <MetaBlock label="Role">
              Senior Product Designer — Legacy Modernization
            </MetaBlock>
          </div>

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl text-black">
            LSP designs power systems integrated with the leading access control
            platforms in the industry — Mercury, HID, Genetec, Honeywell,
            LenelS2, Software House, Avigilon, Axis. The flagship engagement
            was a full modernization of the legacy MSM platform — the
            management system used by integrators across thousands of
            installations.
          </p>

          <div className="mt-12 max-w-3xl">
            <Eyebrow>What I owned</Eyebrow>
            <ol className="mt-4 space-y-3 text-body-l leading-relaxed">
              <li>
                <strong>Legacy MSM modernization</strong> — audited the existing
                platform, mapped pain points to flows, redesigned core surfaces
                while keeping engineering data structures intact.
              </li>
              <li>
                <strong>Design System from zero</strong> — token architecture,
                component library, documentation.
              </li>
              <li>
                <strong>Product Wizard</strong> — configurator at{' '}
                <a
                  href="https://designcenter.lifesafetypower.com"
                  className="underline decoration-red-accent decoration-2 underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  designcenter.lifesafetypower.com
                </a>
                .
              </li>
              <li>
                <strong>PM enablement</strong> — coached the PM to integrate AI
                tools into ideation.
              </li>
            </ol>
          </div>

          <PullQuote className="mt-16">
            Modernization without disruption — the engineering data model
            defined what was real, design made it usable. Integrators
            didn&apos;t lose their muscle memory; they gained a system that
            finally felt current.
          </PullQuote>
        </Container>
      </section>

      {/* CONTEXT */}
      <section id="context" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Context & Challenge"
            title="Modernizing the legacy that thousands of integrators depend on every day"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="How it started">
              Introduced through a referral from my Team International network —
              an existing trust relationship turned into a multi-quarter
              engagement.
            </MetaBlock>
            <MetaBlock label="Industry">
              Intelligent power management · Access control systems
            </MetaBlock>
            <MetaBlock label="Engagement">2024 — Present</MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light mt-12">The challenge</h3>
            <p className="text-body-l leading-relaxed mt-4">
              MSM is the management platform behind LifeSafety Power&apos;s
              installations across security integrators, field technicians, and
              access control administrators worldwide. For these users, MSM
              isn&apos;t a tool they open occasionally — it&apos;s where they
              live for hours a day, configuring, monitoring, and troubleshooting
              power systems that protect physical infrastructure.
            </p>

            <p className="text-body-l leading-relaxed mt-6">
              The platform had two compounding problems.
            </p>

            <p className="text-body-l leading-relaxed mt-6">
              <strong>An information architecture that fought its users.</strong>{' '}
              Years of feature additions had buried critical workflows under
              inconsistent menus and unclear hierarchies. Integrators were
              memorizing paths, not navigating them.
            </p>

            <p className="text-body-l leading-relaxed mt-6">
              <strong>An interface from another era.</strong> Visually, MSM felt
              frozen in time — a daily reminder to users that the tool
              didn&apos;t match the modernity of the systems it controlled.
            </p>

            <h3 className="text-heading font-light mt-12">
              The constraint that defined everything
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              Everything could change — but the system had to stay operational.
              Thousands of integrators couldn&apos;t pause their work for a
              redesign. The new MSM had to feel like a quiet evolution to
              existing users while being a categorical leap forward in
              usability and visual quality.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              That tension — total redesign without operational disruption —
              became the design principle for the entire engagement.
            </p>
          </div>
        </Container>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Discovery"
            title="Reading the system before redesigning it"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <MetaBlock label="Method">
              Discovery ran through LifeSafety Power&apos;s engineering lead,
              who carries deep integrator-side experience and acted as proxy
              for the field. Weekly sessions with the PM validated assumptions
              and pressure-tested findings against real installation scenarios.
            </MetaBlock>
            <MetaBlock label="AI tools used">
              Claude Code for synthesis · Figma Make for early architecture
              exploration. AI compressed what would have been a month of audit
              work into one week of guided iteration.
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">The entry point</h3>
            <p className="text-body-l leading-relaxed mt-4">
              The engagement started with a single artifact: the MSM operations
              manual. Sixty-eight pages of installation flows, multi-client
              configuration, NetLink registration, and parameter definitions —
              written by engineers, for engineers, documenting a system that
              thousands of integrators use without ever opening it.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              That manual became the entry point. Before sketching a single
              screen, the work was to read MSM the way its users couldn&apos;t:
              as a complete information architecture exposed, with every
              workflow, hierarchy inconsistency, and naming decision visible
              at once.
            </p>

            <h3 className="text-heading font-light mt-12">
              The insight that changed the approach
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              The legacy interface didn&apos;t have a visual problem. It had an
              information architecture problem disguised as one.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              MSM exposed the system&apos;s data model almost 1:1 to the user:
              four parallel tabs (Critical Events, Snapshot, Statistics,
              Analysis) over the same dataset; status dots in five colors with
              a separate legend; parameter names lifted directly from the
              firmware (FP1 BATTERY RUNTIME TEST FAILED TOTAL). The interface
              reflected how engineers built the product, not how integrators
              operated it.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              The redesign principle followed from that:{' '}
              <strong>
                organize information by the hierarchy of operator decisions,
                not by the hierarchy of the underlying data model.
              </strong>
            </p>
          </div>

          <ImageGrid
            className="mt-16"
            images={[
              {
                src: '/images/cases/lsp/legacy-home.png',
                alt: 'Legacy MSM Home',
                caption: 'Home · Connected Devices',
              },
              {
                src: '/images/cases/lsp/legacy-critical.png',
                alt: 'Legacy Critical Events',
                caption: 'Summary · Critical Events',
              },
              {
                src: '/images/cases/lsp/legacy-snapshot.png',
                alt: 'Legacy Snapshot',
                caption: 'Summary · Snapshot',
              },
              {
                src: '/images/cases/lsp/legacy-stats.png',
                alt: 'Legacy Statistics',
                caption: 'Summary · Statistics',
              },
              {
                src: '/images/cases/lsp/legacy-analysis.png',
                alt: 'Legacy Analysis',
                caption: 'Summary · Analysis',
              },
              {
                src: '/images/cases/lsp/legacy-reports.png',
                alt: 'Legacy Reports',
                caption: 'Reports · Power Report',
              },
            ]}
            columns={3}
          />
        </Container>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Key Decisions"
            title="Three decisions that defined the redesign"
          />

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl">
            A redesign without operational disruption forces every choice to be
            defended twice: once for the new user, once for the integrator who
            already memorized the old paths. The decisions below were the ones
            where that tension was sharpest.
          </p>

          <div className="mt-16 flex flex-col gap-6">
            <DecisionCard
              number="01"
              title="Hierarchy of operator decisions, not data structure"
              situation="Flat table of NetLinks. Every device required equal attention. No way to triage at a glance."
              choice="Active critical event banner at the top, status summary across the fleet (Trouble · Online · Offline · Total), 'Needs attention' as default filter, group/board hierarchy with visible parent-child relationships."
              leftOut="A redesigned navigation that would have replaced 'Home / Configure / Reports' with role-based entry points stayed intact — integrators rely on it for muscle memory."
            />

            <DecisionCard
              number="02"
              title="Event-driven information architecture"
              situation="Four parallel tabs (Critical Events, Snapshot, Statistics, Analysis) over the same dataset. Operator had to manually reconstruct context across tabs."
              choice="Single board detail page. Events feed as left-sidebar timeline. Main panel shows live state plus historical context for any event clicked. Statistics, charts, and raw data moved to a 'Power user' drawer — opt-in depth."
              leftOut="No parameter was deleted. Every metric the legacy exposed remained accessible — just reorganized around the operator's entry point rather than the data model's structure."
            />

            <DecisionCard
              number="03"
              title="Modernization without disruption"
              situation="Five-color status dots (green / yellow / blue / red / gray) with a static legend. M8 outputs as 8-LED grid — a convention integrators recognize across the entire LSP product line."
              choice="Status dots became named pills (Trouble · Normal · Service due · Offline) — text plus color, accessible and scannable. M8 LEDs preserved with a numeric summary above ('16 of 16 ready')."
              leftOut="Muscle memory preserved; comprehension upgraded. Integrators see the same firmware-level grid they recognize from the field, framed by context that didn't exist before."
            />
          </div>

          <PullQuote className="mt-16">
            Modernization without disruption — the engineering data model
            defined what was real, design made it usable. Integrators
            didn&apos;t lose their muscle memory; they gained a system that
            finally felt current.
          </PullQuote>
        </Container>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="The Solution"
            title="From four tabs to one event-driven workspace"
          />

          <BeforeAfter
            className="mt-16"
            beforeImage="/images/cases/lsp/vibecoding-fleet.png"
            beforeLabel="Process · Vibecoding Session"
            beforeCaption="Vibecoding Fleet View"
            afterImage="/images/cases/lsp/final-home.png"
            afterLabel="Final · Design System Applied"
            afterCaption="Final Home Dashboard"
          />

          <p className="mt-8 text-body-l italic text-gray-dark max-w-3xl">
            Hierarchy validated in playable code with the PM, before the design
            system existed. Tokens, components, and styling came after the
            architecture proved itself, not before.
          </p>

          <ImageGrid
            className="mt-16"
            images={[
              {
                src: '/images/cases/lsp/event-timeline.png',
                alt: 'Event Timeline + Live State',
                caption: 'Event Timeline + Live State',
                description:
                  'Events index the history. The main panel reconstructs system state at the moment of any event clicked.',
              },
              {
                src: '/images/cases/lsp/m8-outputs.png',
                alt: 'M8 Outputs Preserved',
                caption: 'M8 Outputs, Preserved',
                description:
                  "Sixteen LEDs, identical to the firmware-level convention integrators recognize. Above them, a count that didn't exist before.",
              },
              {
                src: '/images/cases/lsp/analyze-data.png',
                alt: 'Analyze Data Power User',
                caption: 'Analyze Data · Power User',
                description:
                  'Statistics, charts, and raw data live one click away — opt-in depth for the integrator who needs to dig in.',
              },
              {
                src: '/images/cases/lsp/product-wizard.png',
                alt: 'Product Wizard',
                caption: 'Product Wizard',
                description:
                  'A configurator that replaced the spec-sheet PDF workflow at designcenter.lifesafetypower.com.',
              },
            ]}
            columns={2}
          />
        </Container>
      </section>

      {/* OUTCOME */}
      <section id="outcome" className="py-32">
        <Container>
          <PageTitle eyebrow="Outcome" title="Where the work stands today" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <MetaBlock label="Status">
              Redesigned MSM in QA. Pilot rolling out to a controlled set of
              installations before broader release. Product Wizard live at{' '}
              <a
                href="https://designcenter.lifesafetypower.com"
                className="underline decoration-red-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                designcenter.lifesafetypower.com
              </a>
              . Design system documented and handed off to engineering.
            </MetaBlock>
            <MetaBlock label="Deliverables">
              Modernized MSM interface · Design system (token architecture ·
              component library · documentation) · Product Wizard configurator
              · PM enablement on Claude Code &amp; Figma Make
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">Validation</h3>
            <p className="text-body-l leading-relaxed mt-4">
              The strongest signal came from inside the product organization.
              LifeSafety Power&apos;s engineering lead — the same person who
              acted as proxy for the integrator field during discovery, and who
              knows MSM at the firmware level — recognized the new information
              architecture as clearer than the system he&apos;d lived with for
              years.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              That validation mattered more than a usability score: the person
              closest to the technical constraints saw the redesign reduce
              them, not hide them.
            </p>

            <h3 className="text-heading font-light mt-12">
              Coaching the PM through AI
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              Part of the engagement extended beyond design delivery. The PM
              co-piloted the project using Claude Code and Figma Make — guided
              on how to use them for ideation, architecture exploration, and
              validation cycles. The vibecoding sessions that defined the new
              hierarchy before the design system existed were the tangible
              output of that coaching.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              By the end of the engagement, AI tools were no longer my
              workflow — they were the team&apos;s.
            </p>

            <h3 className="text-heading font-light mt-12">Reflection</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Legacy modernization gets framed as a visual problem because
              that&apos;s what stakeholders see first. The harder, less visible
              work is the information architecture underneath — and the
              discipline to leave intact what users already know.
            </p>
          </div>

          <ClosingBlock className="mt-16">
            Modernization without disruption isn&apos;t a slogan. It&apos;s a
            permission structure for what design is allowed to change and what
            it has to leave alone.
          </ClosingBlock>
        </Container>
      </section>

      {/* NEXT CASE */}
      <NextCase
        eyebrow="Case Study · 02"
        title="MasteryTalk PRO"
        description="Founder Project · End-to-End Product Ownership"
        slug="masterytalk-pro"
      />
    </article>
  )
}
