/*
 * @Author: zjy
 * @Date: 2025-01-10 11:10:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-15 14:42:11
 * @FilePath: \vuepress-vite\docs\.vitepress\theme\index.ts
 * @Description: 
 * 
 */
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ElementPlus)
  }
} satisfies Theme
