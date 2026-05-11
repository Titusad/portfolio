import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

const featuredCases = [
  {
    number: '01',
    slug: 'lifesafety-power',
    title: 'LifeSafety Power',
    eyebrow: 'Legacy Modernization · Design System · Configurator',
    description:
      'A full modernization of the legacy MSM platform for an ASSA ABLOY company — used by thousands of integrators across access control installations worldwide.',
    image: '/images/cases/lsp/featured.png',
  },
  {
    number: '02',
    slug: 'masterytalk-pro',
    title: 'MasteryTalk PRO',
    eyebrow: 'Founder Project · End-to-End Product Ownership',
    description:
      'AI-powered communication coach for nearshoring professionals. Built from zero: product strategy, business model, design system, and a working MVP.',
    image: '/images/cases/mtp/featured.png',
  },
  {
    number: '03',
    slug: 'dalog',
    title: 'DALOG',
    eyebrow: 'Industrial IoT · Equipment Health Monitoring',
    description:
      'Redesign of the core monitoring UI for a German industrial diagnostics platform — turning dense sensor data from mining and cement operations into decision-ready interfaces.',
    image: '/images/cases/dalog/featured.png',
  },
]

function FeaturedCard({
  c,
  featured = false,
}: {
  c: (typeof featuredCases)[number]
  featured?: boolean
}) {
  return (
    <Link
      href={`/work/${c.slug}`}
      className="group flex flex-col gap-0 border border-gray-light hover:border-black transition-colors duration-300"
    >
      {/* Image placeholder */}
      <div
        className={`w-full bg-gray-light overflow-hidden ${featured ? 'aspect-21/9' : 'aspect-video'}`}
      >
        {/* Replace with next/image once assets are ready */}
        <div className="w-full h-full bg-[#EBEBEB] flex items-end p-4">
          <span className="text-label text-gray">{c.title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-label font-medium tracking-label uppercase text-red-accent">
            Case Study · {c.number}
          </span>
          <ArrowRight
            size={16}
            className="text-gray group-hover:text-black group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
        <h3
          className={`font-light leading-snug tracking-tight text-black ${featured ? 'text-[40px] lg:text-display-m' : 'text-[32px] lg:text-[40px]'}`}
        >
          {c.title}
        </h3>
        <p className="text-body-s font-light italic text-gray">{c.eyebrow}</p>
        <p className="text-body font-light leading-relaxed text-gray-dark">{c.description}</p>
        <span className="text-body-s font-light text-black group-hover:underline underline-offset-4 mt-2">
          Read case study →
        </span>
      </div>
    </Link>
  )
}

export default function FeaturedCases() {
  return (
    <section id="featured-cases" className="bg-white py-32">
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            Featured Work · 2024 — 2026
          </span>
          <h2 className="text-[36px] md:text-[44px] font-light tracking-tight text-black leading-snug max-w-2xl">
            Three projects that defined how I work today
          </h2>
        </div>

        {/* Cards: first full-width, then 2-col */}
        <div className="flex flex-col gap-6">
          <FeaturedCard c={featuredCases[0]} featured />
          <div className="grid md:grid-cols-2 gap-6">
            <FeaturedCard c={featuredCases[1]} />
            <FeaturedCard c={featuredCases[2]} />
          </div>
        </div>
      </Container>
    </section>
  )
}
