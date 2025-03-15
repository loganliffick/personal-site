import { Tooltip } from '@/components/ds/Tooltip'
import { useMenuNavigation } from '@/hooks/useMenuNavigation'
import { cn } from '@/utils/tw'
import { IconContext } from '@phosphor-icons/react'
import { useRef } from 'react'

type MenuOptionProps = {
  icon: React.ReactNode
  id?: number
  isActive?: number | boolean | string | undefined
  onClick: () => void
  tooltip: string
}

const MenuOption = ({
  icon,
  id,
  isActive,
  onClick,
  tooltip,
}: MenuOptionProps) => (
  <Tooltip
    content={tooltip}
    id={id}
    className="first-of-type:*:first:rounded-l-lg last-of-type:*:first:rounded-r-lg"
  >
    <button
      className={cn(
        'text-100 hover:text-300 border-stroke focus:inset-ring-focus focus-visible:border-focus relative -ml-px flex h-10 w-11 cursor-pointer items-center justify-center border transition-colors focus:z-10 focus:outline-none focus-visible:z-10 focus-visible:inset-ring-[0.5]',
        {
          'text-300 bg-base-200 focus-visible:border-focus': isActive === id,
        },
      )}
      onClick={onClick}
    >
      <IconContext.Provider value={{ size: 18 }}>{icon}</IconContext.Provider>
    </button>
  </Tooltip>
)

type MenuBarProps = {
  className?: string
  isActive: number | boolean | string | undefined
  options: MenuOptionProps[]
  optionIds?: boolean
}

export const MenuBar = ({
  className,
  isActive,
  options,
  optionIds = false, // if option needs an extra unique ID
}: MenuBarProps) => {
  const menuRef = useRef<HTMLElement | null>(null)

  useMenuNavigation({ menuRef, direction: 'horizontal' })

  return (
    <nav
      className={cn('bg-base-100 flex rounded-lg shadow-xs', className)}
      ref={menuRef}
    >
      {options.map((option, index) => (
        <MenuOption
          key={index}
          {...option}
          isActive={isActive}
          id={optionIds ? option.id : index}
        />
      ))}
    </nav>
  )
}
