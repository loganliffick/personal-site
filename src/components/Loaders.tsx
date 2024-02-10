import { Circle, CircleNotch } from 'phosphor-react'

export const Spinner = () => (
  <div className="relative size-5 text-xl">
    <Circle className="absolute left-0 top-0 text-zinc-300" weight="bold" />
    <CircleNotch
      className="absolute left-0 top-0 animate-spin text-zinc-500"
      weight="bold"
    />
  </div>
)

export const ImageLoader = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-[bouncy_0.5s_ease-in-out_infinite_alternate] overflow-hidden rounded-[15px] text-zinc-300"
    >
      <circle
        cx="29"
        cy="13"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-[bouncyLite_0.5s_0.2s_ease-in-out_infinite_alternate]"
      />
      <path
        d="M22 29.7407L26.18 25.5164C27.971 23.7065 30.9748 24.0084 32.3697 26.1385L38.5 35.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-[bouncyLite_0.5s_0.1s_ease-in-out_infinite_alternate]"
      />
      <svg width="73" height="60" viewBox="0 0 73 41" x="-38" y="8">
        <path
          d="M46.5923 3.29435L2.88672 47H83L55.9001 4.32077C53.8413 1.07827 49.3083 0.578395 46.5923 3.29435Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="white"
          className="animate-[bouncyLite_0.5s_0s_ease-in-out_infinite_alternate]"
        />
      </svg>
      <path
        d="M21 1C37 1 41 5 41 21C41 37 37 41 21 41C5 41 1 37 1 21C1 5 5 1 21 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const WarpHole = (props: { children?: React.ReactNode }) => (
  <div className="">Text</div>
)
