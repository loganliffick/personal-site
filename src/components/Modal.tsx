import { X } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { cn } from 'utils/tw'

type ModalProps = {
  children?: React.ReactNode
  open: boolean
  setOpen: (arg: boolean) => void
}

const Modal = ({ children, open, setOpen }: ModalProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && menuRef.current === event.target) {
        setOpen(false)
      }
    }

    if (open) {
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
  }, [open])

  return (
    open && (
      <section
        className={cn(
          'fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-zinc-500/10 backdrop-blur-sm duration-200',
          { 'animate-fadeSm': open },
        )}
        ref={menuRef}
      >
        <article
          className={cn(
            'relative mx-6 w-full max-w-md rounded-3xl bg-white p-6 text-zinc-800 shadow-md shadow-zinc-500/10',
            {
              'animate-revealSm': open,
            },
          )}
        >
          <button
            aria-label="Close modal"
            className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-2xl sm:transition-transform sm:hover:bg-zinc-100 sm:active:scale-95"
            onClick={() => {
              setOpen(false)
            }}
          >
            <X weight="bold" />
          </button>
          {children}
        </article>
      </section>
    )
  )
}

export default Modal
