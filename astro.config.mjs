import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";

export default defineConfig({
	site: 'https://notehere.github.io',
	base: '/',
	integrations: [
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		starlight({
		title: '右吉',
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
							label: '圖錄',
							collapsed: true,
							items: [
								{ label: '甲骨文', link: '/index/catalogue/oracle-bone' },
							],
						},
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
					label: '指南',
					collapsed: true,
					items: [
						{
							label: 'ArcGIS Pro',
							collapsed: true,
							items: [
								{ label: '簡介', link: '/note/arcgispro/brief-introduction' },
								{ label: '安裝軟件', link: '/note/arcgispro/installation' },
								{ label: '創建地圖項目', link: '/note/arcgispro/create-project' },
								{ label: '配準歷史衛星圖像', link: '/note/arcgispro/georeferencing-satellite-imagery' },
							],
						},
						{
							label: 'EndNote',
							collapsed: true,
							items: [
								{ label: '簡介', link: '/note/endnote/brief-introduction' },
								{ label: '導入文獻', link: '/note/endnote/import-reference' },
								{ label: '批量編輯', link: '/note/endnote/batch-edit' },
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