import Image from 'next/image'
import Container from '@/components/ui/Container'
import PullQuote from '@/components/case-study/PullQuote'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'Bancolombia — Selected Work | David Castrillón',
  description:
    "Digital transformation at national scale. UX work during the bank's transition across the SuperApp ecosystem.",
}

export default function BancolombiaPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <p className="mt-4 text-[22px] italic text-gray-dark">
            Digital transformation at national scale
          </p>
          <h1 className="mt-2 text-[80px] md:text-[110px] font-light leading-[0.95] tracking-tight">
            Bancolombia
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
                Digital Banking · Mobile App · Web Platform
              </p>
            </div>
            <div>
              <Eyebrow>Platform</Eyebrow>
              <p className="mt-2 text-label">
                SuperApp ecosystem · Millions of users in production
              </p>
            </div>
            <div>
              <Eyebrow>Role</Eyebrow>
              <p className="mt-2 text-label">
                UX Designer · 2019—2022 · via Multiplica
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-body-l leading-relaxed">
                Bancolombia is Colombia&apos;s largest financial group, with
                millions of users across its SuperApp ecosystem. During its
                digital transformation phase, the design challenge was scale:
                standardizing how flows, IA, and user testing protocols worked
                across products that touched a national user base — from
                everyday banking to credit, savings, and SMB tools.
              </p>

              <div className="mt-8">
                <Eyebrow>What I owned</Eyebrow>
                <p className="mt-2 text-body leading-relaxed">
                  Standardization of workflows and information architecture
                  across products. User research at scale — personas, IA,
                  journey maps, task flows tested with real users. Defined
                  testing protocols adopted across squads. Workshop
                  facilitation across PM, Engineering, and project leadership.
                  The work focused on making a fragmented ecosystem feel like
                  one bank.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/bancolombia/bancolombia-1.png"
                  alt="Bancolombia SuperApp — standardized flows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/bancolombia/bancolombia-2.png"
                  alt="Bancolombia SuperApp — task flow walkthrough"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <PullQuote className="mt-16">
            Designing for millions means choosing where to optimize the rare
            case vs. the common one. The work was less about pushing pixels
            and more about defending consistency across teams that wanted to
            ship faster than the system could absorb.
          </PullQuote>
        </Container>
      </section>

      <NextCase
        eyebrow="Selected Work"
        title="Pagui"
        description="B2B/B2C fintech · Buy now, pay later"
        slug="pagui"
      />
    </article>
  )
}
