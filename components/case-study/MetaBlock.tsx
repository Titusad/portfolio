import { ReactNode } from 'react'

interface MetaBlockProps {
  label: string
  children: ReactNode
  className?: string
}

export default function MetaBlock({ label, children, className = '' }: MetaBlockProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="text-label font-medium tracking-label uppercase text-gray">
        {label}
      </span>
      <div className="text-body font-light leading-relaxed text-black">{children}</div>
    </div>
  )
}
