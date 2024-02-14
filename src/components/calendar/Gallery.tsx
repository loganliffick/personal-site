import Image, { StaticImageData } from 'next/image'
import { ArrowsOutSimple } from 'phosphor-react'
import { MouseEventHandler } from 'react'

const Gallery = (props: {
  image: StaticImageData
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <li className="relative mx-2 overflow-hidden rounded-2xl">
      <button
        className="group relative flex aspect-video w-full items-center overflow-hidden rounded-2xl bg-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-2xl after:border-[6px] after:border-white/50 after:transition-[border] sm:hover:after:border-[10px] sm:active:after:border-[16px]"
        onClick={props.onClick}
      >
        <div className="absolute bottom-4 right-4 z-10 scale-100 rounded-full bg-white/50 p-2 text-white transition-all duration-300 ease-bounce group-active:rotate-12 group-active:scale-90 sm:bottom-0 sm:right-0 sm:origin-bottom-right sm:scale-75 sm:opacity-0 sm:group-hover:-translate-x-4 sm:group-hover:-translate-y-4 sm:group-hover:scale-100 sm:group-hover:opacity-100 sm:group-active:-translate-x-8 sm:group-active:-translate-y-6 sm:group-active:scale-90">
          <ArrowsOutSimple size={24} weight="bold" />
        </div>
        <Image
          src={props.image}
          alt="Image"
          className="rounded-2xl"
          // fill={true}
          // sizes="100%"
        />
      </button>
    </li>
  )
}

export default Gallery
