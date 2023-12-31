import { cn } from 'utils/tw'

const Button = (props: {
  aria?: string
  children?: React.ReactNode
  onClick: () => void
  state?: boolean
  text: string
  type?: 'primary' | 'secondary'
}) => {
  const className = cn(
    'rounded-2xl px-4 py-3 font-medium sm:transition-transform sm:active:scale-95 w-full',
    {
      'bg-transparent sm:hover:bg-zinc-100 text-zinc-500':
        props.type === 'secondary',
      'bg-zinc-100 text-zinc-700': props.type === 'secondary' && props.state,

      'bg-zinc-100 sm:hover:bg-zinc-200 text-zinc-700':
        props.type === 'primary',
      'bg-zinc-200 text-zinc-900': props.type === 'primary' && props.state,

      'flex items-center justify-center gap-2.5 pl-2.5 pr-3': props.children,
    },
  )

  return (
    <button
      aria-label={props.aria ?? props.text}
      className={className}
      onClick={props.onClick}
    >
      {props.children}
      {props.text}
    </button>
  )
}

export default Button
