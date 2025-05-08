import Image from 'next/image'

type PostImageProps = {
  alt: string
  priority?: boolean
  src: string
}

export const PostImage = ({ alt, priority = false, src }: PostImageProps) => {
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
