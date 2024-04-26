import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://refcite.github.io',
  base: '/',
  integrations: [starlight({
    title: '文獻',
    locales: {
      root: {
        label: '繁體中文',
        lang: 'zh-TW'
      }
    },
    sidebar: [{
      label: '古文字學',
      items: [{
        label: '甲骨文',
        link: '/paleography/oracle-bone'
      }, {
        label: '金文',
        link: '/paleography/bronze-inscription'
      }]
    }]
  }), 
  partytown(), 
  tailwind()]
});