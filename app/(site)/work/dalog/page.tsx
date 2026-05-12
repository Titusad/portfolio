import Image from 'next/image'
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
  title: 'DALOG — Case Study 03 | David Castrillón',
  description:
    'Industrial IoT redesign for DALOG Diagnosesysteme. UI and IA work for an equipment health monitoring platform used in mining, cement, and metals operations.',
}

export default function DalogPage() {
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
          <Eyebrow>Case Study · 03</Eyebrow>
          <h1 className="mt-4 text-display-m md:text-[80px] font-light leading-[1.05] tracking-tight">
            DALOG
          </h1>
          <p className="mt-4 text-[22px] italic text-gray-dark max-w-2xl">
            Industrial IoT — Equipment Health Monitoring
          </p>

          <div className="mt-8 inline-block border border-gray-light px-4 py-2 rounded">
            <p className="text-label uppercase tracking-wider text-gray-dark">
              Project shown under NDA · Real assets can be shown on a videocall.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <MetaBlock label="Industry">
              Industrial Diagnostics — Mining · Cement · Metals
            </MetaBlock>
            <MetaBlock label="Client">
              DALOG Diagnosesysteme GmbH (Germany)
            </MetaBlock>
            <MetaBlock label="Role">
              Senior Product Designer — UI redesign &amp; user flows
            </MetaBlock>
          </div>

          <p className="mt-12 text-body-l leading-relaxed max-w-3xl">
            DALOG is a German company with 30+ years in condition monitoring
            for critical industrial machinery. Their platform — used by
            reliability engineers in mining, cement and metals — turns
            vibration, electrical and process data from heavy machinery into
            actionable diagnostics.
          </p>

          <PullQuote className="mt-16">
            Abnormal vibration is a symptom — DALOG focuses on the why, not
            just the alarm.
          </PullQuote>

          <div className="mt-12 max-w-3xl">
            <Eyebrow>What I delivered</Eyebrow>
            <p className="mt-4 text-body-l leading-relaxed">
              Redesign of the core monitoring UI — turning dense sensor data
              into clear, decision-ready interfaces. End-to-end user flows for
              Equipment Health 360. Multi-sensor and wireless monitoring
              views — designed to eliminate the silos between mechanical,
              electrical, automation and process domains. DALOG&apos;s
              customers don&apos;t get a second chance with a failed crusher
              or kiln.
            </p>
          </div>

          <p className="mt-8 text-label text-gray-dark">
            <a
              href="https://dalog.net"
              className="underline decoration-red-accent decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              → dalog.net
            </a>
          </p>
        </Container>
      </section>

      {/* BRIEF */}
      <section id="brief" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="The Brief"
            title="When the data is critical, the interface can't be in the way"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Status">
              Delivered. Currently awaiting client release on DALOG&apos;s
              operational timeline.
            </MetaBlock>
            <MetaBlock label="Sectors">
              Mining · Cement · Metals — heavy industries where unplanned
              downtime cascades through entire supply chains.
            </MetaBlock>
            <MetaBlock label="Platform">
              Built on Microsoft Fluent · Equipment health monitoring · 30+
              years of institutional knowledge.
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">The brief</h3>
            <p className="text-body-l leading-relaxed mt-4">
              DALOG has been monitoring the health of critical industrial
              machinery for over thirty years. Their platform turns vibration,
              electrical, and process signals from the machines that run
              mines, cement plants, and metal works into actionable
              diagnostics. When a crusher fails or a kiln drifts out of spec,
              the cost isn&apos;t measured in inconvenience — it&apos;s
              measured in stopped production and downstream supply chains.
            </p>

            <p className="text-body-l leading-relaxed mt-6">
              The product worked. The data was there. What wasn&apos;t working
              was the path between the two.
            </p>

            <p className="text-body-l leading-relaxed mt-6">
              Data analysts — DALOG&apos;s primary users — were spending too
              much cognitive effort navigating the system to find what they
              needed, rather than interpreting what they found. The
              information architecture had grown organically across years of
              feature additions. Core diagnostic workflows had become
              indirect, inconsistent, and slow.
            </p>

            <h3 className="text-heading font-light mt-12">The mandate</h3>
            <p className="text-body-l leading-relaxed mt-4">
              The director of data engaged me with a dual brief: simplify the
              existing experience, and make room for the new capabilities the
              platform needed. Not a cosmetic refresh — a reorganization of
              how analysts find, interpret, and act on signals, paired with a
              visual language to make new features feel native instead of
              bolted on.
            </p>

            <h3 className="text-heading font-light mt-12">
              The terms of engagement
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              Ten months. Co-creation with the stakeholder who knew the data
              and the users best. A domain dense enough that I had to learn
              it before I could redesign anything.
            </p>
          </div>
        </Container>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Discovery"
            title="Working without direct user access"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Method">
              Stakeholder-mediated discovery + technical immersion. Weekly
              co-creation sessions with the director of data, end-to-end
              platform audit, deep technical reading.
            </MetaBlock>
            <MetaBlock label="Constraint">
              No direct contact with end users — analysts distributed across
              remote industrial sites worldwide.
            </MetaBlock>
            <MetaBlock label="Output">
              IA reorganization · Unified canvas pattern · Embedded-features
              framework grounded in the existing Fluent system.
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">Discovery method</h3>
            <p className="text-body-l leading-relaxed mt-4">
              In an ideal world, I&apos;d have shadowed reliability analysts
              in cement plants and mining operations. The reality of
              enterprise B2B — especially with users distributed across remote
              industrial sites — is that you rarely get that access. So
              discovery looked different.
            </p>
            <p className="text-body-l leading-relaxed mt-6">
              The director of data became the primary research channel. Three
              decades of monitoring critical machinery had given DALOG deep
              institutional knowledge of how analysts work — what they look at
              first, where they get stuck, which decisions they make alone
              and which they escalate. My job was to extract that knowledge
              and turn it into design decisions.
            </p>

            <h3 className="text-heading font-light mt-12">Domain immersion</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Industrial diagnostics isn&apos;t a domain you can fake.
              Vibration, electrical signatures, process parameters — each
              tells a different part of the story of a machine&apos;s health,
              and analysts cross-reference all three to make calls that
              protect millions of dollars in production capacity. Before
              redesigning anything, I worked through DALOG&apos;s technical
              documentation in detail, mapped how raw sensor data becomes a
              diagnostic conclusion step by step, and audited the existing
              platform end-to-end — identifying every place where the path
              from data to decision had unnecessary friction.
            </p>

            <h3 className="text-heading font-light mt-12">
              The platform constraint — Microsoft Fluent
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              The challenge wasn&apos;t &quot;what should this look
              like?&quot; — it was: how do you take a sophisticated design
              system built for general enterprise software and make it serve
              the specific cognitive load of industrial diagnostics, without
              breaking the system or fighting it?
            </p>
          </div>
        </Container>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="Key Decisions"
            title="Three decisions that shaped the engagement"
          />

          <div className="mt-16 space-y-16 max-w-4xl">
            <div>
              <Eyebrow color="red">D1</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Build a foundation that supports multiple ways of working
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div>
                  <Eyebrow>The situation</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    The director wanted new features. But every time I traced
                    where a new feature would live, the answer was &quot;it
                    depends — analysts have to navigate through three
                    different sections to get there.&quot; The IA wasn&apos;t
                    ready for what was coming.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I chose</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    A layered architecture — one dominant entry path for the
                    daily workflow, with parallel routes preserved for
                    asset-centric and domain-centric work. The IA stopped
                    pretending to be one tree and became something closer to a
                    navigable space.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I left out</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    I didn&apos;t try to fix every navigation issue at once.
                    The reorganization prioritized workflows analysts ran
                    daily. Lower-traffic surfaces inherited the new patterns
                    later.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow color="red">D2</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Unify sensor data on one canvas, not three
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div>
                  <Eyebrow>The situation</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    Vibration, electrical signals, and process parameters
                    lived in separate parts of the platform. Each made sense
                    alone. But analysts make diagnostic calls by
                    cross-referencing all three — and the platform forced them
                    to assemble that picture in their heads.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I chose</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    A unified dashboard where the asset is the constant and
                    the sensor view is the variable. Analysts stay on one
                    screen, in one machine&apos;s context, and switch between
                    vibration, electrical, and process readings without
                    losing their place.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I left out</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    I didn&apos;t try to make every sensor&apos;s full detail
                    fit on the unified view. Deep dives still had dedicated
                    surfaces. But the first answer to &quot;how is this
                    machine doing?&quot; now came from one place.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow color="red">D3</Eyebrow>
              <h3 className="mt-2 text-heading font-light">
                Design new capabilities as natives of the existing flow
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div>
                  <Eyebrow>The situation</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    The director&apos;s roadmap included new analytical and
                    reporting capabilities. The temptation with new features
                    in a maturing platform is to make them feel
                    &quot;new&quot; — visually distinct, separately accessed,
                    marked as &quot;premium.&quot;
                  </p>
                </div>
                <div>
                  <Eyebrow>What I chose</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    Embedded. The new capabilities became answers inside
                    existing analyst workflows — appearing where the user was
                    already looking, not in a new section to discover and
                    learn. By using Fluent&apos;s existing patterns, they
                    didn&apos;t need to scream &quot;I&apos;m new.&quot; They
                    just worked.
                  </p>
                </div>
                <div>
                  <Eyebrow>What I left out</Eyebrow>
                  <p className="mt-2 text-body leading-relaxed">
                    Marketing visibility. The new capabilities weren&apos;t
                    merchandised as separate &quot;premium&quot; features. The
                    novelty was in the capability, not the chrome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-32 border-b border-gray-light">
        <Container>
          <PageTitle
            eyebrow="The Solution"
            title="What ten months of work was reorganizing"
          />

          <div className="mt-16 max-w-3xl">
            <Eyebrow color="red">Before — what wasn&apos;t working</Eyebrow>
            <h3 className="mt-2 text-heading font-light">
              DALOG legacy home — original IA
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="relative rounded overflow-hidden bg-off-white aspect-4/3">
              <Image
                src="/images/cases/dalog/legacy-home.png"
                alt="DALOG legacy home — original IA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>


            <div className="space-y-8">
              <div>
                <Eyebrow color="red">01</Eyebrow>
                <h4 className="mt-1 text-body font-bold">
                  IA fragmented across parallel modules
                </h4>
                <p className="mt-2 text-body leading-relaxed">
                  Years of feature additions had grown a navigation that
                  didn&apos;t reflect how analysts actually move through the
                  platform. Workflows crossed module boundaries; the menu
                  structure didn&apos;t.
                </p>
              </div>

              <div>
                <Eyebrow color="red">02</Eyebrow>
                <h4 className="mt-1 text-body font-bold">
                  Sensor data lived in silos
                </h4>
                <p className="mt-2 text-body leading-relaxed">
                  Vibration, electrical signals, and process parameters had
                  separate destinations. Cross-referencing — the core
                  analytical move — required leaving and re-entering different
                  parts of the platform.
                </p>
              </div>

              <div>
                <Eyebrow color="red">03</Eyebrow>
                <h4 className="mt-1 text-body font-bold">
                  Daily workflows required cross-screen navigation
                </h4>
                <p className="mt-2 text-body leading-relaxed">
                  Tasks analysts performed every shift were buried multiple
                  clicks deep across multiple sections. The system had been
                  built for completeness, not for the rhythm of the work.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-3xl">
            <Eyebrow color="red">After — the analyst&apos;s journey</Eyebrow>
            <h3 className="mt-2 text-heading font-light">
              From alert to diagnosis, on one platform.
            </h3>
          </div>

          <ImageGrid
            className="mt-12"
            images={[
              {
                src: '/images/cases/dalog/step-01-monitor.png',
                alt: 'Step 01 Monitor',
                caption: '01 · Monitor',
                description: 'Daily overview · what needs attention now',
              },
              {
                src: '/images/cases/dalog/step-02-detect.png',
                alt: 'Step 02 Detect',
                caption: '02 · Detect',
                description: 'Alert surfaces in context, not in isolation',
              },
              {
                src: '/images/cases/dalog/step-03-investigate.png',
                alt: 'Step 03 Investigate',
                caption: '03 · Investigate',
                description: 'Unified canvas — the asset is the constant',
              },
              {
                src: '/images/cases/dalog/step-04-diagnose.png',
                alt: 'Step 04 Diagnose',
                caption: '04 · Diagnose',
                description: 'Cross-referenced signals lead to root cause',
              },
            ]}
            columns={4}
          />

          <p className="mt-12 text-body-l italic text-gray-dark max-w-3xl">
            The asset stays constant. The sensor view becomes the variable.
            Cross-referencing happens in the user&apos;s head — but with all
            inputs already in front of them, not buried two clicks away.
          </p>
        </Container>
      </section>

      {/* OUTCOME */}
      <section id="outcome" className="py-32">
        <Container>
          <PageTitle
            eyebrow="Outcome"
            title="Turning three decades of institutional knowledge into a system newer analysts can navigate"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <MetaBlock label="Status">
              Delivered, awaiting client release on DALOG&apos;s operational
              timeline.
            </MetaBlock>
            <MetaBlock label="Engagement">
              10 months. Weekly co-creation with the director of data.
            </MetaBlock>
            <MetaBlock label="Patterns that travel">
              Layered IA · Constant-asset / variable-sensor canvas · Embedded
              capabilities over bolted-on features.
            </MetaBlock>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-heading font-light">Where it stands</h3>
            <p className="text-body-l leading-relaxed mt-4">
              Ten months of work delivered. The redesigned platform — new IA,
              unified dashboard, embedded capabilities — was handed off to
              DALOG and is currently awaiting release. Release is on the
              client&apos;s timeline, not the design timeline. That&apos;s how
              enterprise B2B works, and how it should work. The platform
              serves operations that can&apos;t tolerate disruption, so
              go-live happens when the client says it does.
            </p>

            <h3 className="text-heading font-light mt-12">
              What I&apos;d do differently
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              The constraint of no direct user access was real and not unusual
              in enterprise B2B. But if I were to do it again, I&apos;d push
              harder for at least three structured sessions with actual
              analysts during the design phase, even brief ones. The director
              of data was an excellent proxy. But proxies have blind spots,
              and three hours with end users would have stress-tested the IA
              decisions earlier — in design, not in QA.
            </p>

            <h3 className="text-heading font-light mt-12">
              What carries forward
            </h3>
            <p className="text-body-l leading-relaxed mt-4">
              The patterns I built for DALOG aren&apos;t
              industrial-diagnostics-specific. Layered IA for multiple
              workflows, the constant-asset / variable-sensor canvas, embedded
              capabilities over bolted-on features — they&apos;re how you
              design for any platform where users need to cross-reference
              distinct information types under cognitive pressure.
            </p>
          </div>

          <ClosingBlock className="mt-16">
            Make sophisticated workflows legible to people who haven&apos;t
            yet earned all the context. That&apos;s the platform-design
            challenge in a sentence.
          </ClosingBlock>
        </Container>
      </section>

      <NextCase
        eyebrow="Selected Work"
        title="Zilliant"
        description="Salesforce + SAP-integrated B2B SaaS"
        slug="zilliant"
      />
    </article>
  )
}
