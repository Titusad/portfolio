import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

const selectedWork = [
  {
    slug: 'zilliant',
    title: 'Zilliant',
    eyebrow: 'B2B Pricing · Enterprise SaaS',
    description: 'Salesforce + SAP-integrated B2B SaaS for pricing strategy at scale.',
  },
  {
    slug: 'bancolombia',
    title: 'Bancolombia',
    eyebrow: 'Digital Banking · National Scale',
    description:
      "UX work during the bank's digital transformation across the SuperApp ecosystem.",
  },
  {
    slug: 'pagui',
    title: 'Pagui',
    eyebrow: 'Fintech · BNPL · WhatsApp Commerce',
    description: 'B2B/B2C fintech for instant micro-credit via WhatsApp. Shown under NDA.',
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    eyebrow: 'Conversion Optimization · CRO',
    description:
      'UX-UI and CRO work for Studio F, ELA, Dupree-Azzorti, and Claro Colombia.',
  },
]

export default function SelectedWork() {
  return (
    <section className="bg-white py-32">
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            Selected Work
          </span>
          <h2 className="text-[36px] md:text-[44px] font-light tracking-tight text-black leading-snug max-w-2xl">
            More projects across enterprise, fintech, and retail
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-gray-light">
          {selectedWork.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group bg-white p-10 lg:p-12 flex flex-col gap-4 hover:bg-off-white transition-colors duration-200"
            >
              <span className="text-label font-medium tracking-label uppercase text-gray">
                {w.eyebrow}
              </span>
              <h3 className="text-heading lg:text-[32px] font-light tracking-tight text-black leading-snug">
                {w.title}
              </h3>
              <p className="text-body-s font-light leading-relaxed text-gray-dark">
                {w.description}
              </p>
              <span className="inline-flex items-center gap-1 text-body-s font-light text-black mt-auto pt-2 group-hover:underline underline-offset-4">
                View
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
