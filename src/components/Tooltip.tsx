import { cn } from 'utils/tw'

const Tooltip = (props: { text: string; state?: boolean }) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute -top-8 left-1/2 z-50 w-max origin-bottom -translate-x-1/2 translate-y-2 rounded-lg bg-zinc-900 px-2.5 py-1 text-sm font-semibold text-zinc-200 opacity-0 shadow-lg transition sm:group-hover/tooltip:-translate-y-0 sm:group-hover/tooltip:opacity-100',
        { hidden: props.state },
      )}
    >
      {props.text}
    </div>
  )
}

export default Tooltip
