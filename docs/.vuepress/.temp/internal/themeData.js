export const themeData = {
  "logo": "/images/logo.png",
  "repo": "zfjdhj/momobot",
  "docsDir": "docs",
  "docsBranch": "master",
  "docsDirVersioned": "archive",
  "docsDirPages": "pages",
  "editLinks": true,
  "smoothScroll": true,
  "navbar": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "使用指南",
      "link": "/guide/"
    },
    {
      "text": "猫猫插件",
      "link": "/zfjbot/"
    },
    {
      "text": "momo插件",
      "link": "/momobot/"
    },
    {
      "text": "更新日志",
      "link": "/changelog.html"
    }
  ],
  "locales": {
    "/": {
      "label": "简体中文",
      "selectText": "Languages",
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "lastUpdated": true,
      "sidebar": {
        "/guide/": [
          {
            "text": "新人指引",
            "isGroup": true,
            "children": [
              {
                "text": "获取授权",
                "link": "/guide/purchase.md"
              },
              {
                "text": "版本对比",
                "link": "/guide/plan.md"
              },
              {
                "text": "快速配置",
                "link": "/guide/fast_config.md"
              }
            ]
          },
          {
            "text": "操作手册",
            "isGroup": true,
            "children": [
              {
                "text": "公会战操作流程",
                "link": "/guide/yobot_clanbattle.md"
              },
              {
                "text": "公会战网页后台",
                "link": "/guide/yobot_web.md"
              },
              {
                "text": "常见问题",
                "link": "/guide/faq.md"
              },
              {
                "text": "联系维护",
                "link": "/guide/contact.md"
              }
            ]
          }
        ],
        "/zfjbot/": [
          {
            "isGroup": true,
            "children": [
              "/zfjbot/README.md",
              "/zfjbot/plugins_type_1.md",
              "/zfjbot/plugins_type_2.md",
              "/zfjbot/plugins_type_3.md",
              "/zfjbot/plugins_type_4.md",
              "/zfjbot/plugins_type_5.md"
            ]
          }
        ],
        "/changelog": [
          {
            "isGroup": true,
            "children": [
              "/changelog.md"
            ]
          }
        ]
      },
      "selectLanguageName": "English",
      "danger": "WARNING"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
