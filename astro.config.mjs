import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

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
					label: '',
					autogenerate: { directory: 'current', collapsed: true },
				},
				{
					label: 'Aperture',
					autogenerate: { directory: 'aperture', collapsed: true },
					badge: "Beta",
				},
			],
			plugins: [
				starlightImageZoom(),
				starlightUtils({
					multiSidebar: {
						switcherStyle: "horizontalList",
					},
				}),
			]
		}),
	],
});
