import Container from '@/components/ui/Container'
import Eyebrow from '@/components/case-study/Eyebrow'
import Link from 'next/link'

export const metadata = {
  title: 'Contact — David Castrillón',
  description:
    "Let's design something together. Senior Product Designer based in Medellín, open to remote and hybrid roles.",
}

export default function ContactPage() {
  return (
    <article className="bg-black text-white min-h-screen flex items-center">
      <Container>
        <div className="py-32">
          <Eyebrow color="gray">Get in touch</Eyebrow>
          <h1 className="mt-4 text-display-l md:text-[120px] font-light leading-[0.95] tracking-tight">
            Let&apos;s design <br />
            something together.
          </h1>

          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <Eyebrow color="gray">Email</Eyebrow>
              <a
                href="mailto:davecastrillon@gmail.com"
                className="mt-2 block text-[24px] md:text-[32px] font-light hover:text-red-accent transition-colors"
              >
                davecastrillon@gmail.com
              </a>
            </div>

            <div>
              <Eyebrow color="gray">LinkedIn</Eyebrow>
              <a
                href="https://linkedin.com/in/david-castrillon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-[24px] md:text-[32px] font-light hover:text-red-accent transition-colors"
              >
                linkedin.com/in/david-castrillon
              </a>
            </div>

            <div>
              <Eyebrow color="gray">Location</Eyebrow>
              <p className="mt-2 text-body-l font-light">
                Medellín, Colombia · UTC-5
              </p>
              <p className="mt-1 text-body-l text-gray-light">
                Open to remote & hybrid
              </p>
            </div>

            <div>
              <Eyebrow color="gray">Languages</Eyebrow>
              <p className="mt-2 text-body-l font-light">
                Spanish · English
              </p>
              <p className="mt-1 text-body-l text-gray-light">
                Fluent in both
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-dark/50 flex flex-wrap gap-4">
            <Link
              href="/work/lifesafety-power"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View latest case study →
            </Link>
          </div>

          <p className="mt-24 text-label text-gray-light max-w-md italic">
            Senior Product Designer · Enterprise Platforms (Salesforce + SAP)
            · AI-augmented workflow
          </p>
        </div>
      </Container>
    </article>
  )
}
