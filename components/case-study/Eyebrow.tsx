import { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  color?: 'gray' | 'red'
  className?: string
}

export default function Eyebrow({ children, color = 'gray', className = '' }: EyebrowProps) {
  const colorClass = color === 'red' ? 'text-red-accent' : 'text-gray'
  return (
    <span className={`text-label font-medium tracking-label uppercase ${colorClass} ${className}`}>
      {children}
    </span>
  )
}
