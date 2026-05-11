import { ReactNode } from 'react'

interface PullQuoteProps {
  children: ReactNode
  eyebrow?: string
  className?: string
}

export default function PullQuote({ children, eyebrow, className = '' }: PullQuoteProps) {
  return (
    <div className={`flex gap-8 items-start ${className}`}>
      <div className="shrink-0 w-[3px] h-20 bg-red-accent" />
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <span className="text-label font-medium tracking-label uppercase text-gray">
            {eyebrow}
          </span>
        )}
        <p className="text-[22px] md:text-[26px] font-light italic leading-snug tracking-[-0.01em] text-black">
          {children}
        </p>
      </div>
    </div>
  )
}
