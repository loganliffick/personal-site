const Tag = (props: { year: string }) => {
  return (
    <div className="sticky top-4 mx-auto mt-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-500">
      {props.year}
    </div>
  )
}

export default Tag
