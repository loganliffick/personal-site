import { Main } from '@/components/layout/Main'
import { cn } from '@/utils/tw'
import Image from 'next/image'

const vercelImages = ['/og.jpg', '/og.jpg']

const ModImage = (props: { style?: React.CSSProperties; src: string }) => (
  <div
    className={cn('absolute aspect-video w-80 overflow-clip rounded-xl shadow')}
    style={props.style}
  >
    <Image fill src={props.src} alt="" />
  </div>
)

const PicLink = (props: { title?: string; images: string[] }) => {
  return (
    <span className="relative inline-flex cursor-default items-center gap-2 overflow-visible underline">
      {props.title}
      <span className="absolute -top-48 -left-1/2 flex w-full -translate-x-1/2 gap-1 bg-red-500 p-10">
        {props.images.map((image, index) => (
          <ModImage
            src={image}
            key={index}
            style={{ left: `${index * 100}px` }}
          />
        ))}
      </span>
    </span>
  )
}

export default async function Page() {
  return (
    <Main>
      <section className="w-full">
        <div className="flex h-screen w-full items-center justify-center">
          <h1 className="max-w-xl text-3xl leading-[2.5rem] font-semibold tracking-tight">
            hi, i'm logan liffick. i work at{' '}
            <PicLink title="vercel" images={vercelImages} /> as a design
            engineer. previously i worked at outerbase, makelog, and
            digitalocean.
          </h1>
        </div>
      </section>
    </Main>
  )
}
