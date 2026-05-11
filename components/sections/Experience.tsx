import Container from '@/components/ui/Container'
import LogoGrid from '@/components/sections/LogoGrid'

const brands = [
  { name: 'ASSA ABLOY', logoSrc: '/logos/brands/assa-abloy.svg' },
  { name: 'Bancolombia', logoSrc: '/logos/brands/bancolombia.svg' },
  { name: 'Zilliant', logoSrc: '/logos/brands/zilliant.svg' },
  { name: 'DALOG', logoSrc: '/logos/brands/dalog.svg' },
  { name: 'Pagui', logoSrc: '/logos/brands/pagui.svg' },
  { name: 'Claro', logoSrc: '/logos/brands/claro.svg' },
  { name: 'Studio F', logoSrc: '/logos/brands/studio-f.svg' },
  { name: 'ELA', logoSrc: '/logos/brands/ela.svg' },
  { name: 'Dupree', logoSrc: '/logos/brands/dupree.svg' },
  { name: 'Pulsedin', logoSrc: '/logos/brands/pulsedin.svg' },
]

const agencies = [
  { name: 'Altimetrik', logoSrc: '/logos/agencies/altimetrik.svg' },
  { name: 'Team International', logoSrc: '/logos/agencies/team-intl.svg' },
  { name: 'TechGenies', logoSrc: '/logos/agencies/techgenies.svg' },
  { name: 'Multiplica', logoSrc: '/logos/agencies/multiplica.svg' },
  { name: 'DDB Latam', logoSrc: '/logos/agencies/ddb.svg' },
  { name: 'BlackSip', logoSrc: '/logos/agencies/blacksip.svg' },
]

export default function Experience() {
  return (
    <section className="bg-black py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — bio */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-label font-medium tracking-label uppercase text-gray">
                Experience
              </span>
              <h2 className="text-display-m font-light text-white leading-snug tracking-tight">
                9+ years across enterprise, fintech, and global brands.
              </h2>
            </div>
            <p className="text-body font-light leading-relaxed text-gray-light max-w-md">
              Born in Bogotá, based in Medellín. Spent the last decade designing on top of platforms
              most designers never touch — Salesforce, SAP, legacy enterprise software — while also
              building consumer-facing products in fintech and retail. The thread across both:
              clarity beats decoration, especially when stakes are high.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <div className="w-[60px] h-[3px] bg-red-accent" />
              <span className="text-body-s font-light text-gray">
                Spanish (native) · English (fluent)
              </span>
            </div>
          </div>

          {/* Right — logo grids */}
          <div className="flex items-start">
            <LogoGrid brands={brands} agencies={agencies} usePlaceholder onDark />
          </div>

        </div>
      </Container>
    </section>
  )
}
