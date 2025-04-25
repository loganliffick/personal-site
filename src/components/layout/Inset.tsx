import { cn } from '@/utils/tw'

type InsetProps = {
  children?: React.ReactNode
  className?: string
  visualize?: boolean
}

export const Inset = ({ children, className, visualize }: InsetProps) => (
  <div
    className={cn(
      'mx-auto w-full max-w-xl',
      { 'bg-green-200': visualize },
      className,
    )}
  >
    {children}
  </div>
)
