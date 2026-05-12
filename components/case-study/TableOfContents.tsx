'use client'

import { useEffect, useState } from 'react'

interface TocSection {
  id: string
  label: string
}

const DEFAULT_SECTIONS: TocSection[] = [
  { id: 'context', label: 'Context' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'solution', label: 'Solution' },
  { id: 'outcome', label: 'Outcome' },
]

interface TableOfContentsProps {
  sections?: TocSection[]
  className?: string
}

export default function TableOfContents({
  sections = DEFAULT_SECTIONS,
  className = '',
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed left-6 top-24 w-44 hidden 2xl:flex flex-col gap-1 ${className}`} aria-label="Table of contents">
      <span className="text-label font-medium tracking-label uppercase text-gray mb-4">
        On this page
      </span>
      {sections.map(({ id, label }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`text-left text-body-s font-light py-1 pl-3 border-l-2 transition-all duration-200 ${
              isActive
                ? 'border-red-accent text-black font-normal'
                : 'border-transparent text-gray hover:text-black hover:border-gray-light'
            }`}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
