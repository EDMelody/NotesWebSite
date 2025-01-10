/*
 * @Author: 
 * @Date: 2025-01-10 11:10:38
 * @LastEditors: 
 * @LastEditTime: 2025-01-10 15:38:21
 * @FilePath: \vuepress-vite\docs\.vitepress\zh.ts
 * @Description: 
 * 
 */
import { DefaultTheme, defineConfig } from 'vitepress'

export const zh = defineConfig({
    lang: 'en',
    title: '三鲜馄饨',
    description: "",
    lastUpdated: true,
    themeConfig: {
      outline: {
        label: '页面导航'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: nav(),
  
      sidebar: {
        '/zh/programming/vue/vue2/': sidebarVue2(),
        '/zh/programming/vue/vue3/': sidebarVue3(),
        '/zh/programming/nginx/': sidebarNginx(),
        '/zh/programming/git/': sidebarGit(),
        '/zh/programming/node/': sidebarNode(),
      },
  
      docFooter: {
        prev: '上一卷',
        next: '下一卷'
      },
      
      editLink: {
        pattern: 'https://github.com/EDMelody/NotesWebSite/tree/master/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },
  
      lastUpdated: {
        text: '最后更新于',
        // formatOptions: {
        //   dateStyle: 'short',
        //   timeStyle: 'medium'
        // }
      },
      // langMenuLabel: '多语言',
      // returnToTopLabel: '回到顶部',
      // sidebarMenuLabel: '菜单',
      // darkModeSwitchLabel: '主题',
      // lightModeSwitchTitle: '切换到浅色模式',
      // darkModeSwitchTitle: '切换到深色模式'
      socialLinks: [
        { icon: 'github', link: 'https://github.com/EDMelody/NotesWebSite' }
      ]
    }
})

// 顶部导航栏
function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '首页', link: '/' },
        { text: '编程',
            items: [
                { text: 'vue版本', items: 
                    [
                        { text: 'vue2', link: '/zh/programming/vue/vue2/downloadUse' },
                        { text: 'vue3', link: '/zh/programming/vue/vue3/downloadUse' }
                    ] 
                },
                { text: 'nginx', link: '/zh/programming/nginx/downloadUse' },
                { text: 'git', link: '/zh/programming/git/reference' },
                { text: 'node', link: '/zh/programming/node/downloadUse' },
                { text: 'scoop', link: '/zh/programming/scoop/index' },
            ],
        },
        { text: '数学', link: '/zh/math/index' },
        { text: '文档帮助', link: '/zh/fileTeach/index' }
    ]
}

// vue侧边栏
function sidebarVue2(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Vue2',
            collapsed: false,
            items: [
                {
                    text: '安装使用',
                    link: '/zh/programming/vue/vue2/downloadUse'
                }
            ]
        },
        {
            text: 'Vue2组件封装',
            collapsed: false,
            items: [
                {
                    text: '搜索commonSearch',
                    link: '/zh/programming/vue/vue2/components/elemSearch'
                }
            ]
        },
    ]
}
function sidebarVue3(): DefaultTheme.SidebarItem[] {
  return [
      {
          text: 'Vue3',
          collapsed: false,
          items: [
              {
                  text: '安装使用',
                  link: '/zh/programming/vue/vue3/downloadUse'
              }
          ]
      },
      {
          text: 'Vue3组件封装',
          collapsed: false,
          items: []
      },
      {
          text: 'Vue3问题',
          collapsed: false,
          items: [
              {
                  text: '类型断言',
                  link: '/zh/programming/vue/vue3/question/typeAssertion'
              }
          ]
      },
  ]
}

// nginx侧边栏
function sidebarNginx(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Nginx',
            items: [
                {
                    text: '配置详解',
                    link: '/zh/programming/nginx/downloadUse'
                },
                {
                    text: '命令',
                    link: '/zh/programming/nginx/command'
                },
            ]
        }
    ]
}

// git侧边栏
function sidebarGit(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Git',
            items: [
                {
                    text: '命令',
                    link: '/zh/programming/git/reference'
                },
            ]
        }
    ]
}

// node侧边栏
function sidebarNode(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Node',
            items: [
                {
                    text: '安装',
                    link: '/zh/programming/node/downloadUse'
                }
            ]
        },
        {
            text: 'Node相关问题',
            items: [
                {
                    text: 'cnpm安装报错(node版本14.18.2',
                    link: '/zh/programming/node/question/cnpmInstallError'
                },
            ]
        }
    ]
}