import useClickOutside from 'hooks/useClickOutside'
import Image from 'next/image'
import { Command, Eye, EyeClosed, HandWaving } from 'phosphor-react'
import { useState } from 'react'
import { cn } from 'utils/tw'

const MenuItem = (props: {
  aria?: string
  icon?: 'handWaving' | 'command' | 'eye'
  onClick: () => void
  text: string
}) => (
  <li>
    <button
      className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium sm:hover:bg-white/75"
      onClick={props.onClick}
    >
      {props.text}
      {props.icon === 'command' ? (
        <Command
          size={20}
          className="sm:transition-transform sm:duration-500 sm:group-hover:-scale-x-100"
        />
      ) : props.icon === 'handWaving' ? (
        <HandWaving
          size={20}
          className="sm:transition-transform sm:duration-300 sm:group-hover:rotate-[20deg]"
        />
      ) : props.icon === 'eye' ? (
        <div className="relative size-5">
          <EyeClosed
            size={20}
            className="absolute left-0 top-0 opacity-0 transition-opacity group-hover:opacity-100"
          />
          <Eye
            size={20}
            className="transition-opacity group-hover:opacity-0 "
          />
        </div>
      ) : null}
    </button>
  </li>
)

const UserMenu = (props: {
  children?: React.ReactNode
  userMenuOpen: boolean
  user: any
}) => (
  <div
    className={cn(
      'ease-bounce invisible absolute bottom-14 right-0 block w-44 min-w-max origin-bottom-right scale-75 rounded-2xl bg-violet-100 p-1 text-violet-800 opacity-0 duration-200',
      {
        'visible scale-100 opacity-100': props.userMenuOpen,
      },
    )}
  >
    <p className="px-4 py-3 text-lg font-semibold">
      <span className="block text-sm font-normal opacity-70">Playing as</span>
      {props.user.displayName}
    </p>

    <ul>{props.children}</ul>
  </div>
)

const MultiplayerButton = (props: {
  aria?: string
  onClick: () => void
  text: string
}) => (
  <button
    aria-label={props.aria ?? props.text}
    className="block rounded-full bg-white px-5 py-3 text-sm font-bold text-violet-500 transition-transform sm:hover:bg-white/90 sm:active:scale-95"
    onClick={props.onClick}
  >
    {props.text}
  </button>
)

const MultiplayerBar = (props: {
  loginButtonProps: React.ComponentProps<typeof MultiplayerButton>
  logoutButtonProps: React.ComponentProps<typeof MultiplayerButton>
  user: any
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [hideMenu, setHideMenu] = useState(false)

  const userMenuRef = useClickOutside(() => {
    setUserMenuOpen(false)
  })

  return (
    <div className="fixed bottom-8 left-1/2 z-10 flex w-full -translate-x-1/2 bg-transparent px-6 sm:max-w-xs sm:px-0">
      <nav
        className={cn(
          'mx-auto flex w-full max-w-xs items-center justify-between rounded-full bg-violet-500 px-1 py-1 pl-5 shadow-lg shadow-violet-500/40 transition',
          { '-translate-y-16 opacity-50': hideMenu },
        )}
      >
        <div className="flex items-center gap-1">
          <p className="font-mono text-sm font-semibold text-white">
            Players: 0
          </p>
        </div>

        {props.user ? (
          <div className="relative size-11" ref={userMenuRef}>
            <button
              className={cn(
                'overflow-hidden rounded-full border-2 border-white/30 border-opacity-50 hover:opacity-90 active:scale-95 sm:transition-transform',
                { 'sm:hover:opacity-100': userMenuOpen },
              )}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <Image
                alt={props.user.displayName || ''}
                height={44}
                src={props.user.photoURL || ''}
                width={44}
                referrerPolicy="no-referrer"
                className="pointer-events-none"
              />
            </button>
            <UserMenu userMenuOpen={userMenuOpen} user={props.user}>
              <MenuItem
                icon="command"
                onClick={() => {
                  console.log('Shortcuts go here')
                }}
                text="Shortcuts"
              />
              <MenuItem
                icon="eye"
                onClick={() => {
                  console.log('Shortcuts go here')
                }}
                text="Hide Mltiplr"
              />
              <MenuItem
                icon="handWaving"
                onClick={() => {
                  props.logoutButtonProps.onClick()
                  setUserMenuOpen(false)
                }}
                text="Log out"
              />
            </UserMenu>
          </div>
        ) : (
          <div className="flex gap-1">
            <button
              className="group flex size-11 items-center justify-center rounded-full bg-transparent text-white transition-transform sm:hover:bg-white/0 sm:active:scale-95"
              onClick={() => setHideMenu(!hideMenu)}
            >
              close
            </button>
            <MultiplayerButton {...props.loginButtonProps} />
          </div>
        )}
      </nav>
    </div>
  )
}

export default MultiplayerBar
