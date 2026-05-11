import { ReactNode } from 'react'
import PullQuote from './PullQuote'

interface ClosingBlockProps {
  children: ReactNode
  eyebrow?: string
  className?: string
}

export default function ClosingBlock({
  children,
  eyebrow = 'WHAT THE WORK TAUGHT ME',
  className = '',
}: ClosingBlockProps) {
  return (
    <div className={`py-16 border-t border-gray-light ${className}`}>
      <PullQuote eyebrow={eyebrow}>{children}</PullQuote>
    </div>
  )
}
