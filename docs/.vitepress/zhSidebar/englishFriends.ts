import { DefaultTheme } from 'vitepress'

export function sidebarEnglishFrends(): DefaultTheme.SidebarItem[] {
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