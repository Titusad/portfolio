import Image from 'next/image'

interface Brand {
  name: string
  logoSrc: string
}

interface LogoGridProps {
  brands?: Brand[]
  agencies?: Brand[]
  usePlaceholder?: boolean
  onDark?: boolean
  className?: string
}

function LogoPlaceholder({ name, onDark }: { name: string; onDark?: boolean }) {
  return (
    <div
      className={`h-8 px-4 flex items-center justify-center rounded text-label font-medium tracking-wide uppercase transition-opacity duration-300 hover:opacity-100 ${
        onDark
          ? 'bg-white/5 text-[#555555] hover:text-gray border border-white/10'
          : 'bg-gray-light text-gray hover:text-gray-dark border border-gray-light'
      }`}
    >
      {name}
    </div>
  )
}

function LogoImage({ name, src }: { name: string; src: string }) {
  return (
    <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        className="h-8 w-auto object-contain"
      />
    </div>
  )
}

export default function LogoGrid({
  brands = [],
  agencies = [],
  usePlaceholder = false,
  onDark = false,
  className = '',
}: LogoGridProps) {
  const labelClass = onDark
    ? 'text-label font-medium tracking-label uppercase text-[#555555]'
    : 'text-label font-medium tracking-label uppercase text-gray'

  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      {brands.length > 0 && (
        <div className="flex flex-col gap-5">
          <span className={labelClass}>I&apos;ve worked with</span>
          <div className="flex flex-wrap items-center gap-3">
            {brands.map((brand) =>
              usePlaceholder ? (
                <LogoPlaceholder key={brand.name} name={brand.name} onDark={onDark} />
              ) : (
                <LogoImage key={brand.name} name={brand.name} src={brand.logoSrc} />
              )
            )}
          </div>
        </div>
      )}

      {agencies.length > 0 && (
        <div className="flex flex-col gap-5">
          <span className={labelClass}>Agencies &amp; Partners</span>
          <div className="flex flex-wrap items-center gap-3">
            {agencies.map((agency) =>
              usePlaceholder ? (
                <LogoPlaceholder key={agency.name} name={agency.name} onDark={onDark} />
              ) : (
                <LogoImage key={agency.name} name={agency.name} src={agency.logoSrc} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
