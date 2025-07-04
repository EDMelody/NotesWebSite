/*
 * @Author: 
 * @Date: 2025-04-25 16:43:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-04 14:34:47
 * @FilePath: \vuepress-vite\docs\.vitepress\zhSidebar\work.ts
 * @Description: 
 * 
 */
import { DefaultTheme } from 'vitepress'

export function sidebarWork(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '七月',
            items: [
                {
                    text: '07-04',
                    link: '/zh/work/2025/July/0704.md'
                }
            ]
        },
        {
            text: '四月',
            items: [
                {
                    text: '04-25',
                    link: '/zh/work/2025/April/0425.md'
                }
            ]
        }
    ]
}