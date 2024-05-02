import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs')

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
    pages,
    param: 'slug',
    getImageOptions: (_path, page: (typeof pages)[number]) => {
        return {
            title: page.data.title,
            description: page.data.description,
            // Specify the path to your background image.
            backgroundImage: '/assets/banner.png',
            // Add a semi-transparent background color on top of the image.
            // The color is specified in RGB format, and the alpha channel (opacity) is set to 0.4.
            backgroundColor: [24, 24, 27, 0.4],
            bgGradient: [[24, 24, 27]],
            border: { color: [63, 63, 70], width: 20 },
            padding: 120,
        }
    },
})