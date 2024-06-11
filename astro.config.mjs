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
					label: '考古',
					collapsed: true,
					items: [
						{
							label: '專題',
							collapsed: true,
							items: [
								{ label: '1982-1985年香港考古調查', link: '/archaeology/1982-1985-hong-kong-archaeological-survey' },
								{ label: '文物展覽', link: '/archaeology/artifact-exhibition' },
							],
						},
						{
							label: '香港島',
							collapsed: true,
							items: [
								{ label: '黃竹坑', link: '/archaeology/wong-chuk-hang' },
							],
						},
						{
							label: '九龍半島',
							collapsed: true,
							items: [
								{ label: '李鄭屋漢墓', link: '/archaeology/lei-cheng-uk-han-tomb' },
							],
						},
						{
							label: '新界',
							collapsed: true,
							items: [
								{ label: '龍鼓灘遺址', link: '/archaeology/lung-kwu-tan' },
							],
						},
						{
							label: '離島',
							collapsed: true,
							items: [
								{ label: '南丫島大灣', link: '/archaeology/tai-wan-lamma-island' },
							],
						},
					],
				},
				{
					label: '教育',
					collapsed: true,
					items: [
						{
							label: '專上教育',
							collapsed: true,
							items: [
								{ label: '香港大學', link: '/higher-education/university-of-hong-kong' },
								{ label: '香港中文大學', link: '/higher-education/chinese-university-of-hong-kong' },
								{ label: '香港理工大學', link: '/higher-education/hong-kong-polytechnic-university' },
							],
						},
					],
				},				
				{
					label: '圖書館',
					collapsed: true,
					items: [
						{
							label: '公共圖書館',
							collapsed: true,
							items: [
								{ label: '大會堂圖書館', link: '/library/city-hall-public-library' },
							],
						},
						{
							label: '大學圖書館',
							collapsed: true,
							items: [
								{ label: '香港大學馮平山圖書館', link: '/library/fung-ping-shan-library-university-of-hong-kong' },
							],
						},
						{
							label: '私人圖書館',
							collapsed: true,
							items: [
								{ label: '學海書樓', link: '/library/hok-hoi-library' },
								{ label: '孟氏圖書館', link: '/library/man-chi-library' },
								{ label: '中山圖書館', link: '/library/sun-yat-sen-library' },
							],
						},
					],
				},
				{
					label: '自然環境',
					collapsed: true,
					items: [
						{ label: '氣象', link: '/meteorology/overview' },
						{
							label: '熱帶氣旋',
							collapsed: true,
							items: [
								{ label: '風球信號', link: '/meteorology/tropical-cyclone/signal' },
								{ label: '1900年代', link: '/meteorology/tropical-cyclone/1900s' },
								{ label: '1910年代', link: '/meteorology/tropical-cyclone/1910s' },
								{ label: '1920年代', link: '/meteorology/tropical-cyclone/1920s' },
								{ label: '1930年代', link: '/meteorology/tropical-cyclone/1930s' },
								{ label: '1940年代', link: '/meteorology/tropical-cyclone/1940s' },
								{ label: '1950年代', link: '/meteorology/tropical-cyclone/1950s' },
								{ label: '1960年代', link: '/meteorology/tropical-cyclone/1960s' },
								{ label: '1970年代', link: '/meteorology/tropical-cyclone/1970s' },
								{ label: '1980年代', link: '/meteorology/tropical-cyclone/1980s' },
								{ label: '1990年代', link: '/meteorology/tropical-cyclone/1990s' },
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