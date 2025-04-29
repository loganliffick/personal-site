import { cn } from '@/utils/tw'

type SectionProps = {
  children?: React.ReactNode
  className?: string
  visualize?: boolean
}

export const Section = ({ children, className, visualize }: SectionProps) => (
  <section
    className={cn(
      'w-full px-6 py-20',
      { 'bg-orange-200': visualize },
      className,
    )}
  >
    {children}
  </section>
)
