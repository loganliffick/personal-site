import Image, { StaticImageData } from 'next/image'
import { ArrowsOutSimple } from 'phosphor-react'
import { MouseEventHandler } from 'react'

const Gallery = (props: {
  image: StaticImageData
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className="group relative m-1.5 mb-0 aspect-video animate-fade overflow-hidden rounded-[18px] bg-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-[18px] after:border-[6px] after:border-white/50 after:transition-[border] hover:after:border-[10px] active:after:border-[16px]"
      onClick={props.onClick}
    >
      <div className="absolute bottom-0 right-0 z-10 origin-bottom-right scale-75 rounded-full bg-white/50 p-2 text-white opacity-0 transition-all duration-300 ease-bounce group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-100 group-hover:opacity-100 group-active:-translate-x-8 group-active:-translate-y-6 group-active:rotate-12 group-active:scale-90">
        <ArrowsOutSimple size={24} weight="bold" />
      </div>
      <Image
        src={props.image}
        alt="img"
        className="object-cover"
        fill={true}
        sizes="100%"
      />
    </button>
  )
}

export default Gallery
