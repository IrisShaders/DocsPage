import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

export default defineConfig({
	site: 'https://shaders.properties',
	integrations: [
		starlight({
			components: {
				// Relative path to the custom component.
				Head: './src/components/Head.astro',
			},
			title: 'Iris Docs',
			logo: {
				src: '/src/assets/iris.webp',
			},
			customCss: [
				'/src/styles/root.css',
			],
			social: {
				github: 'https://github.com/IrisShaders/DocsPage/',
				discord: 'https://discord.com/invite/jQJnav2jPu',
			},
			editLink: {
				baseUrl: 'https://github.com/IrisShaders/DocsPage/edit/main/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides', collapsed: true},
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference', collapsed: true},
				},
				{
					label: 'How To',
					autogenerate: { directory: 'how_to', collapsed: true},
				},
				{
					label: 'Current',
					autogenerate: { directory: 'current' },
				},
			],
			plugins: [starlightImageZoom()]
		}),
	],
});
