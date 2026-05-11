'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  beforeCaption?: string
  afterCaption?: string
  className?: string
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeCaption,
  afterCaption,
  className = '',
}: BeforeAfterProps) {
  const [active, setActive] = useState<'before' | 'after'>('before')

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex gap-0 border border-gray-light w-fit">
        <button
          onClick={() => setActive('before')}
          className={`px-6 py-2 text-label font-medium tracking-label uppercase transition-colors duration-200 ${
            active === 'before' ? 'bg-black text-white' : 'text-gray hover:text-black'
          }`}
        >
          {beforeLabel}
        </button>
        <button
          onClick={() => setActive('after')}
          className={`px-6 py-2 text-label font-medium tracking-label uppercase transition-colors duration-200 ${
            active === 'after' ? 'bg-black text-white' : 'text-gray hover:text-black'
          }`}
        >
          {afterLabel}
        </button>
      </div>
      <div className="relative overflow-hidden rounded-sm bg-gray-light">
        <div
          className={`transition-opacity duration-300 ${active === 'before' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
        >
          <Image src={beforeImage} alt={beforeLabel} width={1200} height={800} className="w-full h-auto" />
        </div>
        <div
          className={`transition-opacity duration-300 ${active === 'after' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
        >
          <Image src={afterImage} alt={afterLabel} width={1200} height={800} className="w-full h-auto" />
        </div>
      </div>
      {(beforeCaption || afterCaption) && (
        <p className="text-[12px] text-gray font-light tracking-wide">
          {active === 'before' ? beforeCaption : afterCaption}
        </p>
      )}
    </div>
  )
}
