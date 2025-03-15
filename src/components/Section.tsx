import { cn } from '@/utils/tw'

type SectionProps = {
  children?: React.ReactNode
  className?: string
  visualize?: boolean
}

export const Section = ({ children, className, visualize }: SectionProps) => (
  <section
    className={cn(
      'my-20 flex w-full max-w-lg flex-col items-center text-zinc-800 sm:my-32',
      { 'bg-orange-200': visualize },
      className,
    )}
  >
    {children}
  </section>
)
