/*
 * @Author: 
 * @Date: 2025-04-25 16:34:02
 * @LastEditors: 
 * @LastEditTime: 2025-10-15 17:33:41
 * @FilePath: \vuepress-vite\docs\.vitepress\zhSidebar\englishFriends.ts
 * @Description: 
 * 
 */
import { DefaultTheme } from 'vitepress'

export function sidebarEnglishFriends(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '第一季',
            items: [
                {
                    text: '片段01',
                    link: '/zh/english/friends/season1/episode01.md'
                },
                // {
                //     text: '片段01',
                //     link: ''
                // },
            ]
        }
    ]
}