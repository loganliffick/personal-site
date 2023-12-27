import { Circle, CircleNotch } from 'phosphor-react'

const Loader = () => (
  <div className="relative size-5 text-xl">
    <Circle className="absolute left-0 top-0 text-zinc-300" weight="bold" />
    <CircleNotch
      className="absolute left-0 top-0 animate-spin text-zinc-500"
      weight="bold"
    />
  </div>
)

export default Loader
