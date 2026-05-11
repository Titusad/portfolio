import Image from 'next/image'

interface GridImage {
  src: string
  alt: string
  caption?: string
  description?: string
}

interface ImageGridProps {
  images: GridImage[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

export default function ImageGrid({ images, columns = 2, className = '' }: ImageGridProps) {
  return (
    <div className={`grid ${colClasses[columns]} gap-4 ${className}`}>
      {images.map((image, i) => (
        <figure key={i} className="group flex flex-col gap-2">
          <div className="overflow-hidden rounded-sm bg-gray-light">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          {(image.caption || image.description) && (
            <figcaption className="flex flex-col gap-1">
              {image.caption && (
                <span className="text-[12px] text-gray font-light tracking-wide">{image.caption}</span>
              )}
              {image.description && (
                <span className="text-[12px] text-gray-dark font-light leading-relaxed">{image.description}</span>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
