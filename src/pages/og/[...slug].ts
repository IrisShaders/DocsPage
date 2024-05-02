import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: "Iris Shader Docs",
      description: page.data.title,
      backgroundImage: `linear-gradient(rgba(24, 24, 27, 0.4), rgba(24, 24, 27, 0.4)), url('/assets/banner.png')`,
      bgGradient: [[24, 24, 27]],
      border: { color: [76, 108, 178], width: 20 },
      padding: 120,
    }
  },
})
