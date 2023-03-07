import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/vuepress/',
    lang: 'zh-CN',
    title: 'Nuxtjs',
    description: '阅读 Nuxt.js 官方文档',
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }]
    ],
    theme: defaultTheme({
        logo: '/logo.svg',
        // 默认主题配置
        navbar: [
            {
                text: '开始',
                link: '/start/introduction'
            },
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: 'API',
                link: '/api/'
            },
        ],
        sidebar: {
            '/start/': [
                {
                    text: '',
                    children: [
                        '/start/introduction.md',
                        '/start/installation.md'
                    ]
                }
            ]
        }
    })
})