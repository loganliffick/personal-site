import { cn } from '@/utils/tw'

type MessageProps = {
  active: boolean
}

export const Message = ({ active }: MessageProps) => {
  return <div className={cn('', { block: active })}>Text</div>
}
