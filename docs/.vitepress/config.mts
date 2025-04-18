import { DefaultTheme, defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'
import { shared } from './shared'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh }, // root配置了才可以语言切换，这边 root 是默认
    en: { label: 'English', ...en },
  },
})

