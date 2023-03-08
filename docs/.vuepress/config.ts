import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/nuxtjs-docs/',
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
                link: '/start/introduction.md',
                activeMatch: '/'
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
                        '/start/installation.md',
                        '/start/configuration.md',
                        '/start/views.md',
                        '/start/assets.md',
                        '/start/routing.md',
                        '/start/seo-and-meta.md',
                        '/start/transitions.md',
                        '/start/data-fetching.md',
                        '/start/state-management.md',
                        '/start/error-handling.md',
                        '/start/layers.md',
                        '/start/deployment.md',
                        '/start/testing.md',
                    ]
                }
            ]
        }
    })
})