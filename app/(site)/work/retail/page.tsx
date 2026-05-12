import Image from 'next/image'
import Container from '@/components/ui/Container'
import PullQuote from '@/components/case-study/PullQuote'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'Retail & E-commerce — Selected Work | David Castrillón',
  description:
    'Cross-vertical e-commerce and CRO work for Studio F, ELA, Dupree-Azzorti, and Claro Colombia.',
}

export default function RetailPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <p className="mt-4 text-[22px] italic text-gray-dark">
            E-commerce · Conversion optimization · CRO
          </p>
          <h1 className="mt-2 text-display-l md:text-[96px] font-light leading-[0.95] tracking-tight">
            Retail & E-commerce
          </h1>
          <p className="mt-4 text-[24px] italic text-gray-dark">
            & early career foundations
          </p>

          <div className="mt-8 inline-block border border-gray-light px-4 py-2 rounded">
            <p className="text-label uppercase tracking-wider text-gray-dark">
              Project shown under NDA · Real assets can be shown on a videocall.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-body-l leading-relaxed">
                Cross-vertical e-commerce and CRO work across four major
                Colombian brands. The thread across them: conversion is
                downstream of clarity. Abandoned cart recovery, A/B testing,
                platform audits — the unglamorous work that moves real
                revenue numbers. Foundational engagements that shaped how I
                approach scale and measurement.
              </p>

              <div className="mt-8">
                <Eyebrow>What I owned</Eyebrow>
                <p className="mt-2 text-body leading-relaxed">
                  UX/UI design and conversion rate optimization for Studio F
                  (women&apos;s fashion), ELA (footwear), Dupree-Azzorti
                  (multilevel marketing), and Claro Colombia (telecom).
                  Abandoned cart recovery flows. A/B testing for product
                  detail pages. Platform audits and friction mapping. Worked
                  at BlackSip and DDB Latina during the early career years
                  when CRO was the bread and butter of every digital agency
                  in the region.
                </p>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
              <Image
                src="/images/cases/retail/studiof.png"
                alt="Retail — work samples showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { name: 'Studio F', caption: 'fashion e-commerce', img: 'studiof.png' },
              { name: 'ELA', caption: 'footwear retail', img: 'ela.png' },
              { name: 'Dupree-Azzorti', caption: 'MLM platform', img: 'dupree.png' },
              { name: 'Claro', caption: 'telecom', img: 'claro.png' },
            ].map((b) => (
              <div key={b.name}>
                <div className="relative aspect-square bg-off-white rounded overflow-hidden">
                  <Image
                    src={`/images/cases/retail/${b.img}`}
                    alt={`${b.name} — ${b.caption}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-3 text-label font-medium">{b.name}</p>
                <p className="text-label text-gray">{b.caption}</p>
              </div>
            ))}
          </div>

          <PullQuote className="mt-16">
            Where I learned that conversion is downstream of clarity — and
            that pixel-perfect mockups don&apos;t matter if the user
            can&apos;t find the checkout.
          </PullQuote>
        </Container>
      </section>

      <NextCase
        eyebrow="Get in touch"
        title="Let's design something together."
        description="Open to remote & hybrid roles."
        slug="../contact"
      />
    </article>
  )
}
