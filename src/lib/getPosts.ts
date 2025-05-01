import fs from 'fs'
import path from 'path'

export type PostMeta = {
  date: string
  description: string
  slug: string
  title: string
}

export const getPosts = async (): Promise<PostMeta[]> => {
  const blogPosts = await loadMetaFrom()

  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

const loadMetaFrom = async (): Promise<PostMeta[]> => {
  const basePath = path.join(process.cwd(), 'src/app/blog')
  if (!fs.existsSync(basePath)) return []

  const folders = fs.readdirSync(basePath).filter((f) => {
    try {
      return fs.statSync(path.join(basePath, f)).isDirectory()
    } catch {
      return false
    }
  })

  return folders
    .map((slug) => {
      const metaPath = path.join(basePath, slug, 'metadata.json')
      if (!fs.existsSync(metaPath)) return null

      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

        if (!meta.title || !meta.date) return null

        return {
          date: meta.date,
          description: meta.description ?? '',
          slug,
          title: meta.title,
        }
      } catch {
        return null
      }
    })
    .filter(Boolean) as PostMeta[]
}
