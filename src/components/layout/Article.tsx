export const Article = ({ children }: React.PropsWithChildren) => {
  return (
    <article className="blog-article reveal reveal-sm w-full">
      {children}
    </article>
  )
}
