import Image from 'next/image'

type PostImageProps = {
  alt: string
  priority?: boolean
  src: string
}

export const PostImage = ({ alt, priority = false, src }: PostImageProps) => {
  return (
    <div className="relative my-8 aspect-[4/4] w-full overflow-hidden rounded sm:aspect-[3/2]">
      <Image
        alt={alt}
        src={src}
        fill
        className="object-cover select-none"
        priority={priority}
        draggable={false}
      />
    </div>
  )
}
