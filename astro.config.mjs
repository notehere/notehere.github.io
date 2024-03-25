import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://refcite.github.io',
	base: '/',
	integrations: [
		starlight({
			title: '文獻',
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
