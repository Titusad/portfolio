import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center">
      <Container className="py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left — content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-7">
            {/* Eyebrow */}
            <span
              className="text-label font-medium tracking-label uppercase text-gray opacity-0"
              style={{ animation: 'fadeUp 0.6s ease 0.1s forwards' }}
            >
              Based in Medellín · Open to Remote &amp; Hybrid
            </span>

            {/* Hi I'm + name */}
            <div
              className="flex flex-col gap-1 opacity-0"
              style={{ animation: 'fadeUp 0.7s ease 0.2s forwards' }}
            >
              <span className="text-[28px] lg:text-[32px] font-light italic text-gray-light leading-tight">
                Hi! I&apos;m
              </span>
              <h1 className="text-[64px] md:text-[80px] lg:text-[90px] font-light text-white leading-[1.0] tracking-[-0.03em]">
                David
                <br />
                Castrillón.
              </h1>
            </div>

            {/* Red bar + role */}
            <div
              className="flex flex-col gap-3 opacity-0"
              style={{ animation: 'fadeUp 0.6s ease 0.35s forwards' }}
            >
              <div className="w-[60px] h-[3px] bg-red-accent" />
              <span className="text-body font-medium tracking-[0.2em] uppercase text-white">
                Senior Product Designer
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-[18px] lg:text-[22px] font-light italic text-gray-light leading-snug max-w-xl opacity-0"
              style={{ animation: 'fadeUp 0.6s ease 0.45s forwards' }}
            >
              Enterprise Platforms (Salesforce + SAP) · B2B SaaS · AI-augmented design workflow
            </p>

            {/* Description */}
            <p
              className="text-body font-light leading-relaxed text-gray-light max-w-xl opacity-0"
              style={{ animation: 'fadeUp 0.6s ease 0.55s forwards' }}
            >
              9+ years architecting solutions on top of complex platforms like Salesforce and SAP,
              building design systems for global brands, and designing products end-to-end.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 pt-2 opacity-0"
              style={{ animation: 'fadeUp 0.6s ease 0.65s forwards' }}
            >
              <a
                href="#featured-cases"
                className="inline-flex items-center gap-2 bg-red-accent text-white px-8 py-4 text-body font-light tracking-wide hover:bg-[#8a1719] transition-colors duration-200"
              >
                See my work <ArrowRight size={16} />
              </a>
              <a
                href="/cv/david-castrillon-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white px-8 py-4 text-body font-light tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0"
            style={{ animation: 'fadeIn 0.8s ease 0.3s forwards' }}
          >
            <div className="relative">
              {/* Decorative red accent */}
              <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 w-28 h-28 lg:w-40 lg:h-40 bg-red-accent z-0" />
              {/* Photo circle */}
              <div className="relative z-10 w-60 h-60 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#2A2A2A] border border-white/10">
                <Image
                  src="/images/profile.jpg"
                  alt="David Castrillón"
                  fill
                  sizes="(max-width: 1024px) 240px, 400px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
