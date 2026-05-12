import Image from 'next/image'
import Container from '@/components/ui/Container'
import PullQuote from '@/components/case-study/PullQuote'
import NextCase from '@/components/case-study/NextCase'
import Eyebrow from '@/components/case-study/Eyebrow'

export const metadata = {
  title: 'Zilliant — Selected Work | David Castrillón',
  description:
    'Salesforce + SAP-integrated B2B SaaS for pricing strategy at scale. UX/UI design work via Team International.',
}

export default function ZilliantPage() {
  return (
    <article className="bg-white">
      <section className="py-32 border-b border-gray-light">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <p className="mt-4 text-[22px] italic text-gray-dark">
            Salesforce + SAP-integrated B2B SaaS
          </p>
          <h1 className="mt-2 text-[80px] md:text-[110px] font-light leading-[0.95] tracking-tight">
            Zilliant
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
                B2B Pricing & Revenue Optimization · Enterprise SaaS
              </p>
            </div>
            <div>
              <Eyebrow>Platform</Eyebrow>
              <p className="mt-2 text-label">
                Available on Salesforce AppExchange & SAP App Center
              </p>
            </div>
            <div>
              <Eyebrow>Role</Eyebrow>
              <p className="mt-2 text-label">
                UX/UI Design Specialist · 2 years · via Team International
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-body-l leading-relaxed">
                Zilliant Price Manager is a US-based enterprise platform that
                helps B2B companies manage pricing strategy at scale. The
                product lives in two of the largest Enterprise ecosystems in
                the world — Salesforce and SAP. Native integrations with
                Salesforce CPQ, B2B Commerce Cloud, Sales Cloud, and SAP
                S/4HANA, SAP Commerce Cloud, SAP Customer Experience.
              </p>

              <div className="mt-8">
                <Eyebrow>What I owned</Eyebrow>
                <p className="mt-2 text-body leading-relaxed">
                  Platform-aware UI design for Price Manager — high-fidelity
                  prototypes that lived on top of both platforms&apos;
                  interaction patterns. Implemented Figma as the team&apos;s
                  primary tool and defined the design methodology.
                  Cross-functional Agile collaboration on GitHub & Jira.
                  Workshop facilitation in early product phases. User testing
                  on enterprise B2B audiences.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/zilliant/price-manager.png"
                  alt="Zilliant Price Manager — Salesforce-native dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-4/3 rounded overflow-hidden bg-off-white">
                <Image
                  src="/images/cases/zilliant/zilliant-iq.png"
                  alt="Zilliant IQ — Multi-step pricing wizard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <PullQuote className="mt-16">
            The platform-design judgment call I made repeatedly: when to
            extend the platform&apos;s native components vs. when to build
            custom — driven by the user&apos;s job-to-be-done, not by
            aesthetic preference.
          </PullQuote>
        </Container>
      </section>

      <NextCase
        eyebrow="Selected Work"
        title="Bancolombia"
        description="Digital transformation at national scale"
        slug="bancolombia"
      />
    </article>
  )
}
