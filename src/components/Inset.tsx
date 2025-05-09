import { cn } from '@/utils/tw'

type InsetProps = {
  children?: React.ReactNode
  className?: string
  format?: true
  visualize?: boolean
}

export const Inset = ({
  children,
  className,
  format,
  visualize,
}: InsetProps) => (
  <div
    className={cn(
      'mx-auto w-full max-w-2xl',
      { 'format-text': format, 'bg-green-200': visualize },
      className,
    )}
  >
    {children}
  </div>
)
