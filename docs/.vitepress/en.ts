import { DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
    lang: 'en',
    title: 'melody',
    description: "",
    lastUpdated: true,
    themeConfig: {
      outline: {
        label: 'page nav'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: nav(),
  
      sidebar: {
        // '/programming/vue/': sidebarVue(),
      },
  
      docFooter: {
        // prev: '上一篇',
        // next: '下一篇'
      },
      
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },
  
    //   lastUpdated: {
    //     text: '最后更新于',
    //   },
      // langMenuLabel: '多语言',
      // returnToTopLabel: '回到顶部',
      // sidebarMenuLabel: '菜单',
      // darkModeSwitchLabel: '主题',
      // lightModeSwitchTitle: '切换到浅色模式',
      // darkModeSwitchTitle: '切换到深色模式'
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
})

// 顶部导航栏
function nav(): DefaultTheme.NavItem[] {
    return [
      { text: 'home', link: '/en/index' },
      { text: 'programming', link: '' }
    ]
  }
  

//   function sidebarVue(): DefaultTheme.SidebarItem[] {
//     return [
//       {
//         text: 'Vue3',
//         collapsed: false,
//         items: [
//           {
//             text: '安装使用',
//             link: '/programming/vue/downloadUse'
//           }
//         ]
//       }
//     ]
//   }
  
