import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

const BackButton = () => {
  return (
    <div className="mb-4 animate-fade">
      <Link
        aria-description="return to blog"
        className="group flex w-max -translate-x-5 items-center gap-1.5 text-zinc-500 no-underline duration-300 ease-bounce sm:hover:translate-x-0 sm:active:-translate-x-5"
        href={'/blog'}
      >
        <ArrowLeft
          weight="bold"
          size={14}
          className="-translate-x-4 opacity-0 duration-300 ease-bounce sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-active:-translate-x-4 sm:group-active:opacity-0"
        />
        Back to blog
      </Link>
    </div>
  )
}

export default BackButton
