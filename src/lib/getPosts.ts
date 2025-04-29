import fs from 'fs'
import path from 'path'

export type PostMeta = {
  date: string
  slug: string
  title: string
  description: string
  type: 'blog' | 'experiment'
}

export const getSortedPosts = async (): Promise<PostMeta[]> => {
  const blogPosts = await loadMetaFrom('blog')
  const expPosts = await loadMetaFrom('experiments')

  const all = [...blogPosts, ...expPosts].filter(Boolean)

  return all.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

const extractMetadata = (
  fileContent: string,
): { title: string; date: string; description: string } | null => {
  const match = fileContent.match(/export const metadata = ({[\s\S]*?})/)
  if (!match) return null

  try {
    return eval(`(${match[1]})`)
  } catch {
    return null
  }
}

const loadMetaFrom = async (
  type: 'blog' | 'experiments',
): Promise<PostMeta[]> => {
  const basePath = path.join(process.cwd(), 'src/app', type)
  if (!fs.existsSync(basePath)) return []

  const folders = fs
    .readdirSync(basePath)
    .filter((f) => fs.statSync(path.join(basePath, f)).isDirectory())

  return folders
    .map((slug) => {
      const filePath = path.join(basePath, slug, 'page.tsx')
      if (!fs.existsSync(filePath)) return null

      const content = fs.readFileSync(filePath, 'utf8')
      const meta = extractMetadata(content)

      if (!meta?.title || !meta?.date) return null

      return {
        slug,
        title: meta.title,
        description: meta.description,
        date: meta.date,
        type,
      }
    })
    .filter(Boolean) as PostMeta[]
}
