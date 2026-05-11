interface DecisionCardProps {
  number: string
  title: string
  situation: string
  choice: string
  leftOut: string
  className?: string
}

export default function DecisionCard({
  number,
  title,
  situation,
  choice,
  leftOut,
  className = '',
}: DecisionCardProps) {
  return (
    <div className={`border border-gray-light ${className}`}>
      <div className="flex items-baseline gap-4 px-8 py-6 border-b border-gray-light">
        <span className="text-label font-medium tracking-label uppercase text-red-accent">
          {number}
        </span>
        <h3 className="text-[18px] font-light tracking-[-0.01em] text-black">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-light">
        <div className="px-8 py-6 flex flex-col gap-3">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            Situation
          </span>
          <p className="text-[14px] font-light leading-relaxed text-gray-dark">{situation}</p>
        </div>
        <div className="px-8 py-6 flex flex-col gap-3">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            What I Chose
          </span>
          <p className="text-[14px] font-light leading-relaxed text-black">{choice}</p>
        </div>
        <div className="px-8 py-6 flex flex-col gap-3">
          <span className="text-label font-medium tracking-label uppercase text-gray">
            What I Left Out
          </span>
          <p className="text-[14px] font-light leading-relaxed text-gray-dark">{leftOut}</p>
        </div>
      </div>
    </div>
  )
}
