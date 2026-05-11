import Link from 'next/link'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/case-study/Eyebrow'
import FadeUp from '@/components/ui/FadeUp'

export const metadata = {
  title: 'Work — David Castrillón',
  description: 'Selected work by David Castrillón — enterprise platforms, fintech, retail, and B2B SaaS.',
}

const cases = [
  {
    slug: 'lifesafety-power',
    title: 'LifeSafety Power',
    eyebrow: 'Enterprise SaaS · Design System',
    description: 'Modernizing a hardware-era product for a cloud-era audience.',
    year: '2023',
  },
  {
    slug: 'masterytalk-pro',
    title: 'MasteryTalk PRO',
    eyebrow: 'B2B SaaS · AI Product',
    description: 'Founder-led AI coaching platform designed end-to-end.',
    year: '2024',
  },
  {
    slug: 'dalog',
    title: 'DALOG',
    eyebrow: 'Industrial IoT · Enterprise',
    description: 'Predictive maintenance UX for rotating machinery diagnostics.',
    year: '2023',
  },
  {
    slug: 'zilliant',
    title: 'Zilliant',
    eyebrow: 'Salesforce + SAP · B2B SaaS',
    description: 'Pricing strategy at scale across two major enterprise ecosystems.',
    year: '2022',
  },
  {
    slug: 'bancolombia',
    title: 'Bancolombia',
    eyebrow: 'Digital Banking · SuperApp',
    description: 'Digital transformation at national scale.',
    year: '2021',
  },
  {
    slug: 'pagui',
    title: 'Pagui',
    eyebrow: 'Fintech · WhatsApp Commerce',
    description: 'B2B/B2C micro-credit via WhatsApp — designed end-to-end.',
    year: '2022',
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    eyebrow: 'CRO · E-commerce',
    description: 'Conversion optimization across major Colombian brands.',
    year: '2019',
  },
]

export default function WorkPage() {
  return (
    <article className="bg-white min-h-screen">
      <section className="pt-40 pb-24 border-b border-gray-light">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <h1 className="mt-4 text-display-m md:text-display-l font-light leading-[1.0] tracking-tight">
            9+ years of work,<br />7 cases worth telling.
          </h1>
        </Container>
      </section>

      <section className="py-0">
        <Container className="py-0 px-0 md:px-0 lg:px-0 max-w-none">
          {cases.map((c, i) => (
            <FadeUp key={c.slug} delay={i * 0.05}>
              <Link
                href={`/work/${c.slug}`}
                className="group flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 md:py-10 border-b border-gray-light hover:bg-off-white transition-colors duration-300"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-label text-gray font-light tabular-nums w-10 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-label tracking-label uppercase text-gray group-hover:text-red-accent transition-colors duration-300">
                      {c.eyebrow}
                    </span>
                    <h2 className="text-[28px] md:text-[36px] font-light tracking-tight text-black group-hover:text-black transition-colors duration-300">
                      {c.title}
                    </h2>
                    <p className="text-body text-gray-dark font-light hidden md:block">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8 shrink-0">
                  <span className="text-label text-gray hidden md:block">{c.year}</span>
                  <span className="w-10 h-10 border border-gray-light flex items-center justify-center text-gray group-hover:border-black group-hover:text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    →
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </Container>
      </section>
    </article>
  )
}
