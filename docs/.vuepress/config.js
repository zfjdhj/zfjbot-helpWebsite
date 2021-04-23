const path = require("path")
const base_dir = "/"
module.exports = {

    base: base_dir,
    dest: "${sourceDir}/../public/yobot/help" + base_dir,
    lang: 'zh-CN',
    title: '猫猫',
    description: 'PCR公主连结会战机器人',
    head: [
        ["link", { rel: "icon", href: "/images/logo.png" }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ["meta", { name: "theme-color", content: "#ea5252" }]
    ],
    // 各页面配置theme
    themeConfig: {
        logo: "/images/logo.png",
        repo: "zfjdhj/momobot",
        docsDir: "docs",
        docsBranch: "master",
        docsDirVersioned: "archive",
        docsDirPages: "pages",
        editLinks: true,
        smoothScroll: true,
        navbar: [
            { text: "主页", link: "/" },
            { text: "使用指南", link: "/guide/" },
            { text: "猫猫插件", link: "/zfjbot/" },
            { text: "momo插件", link: "/momobot/" },
            { text: "更新日志", link: "/changelog.html" }
        ],
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdatedText: "上次更新",
                lastUpdated: true,
                sidebar: {
                    "/guide/": [
                        {
                            text: "新人指引",
                            isGroup: true,
                            children: [
                                {
                                    text: '获取授权',
                                    link: '/guide/purchase.md',
                                }, {
                                    text: '版本对比',
                                    link: '/guide/plan.md',
                                }]
                        },
                        {
                            text: "操作手册",
                            isGroup: true,
                            children: [
                                {
                                    text: '公会战操作流程',
                                    link: '/guide/yobot_clanbattle.md',
                                }, {
                                    text: '公会战网页后台',
                                    link: '/guide/yobot_web.md',
                                }, {
                                    text: '常见问题',
                                    link: '/guide/faq.md',
                                }, {
                                    text: '联系维护',
                                    link: '/guide/contact.md',
                                }
                            ]
                        },
                    ],
                    "/zfjbot/": [{
                        isGroup: true,
                        children: [
                            '/zfjbot/README.md',
                            "/zfjbot/plugins_type_1.md",
                            "/zfjbot/plugins_type_2.md",
                            "/zfjbot/plugins_type_3.md",
                            "/zfjbot/plugins_type_4.md",
                            "/zfjbot/plugins_type_5.md"
                        ]
                    }
                    ],
                    "/changelog": [{
                        isGroup: true,
                        children: ['/changelog.md']
                    }
                    ]
                }
            },
        },
    },
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
        [
            '@vuepress/plugin-pwa',
            {
                skipWaiting: false,
            },
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    },
                    '/zh/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    },
                },
            },
        ],

        [
            "container",
            {
                type: "vue",
                before: '<pre class="vue-container"><code>',
                after: "</code></pre>"
            }
        ],

        [
            '@vuepress/plugin-docsearch',
            {
                apiKey: '4103c8a369f909a34e240853addc255c',
                indexName: "zfjbot",
                appId: "FMZXZ53F2G"
            },
        ],

    ]
};
