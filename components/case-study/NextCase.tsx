import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NextCaseProps {
  title: string
  slug: string
  eyebrow: string
  description?: string
  className?: string
}

export default function NextCase({ title, slug, eyebrow, description, className = '' }: NextCaseProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`group block w-full bg-off-white hover:bg-black transition-colors duration-500 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-24 py-20 md:py-32 flex flex-col gap-6">
        <span className="text-label font-medium tracking-label uppercase text-gray group-hover:text-[#666] transition-colors duration-300">
          {eyebrow}
        </span>
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] md:text-display-m lg:text-display-l font-light leading-[1.1] tracking-tight text-black group-hover:text-white transition-colors duration-500 max-w-3xl">
              {title}
            </h2>
            {description && (
              <p className="text-body-s font-light italic text-gray group-hover:text-[#666] transition-colors duration-300">
                {description}
              </p>
            )}
          </div>
          <div className="shrink-0 flex items-center justify-center w-14 h-14 border border-black group-hover:border-white group-hover:text-white transition-all duration-500 text-black">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}
