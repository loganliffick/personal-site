import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import slugify from 'slugify'

export const Item = (props: {
  comingSoon?: boolean
  date: string
  offset?: string
  title: string
  image: StaticImageData
}) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.floor(Math.random() * 41) - 20)
  }, [])

  return (
    <Link
      className="scaleFade animate-scaleFadeBlog -mr-10"
      style={{ animationDelay: props.offset + 's' }}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
    >
      <article
        className="relative h-40 w-48 origin-center overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-bounce after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[6px] after:border-white/40 hover:mr-10 hover:!rotate-0 hover:!scale-110 hover:shadow-2xl"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
            <p className="text-sm opacity-70">
              {moment(props.date).format('MMMM D, YYYY')}
            </p> */}
        <Image
          src={props.image}
          className="object-cover"
          fill
          priority
          sizes="100"
          alt="image"
        />
      </article>
    </Link>
  )
}
