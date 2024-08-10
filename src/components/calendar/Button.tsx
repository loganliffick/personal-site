import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

type ButtonProps = {
  data: any
}

const Button = ({ data }: ButtonProps) => (
  <li className="mx-2">
    <Link
      className="group flex w-full items-center justify-between rounded-2xl bg-white py-1 pl-6 pr-1 text-base font-bold tracking-wide text-zinc-800 transition-[letter-spacing,transform] duration-200 ease-bounce sm:hover:bg-white sm:hover:tracking-widest sm:active:tracking-wide"
      href={data.href || ''}
      aria-label={data.text}
      rel={data.external ? 'no-opener no-referrer' : ''}
      target={data.external ? '_blank' : '_self'}
    >
      {data.text}
      <div className="relative flex size-10 items-center justify-center overflow-hidden text-inherit *:transition-transform *:duration-300 *:ease-bounce">
        <ArrowRight
          weight="bold"
          size={20}
          className="absolute -translate-x-8 sm:group-hover:translate-x-0 sm:group-active:-translate-x-8"
        />
        <ArrowRight
          weight="bold"
          size={20}
          className="sm:group-hover:translate-x-8 sm:group-active:translate-x-0"
        />
      </div>
    </Link>
  </li>
)

export default Button
