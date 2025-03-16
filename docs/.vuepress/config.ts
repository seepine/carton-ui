import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import vueDefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'
import { codeBlockPlugin } from './plugins'

export default defineUserConfig({
  base: '/',

  pagePatterns: [
    '**/*.md',
    '!.vuepress',
    '!node_modules',
    '../packages/carton-ui/src/**/*.md',
    '!../packages/**/node_modules',
  ],

  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'CartonUi',
      description: '一个基于 Vue3 和 TDesign 的组件库',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'CartonUi',
    //   description: '一个基于 Vue3 和 TDesign 的组件库',
    // },
  },

  bundler: viteBundler({
    viteOptions: {
      // @ts-ignore
      plugins: [vueDefineOptions(), vueJsx()],
    },
    vuePluginOptions: {},
  }),

  theme: defaultTheme({
    logo: '/logo.png',

    repo: 'https://github.com/seepine/carton-ui',

    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        sidebarDepth: 1,
        // selectLanguageName: '简体中文',
        // selectLanguageText: '选择语言',
        // selectLanguageAriaLabel: '选择语言',
      },
      // '/en/': {
      //   navbar: navbar.en,
      //   sidebar: sidebar.en,
      //   sidebarDepth: 1,
      //   selectLanguageName: 'English',
      //   selectLanguageText: 'Choose Language',
      //   selectLanguageAriaLabel: 'Choose Language',
      // },
    },
  }),

  plugins: [
    // @seepine/vuepress-plugins
    codeBlockPlugin(),
  ],
})
