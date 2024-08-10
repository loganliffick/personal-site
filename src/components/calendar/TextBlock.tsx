type TextBlockProps = {
  data: any
}

const TextBlock = ({ data }: TextBlockProps) => (
  <li className="mx-2 flex flex-col rounded-[18px] bg-white p-6 pb-7 font-medium">
    <h2 className="mb-2 text-xl font-extrabold text-zinc-800">{data.title}</h2>
    <p className="text-pretty text-zinc-600">{data.body}</p>
  </li>
)

export default TextBlock
