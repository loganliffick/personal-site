import { cn } from '@/utils/tw'

const Dot = (props: { delay?: number }) => (
  <div
    className="bg-base-1000/50 size-2 animate-pulse rounded-full"
    style={{ animationDelay: `${props.delay}ms` }}
  />
)

const Message = (props: { text?: string; typing?: boolean }) => (
  <div className="bg-base-bg-depth absolute -top-10 w-max rounded-xl px-3 py-1">
    {props.typing ? (
      <div className="flex h-6 items-center gap-1">
        <Dot />
        <Dot delay={100} />
        <Dot delay={200} />
      </div>
    ) : (
      props.text
    )}
  </div>
)

type ChatProps = {
  active: boolean
}

export const Chat = ({ active }: ChatProps) => {
  return (
    <div className="font-sans font-medium">
      {/* <Message text="yooo sorry!" /> */}
      <Message text="we aren't talking about it yet 💀" typing />
    </div>
  )
}
