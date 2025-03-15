import { cn } from '@/utils/tw'

export const JsonView = (props: { children: any; noScroll?: boolean }) => (
  <pre
    className={cn(
      'h-[600px] w-full overflow-scroll rounded-2xl bg-blue-900 p-4 text-white',
      { 'break-words whitespace-pre-wrap': props.noScroll },
    )}
  >
    {JSON.stringify(props.children, null, 2)}
  </pre>
)
