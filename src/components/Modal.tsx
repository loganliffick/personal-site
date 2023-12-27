import { X } from 'phosphor-react'
import { useEffect, useRef } from 'react'

const Modal = (props: {
  children?: React.ReactNode
  open: boolean
  setOpen: (arg: boolean) => void
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && menuRef.current === event.target) {
        props.setOpen(false)
      }
    }

    if (props.open) {
      document.body.style.overscrollBehavior = 'none'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overscrollBehavior = 'auto'
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [props.open])

  return (
    props.open && (
      <section
        className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-violet-500/10 backdrop-blur-sm"
        ref={menuRef}
      >
        <article className="relative mx-6 w-full max-w-md rounded-3xl bg-white p-6 text-zinc-800 shadow-md shadow-violet-500/10">
          <button
            aria-label="Close modal"
            className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-2xl sm:transition-transform sm:hover:bg-zinc-100 sm:active:scale-95"
            onClick={() => {
              props.setOpen(false)
            }}
          >
            <X weight="bold" />
          </button>
          {props.children}
        </article>
      </section>
    )
  )
}

export default Modal
