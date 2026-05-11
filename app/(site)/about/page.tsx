import Container from '@/components/ui/Container'
import Eyebrow from '@/components/case-study/Eyebrow'
import LogoGrid from '@/components/sections/LogoGrid'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About — David Castrillón',
  description:
    'Senior Product Designer based in Medellín, Colombia. 9+ years across enterprise platforms, fintech, and global brands.',
}

const brands = [
  { name: 'Zilliant', logoSrc: '/logos/brands/zilliant.svg' },
  { name: 'Bancolombia', logoSrc: '/logos/brands/bancolombia.svg' },
  { name: 'Pagui', logoSrc: '/logos/brands/pagui.svg' },
  { name: 'LifeSafety Power', logoSrc: '/logos/brands/lifesafety.svg' },
  { name: 'MasteryTalk PRO', logoSrc: '/logos/brands/masterytalk.svg' },
  { name: 'DALOG', logoSrc: '/logos/brands/dalog.svg' },
  { name: 'Studio F', logoSrc: '/logos/brands/studiof.svg' },
  { name: 'ELA', logoSrc: '/logos/brands/ela.svg' },
  { name: 'Claro', logoSrc: '/logos/brands/claro.svg' },
  { name: 'Dupree-Azzorti', logoSrc: '/logos/brands/dupree.svg' },
]

const agencies = [
  { name: 'Team International', logoSrc: '/logos/agencies/team-intl.svg' },
  { name: 'Multiplica', logoSrc: '/logos/agencies/multiplica.svg' },
  { name: 'BlackSip', logoSrc: '/logos/agencies/blacksip.svg' },
  { name: 'DDB Latina', logoSrc: '/logos/agencies/ddb.svg' },
  { name: 'Naranja Studio', logoSrc: '/logos/agencies/naranja.svg' },
  { name: 'Freelance', logoSrc: '/logos/agencies/freelance.svg' },
]

export default function AboutPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 text-display-m md:text-[80px] font-light leading-[1.05] tracking-tight max-w-4xl">
            Designing where complexity meets users — for 9+ years.
          </h1>

          <div className="grid md:grid-cols-[1fr_400px] gap-16 mt-16 items-start">
            <div className="space-y-6 text-body-l leading-relaxed max-w-2xl">
              <p>
                Born in Bogotá, based in Medellín. Spent the last decade
                designing on top of platforms most designers never touch —
                Salesforce, SAP, legacy enterprise software — while also
                building consumer-facing products in fintech and retail. The
                thread across both: clarity beats decoration, especially when
                stakes are high.
              </p>

              <p>
                I work tool-agnostic on Figma and modern design tooling,
                collaborate fluently with engineers on GitHub and Jira, and
                integrate AI tools (Claude Code, Figma Make, Cursor) into
                ideation and rapid prototyping — to compress the distance
                between concept and validated direction.
              </p>

              <p>
                The shift in my workflow over the last two years has been
                significant. AI didn&apos;t replace design judgment — it
                accelerated everything around it. The prototype IS the
                wireframe now. Validation happens on day one. What used to
                take weeks of static mockups now happens in playable code
                with a PM in the room.
              </p>

              <p>
                I take projects where the design problem isn&apos;t cosmetic
                — where the architecture matters more than the visuals, and
                where the work is to extract the right system from a tangle
                of constraints. Legacy modernization, design systems for B2B
                platforms, end-to-end product design.
              </p>
            </div>

            <div className="space-y-8">
              <div className="aspect-square relative rounded-full overflow-hidden bg-off-white">
                <Image
                  src="/images/profile.jpg"
                  alt="David Castrillón"
                  fill
                  className="object-cover grayscale"
                  sizes="400px"
                />
              </div>

              <div className="space-y-4 text-[14px]">
                <div>
                  <Eyebrow>Based in</Eyebrow>
                  <p className="mt-1">Medellín, Colombia</p>
                </div>
                <div>
                  <Eyebrow>Languages</Eyebrow>
                  <p className="mt-1">Spanish (native) · English (fluent)</p>
                </div>
                <div>
                  <Eyebrow>Open to</Eyebrow>
                  <p className="mt-1">Remote · Hybrid · Contract · Full-time</p>
                </div>
              </div>

              <Link
                href="/cv/david-castrillon-cv.pdf"
                className="inline-flex items-center gap-2 text-[14px] font-medium underline decoration-red-accent decoration-2 underline-offset-4"
              >
                Download CV ↓
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-black text-white">
        <Container>
          <Eyebrow color="gray">Experience</Eyebrow>
          <h2 className="mt-4 text-[40px] md:text-display-m font-light leading-tight max-w-3xl">
            Brands and partners I&apos;ve worked with.
          </h2>

          <LogoGrid
            brands={brands}
            agencies={agencies}
            usePlaceholder
            onDark
            className="mt-16"
          />
        </Container>
      </section>
    </article>
  )
}
