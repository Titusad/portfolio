import Image from 'next/image'
import Container from '@/components/ui/Container'
import PullQuote from '@/components/case-study/PullQuote'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'Pagui — Selected Work | David Castrillón',
  description:
    'B2B/B2C fintech for instant micro-credit via WhatsApp. End-to-end product design under NDA.',
}

export default function PaguiPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <p className="mt-4 text-[22px] italic text-gray-dark">
            B2B/B2C fintech · Buy now, pay later
          </p>
          <h1 className="mt-2 text-[80px] md:text-[110px] font-light leading-[0.95] tracking-tight">
            Pagui
          </h1>

          <div className="mt-8 inline-block border border-gray-light px-4 py-2 rounded">
            <p className="text-label uppercase tracking-wider text-gray-dark">
              Project shown under NDA · Real assets can be shown on a videocall.
            </p>
          </div>

          <div className="mt-16 max-w-3xl grid md:grid-cols-3 gap-x-12 gap-y-6 border-t border-gray-light pt-8">
            <div>
              <Eyebrow>Industry</Eyebrow>
              <p className="mt-2 text-label">
                Fintech · Micro-credit · WhatsApp commerce
              </p>
            </div>
            <div>
              <Eyebrow>Platform</Eyebrow>
              <p className="mt-2 text-label">
                Mobile app · Merchant dashboard · WhatsApp integration
              </p>
            </div>
            <div>
              <Eyebrow>Role</Eyebrow>
              <p className="mt-2 text-label">
                Product Designer · UX writing, app & dashboard design
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-body-l leading-relaxed">
                Pagui is a B2B/B2C fintech that connects merchants and banks
                via WhatsApp to issue instant micro-credit at the point of
                sale. The product compresses what was a multi-step bank
                application — KYC, credit evaluation, disbursement — into a
                conversational flow inside a channel users already use daily.
              </p>

              <div className="mt-8">
                <Eyebrow>What I owned</Eyebrow>
                <p className="mt-2 text-body leading-relaxed">
                  End-to-end product design for the mobile app and merchant
                  dashboard. UX writing for the WhatsApp flow — every
                  microcopy decision balanced trust-building against the
                  constraint of WhatsApp&apos;s linear chat format. Designed
                  for users with low fintech literacy in regions where
                  micro-credit is often the first formal financial product.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/pagui/pagui-1.png"
                  alt="Pagui app — WhatsApp-based micro-credit flow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/pagui/pagui-2.png"
                  alt="Pagui — merchant dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <PullQuote className="mt-16">
            Designing inside WhatsApp meant accepting a constraint most
            designers never face: zero control over the surface. Every choice
            had to live within a chat window. The product reframed credit as
            conversation — because for users new to finance, that was the
            only interface that already felt familiar.
          </PullQuote>
        </Container>
      </section>

      <NextCase
        eyebrow="Selected Work"
        title="Retail & E-commerce"
        description="Conversion optimization across major Colombian brands"
        slug="retail"
      />
    </article>
  )
}
