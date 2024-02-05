import Link from 'next/link'

const Button = (props: { data: any }) => {
  return (
    <li className="mx-2">
      <Link
        className="flex w-full rounded-2xl bg-white/30 px-4 py-6 text-base font-bold tracking-wide text-zinc-100 transition-transform sm:hover:bg-white/50 sm:active:scale-90"
        href={props.data.link.href || ''}
        aria-label={props.data.link.text}
        rel={props.data.link.external ? 'no-opener no-referrer' : ''}
        target={props.data.link.external ? '_blank' : '_self'}
      >
        {props.data.link.text}
      </Link>
    </li>
  )
}

export default Button
