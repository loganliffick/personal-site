type BlogImageProps = {
  className?: string
}

export const BlogImage = ({ className }: BlogImageProps) => {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-xl">
      <div className="flex size-full items-center justify-center bg-neutral-300">
        img
      </div>
    </div>
  )
}
