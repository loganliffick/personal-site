const Tooltip = (props: { children?: React.ReactNode }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="group relative size-10 rounded-2xl bg-blue-200">
        <div className="pointer-events-none absolute left-full top-1/2 z-50 -translate-y-1/2 rounded-lg bg-blue-50 px-2 py-1 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
          Tooltip
        </div>
      </div>
    </div>
  )
}

export default Tooltip
