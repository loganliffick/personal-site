import { cn } from '@/utils/tw'
import { ComputerTower, Moon, Sun } from '@phosphor-icons/react'
import { useState } from 'react'

const Theme = (props: {
  active: number
  icon: React.ReactNode
  id: number
  onClick: () => void
}) => (
  <button className={cn('', { block: props.active === props.id })}>Text</button>
)

export const ThemeSelect = () => {
  const [active, setActive] = useState(0)

  return (
    <nav className="">
      <Theme
        icon={<ComputerTower />}
        active={active}
        id={0}
        onClick={() => setActive(0)}
      />
      <Theme
        icon={<Sun />}
        active={active}
        id={1}
        onClick={() => setActive(1)}
      />
      <Theme
        icon={<Moon />}
        active={active}
        id={2}
        onClick={() => setActive(2)}
      />
    </nav>
  )
}
