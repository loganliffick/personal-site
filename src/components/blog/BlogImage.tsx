import Image from 'next/image'

type BlogImageProps = {
  alt: string
  src: string
}

export const BlogImage = ({ alt, src }: BlogImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={576}
      height={576}
      className="fade pointer-events-none relative my-8 size-auto w-full overflow-hidden rounded-lg select-none"
      priority
      // loading="lazy"
      // placeholder="blur"
      // blurDataURL={src}
    />
  )
}
