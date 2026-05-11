'use client'

import { ReactNode, ComponentPropsWithoutRef, cloneElement, isValidElement } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  asChild?: boolean
  showArrow?: boolean
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-red-accent text-white hover:bg-[#8a1719] transition-colors duration-200',
  secondary:
    'bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors duration-200',
  ghost:
    'bg-transparent text-black underline-offset-4 hover:underline transition-all duration-200',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-[12px] px-6 py-3',
  md: 'text-[16px] px-8 py-4',
  lg: 'text-[20px] px-10 py-5',
}

const arrowSize: Record<Size, number> = { sm: 14, md: 16, lg: 20 }

export default function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  showArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 font-sans font-light tracking-wide ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string; children?: ReactNode }>
    return cloneElement(child, {
      className: `${classes} ${child.props.className ?? ''}`.trim(),
      children: (
        <>
          {child.props.children}
          {showArrow && <ArrowRight size={arrowSize[size]} />}
        </>
      ),
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight size={arrowSize[size]} />}
    </button>
  )
}
