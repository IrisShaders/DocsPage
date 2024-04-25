import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Iris Docs',
			logo: {
				src: './src/assets/iris.webp',
			},
			customCss: [
				'./src/styles/root.css',
			],
			social: {
				github: 'https://github.com/IrisShaders/ShaderDoc/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference', collapsed: true},
				},
			],
		}),
	],
});
