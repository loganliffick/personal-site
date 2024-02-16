const TextBlock = (props: { data: any }) => {
  return (
    <li className="mx-2 flex flex-col rounded-[18px] bg-white p-6 pb-7 font-medium">
      <h2 className="mb-2 text-xl font-extrabold text-zinc-800">
        {props.data.title}
      </h2>
      <p className="text-pretty text-zinc-600">{props.data.body}</p>
    </li>
  )
}

export default TextBlock
