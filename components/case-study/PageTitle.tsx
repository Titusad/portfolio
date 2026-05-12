import Eyebrow from './Eyebrow'

interface PageTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

export default function PageTitle({ eyebrow, title, subtitle, className = '' }: PageTitleProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="w-[60px] h-[3px] bg-red-accent" />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-[32px] md:text-[40px] font-light leading-snug tracking-tight text-black">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[18px] md:text-[20px] font-light leading-relaxed text-gray-dark max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
