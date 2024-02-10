import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

const Button = (props: { data: any }) => {
  return (
    <li className="mx-2">
      <Link
        className="group flex w-full items-center justify-between rounded-2xl bg-white py-1 pl-6 pr-1 text-base font-bold text-zinc-800 transition-[letter-spacing,color,transform] duration-200 ease-bounce active:scale-x-95 active:tracking-normal sm:text-zinc-600 sm:hover:bg-white sm:hover:tracking-wider sm:hover:text-zinc-800"
        href={props.data.link.href || ''}
        aria-label={props.data.link.text}
        rel={props.data.link.external ? 'no-opener no-referrer' : ''}
        target={props.data.link.external ? '_blank' : '_self'}
      >
        {props.data.link.text}
        <div className="relative flex size-10 items-center justify-center overflow-hidden text-inherit">
          <ArrowRight
            weight="bold"
            size={20}
            className="absolute -translate-x-8 transition-transform duration-300 ease-bounce group-active:-translate-x-8 sm:group-hover:translate-x-0"
          />
          <ArrowRight
            weight="bold"
            size={20}
            className="transition-transform duration-300 ease-bounce group-active:translate-x-0 sm:group-hover:translate-x-8"
          />
        </div>
      </Link>
    </li>
  )
}

export default Button
