import { ImageExplorer } from '@/components/image/ImageExplorer'
import Image from 'next/image'

type PostImageProps = {
  alt: string
  explorePoints?: React.ComponentProps<typeof ImageExplorer>['points']
  priority?: boolean
  src: string
}

export const PostImage = ({
  alt,
  explorePoints,
  priority = false,
  src,
}: PostImageProps) => {
  return (
    <div className="group/img relative my-8">
      {explorePoints && <ImageExplorer points={explorePoints} />}

      <div className="relative aspect-[4/4] w-full overflow-hidden rounded sm:aspect-[3/2]">
        <Image
          alt={alt}
          src={src}
          fill
          className="object-cover select-none"
          priority={priority}
          draggable={false}
        />
      </div>
    </div>
  )
}
