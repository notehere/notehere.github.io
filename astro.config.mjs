import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://refwork.github.io',
	base: '/',
	integrations: [
		starlight({
			title: '文獻',
			social: {
				github: 'https://github.com/refwork',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
