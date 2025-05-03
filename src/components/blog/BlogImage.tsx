import Image from 'next/image'

type BlogImageProps = {
  alt: string
  priority?: boolean
  src: string
}

export const BlogImage = ({ alt, priority = false, src }: BlogImageProps) => {
  return (
    <Image
      alt={alt}
      className="relative my-8 overflow-hidden rounded select-none"
      draggable={false}
      height={672}
      priority={priority}
      src={src}
      width={672}
    />
  )
}
