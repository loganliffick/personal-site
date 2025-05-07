import { Main } from '@/components/layout/Main'
import { cn } from '@/utils/tw'
import Image from 'next/image'

const vercelImages = [
  '/og.jpg',
  '/images/blog/my-workspace/setup.webp',
  '/images/blog/my-workspace/setup.webp',
]

const ModImage = (props: {
  className?: string
  imgClassName?: string
  src: string
}) => (
  <div
    className={cn(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/0',
      props.className,
    )}
  >
    <Image
      fill
      src={props.src}
      className={cn(
        'ease-bounce-lite relative overflow-clip rounded object-cover opacity-0 shadow-xl grayscale-100 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100',
        props.imgClassName,
      )}
      alt="test"
    />
  </div>
)

const PicLink = (props: { title?: string; images: string[] }) => {
  return (
    <button className="group relative inline-flex focus:outline-none">
      <div className="absolute top-1/2 left-1/2 -z-10 flex w-full -translate-x-1/2 -translate-y-1/2 bg-red-800/0">
        {props.images.map((image, index) => (
          <ModImage
            src={image}
            key={index}
            className={
              index === 0
                ? 'aspect-[3/4] h-36'
                : index === 1
                  ? 'aspect-[4/3] h-40'
                  : 'aspect-square h-20'
            }
            imgClassName={
              index === 0
                ? 'group-hover:translate-x-36 group-hover:-translate-y-32 group-focus:-translate-y-32 group-focus:translate-x-36'
                : index === 1
                  ? 'group-hover:translate-x-10 group-hover:-translate-y-20 group-focus:translate-x-10 group-focus:-translate-y-20'
                  : 'group-hover:translate-x-20 group-hover:-translate-y-52 group-focus:translate-x-20 group-focus:-translate-y-52'
            }
          />
        ))}
      </div>
      <span className="relative cursor-pointer">
        {props.title}
        <span className="inline-block font-normal transition-transform ease-out group-hover:-translate-y-2 group-focus:-translate-y-2">
          *
        </span>
      </span>
    </button>
  )
}

export default function Page() {
  return (
    <Main>
      <section className="w-full">
        <div className="flex h-screen w-full items-center justify-center">
          <h1 className="max-w-xl text-3xl leading-[2.7rem] font-semibold tracking-tighter">
            Hi, i'm Logan Liffick. I work at{' '}
            <PicLink title="Vercel" images={vercelImages} /> as a Design
            Engineer. Previously i worked at Outerbase, Makelog, and
            Digitalocean.
          </h1>
        </div>
      </section>
    </Main>
  )
}
