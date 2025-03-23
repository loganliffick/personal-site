import { cn } from '@/utils/tw'

export const Br = ({ className }: { className?: string }) => (
  <br className={cn('hidden lg:inline', className)} />
)
