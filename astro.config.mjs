import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";

export default defineConfig({
	site: 'https://arcnote.github.io',
	base: '/',
	integrations: [
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		starlight({
		title: '考古×筆記',
		description: '哈囉！考古學',
		head: [
			{
				tag: 'script',
				attrs: {
					type: 'text/partytown',
					src: 'https://www.googletagmanager.com/gtag/js?id=G-DEPPXHZVCM>',
				},
			  },
			  {
				tag: 'script',
				content: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
	  
				gtag('config', 'G-DEPPXHZVCM');
				`,
			  },
			{
				tag: 'script',
				attrs: {
					src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
					async: true,
					'data-ad-client': 'ca-pub-8975507583219124',
				},
			},
		],
		locales: {
			root: {
				label: '繁體中文',
				lang: 'zh-TW'}
			},
			sidebar: [
				{
					label: '索引',
					collapsed: true,
					items: [
						{
							label: '期刊',
							collapsed: true,
							items: [
								
							],
						},
						{
							label: '論文集',
							collapsed: true,
							items: [
								
							],
						},
					],
				},
				{
					label: '備忘',
					collapsed: true,
					items: [
						{
							label: 'ArcGIS Pro',
							collapsed: true,
							items: [
								{ label: '安裝步驟', link: '/note/arcgispro/installation-guide' },
							],
						},
					],
				},
			],
			customCss: ['./src/tailwind.css']
		}),
		tailwind({
			applyBaseStyles: false
		}), 
	],
});