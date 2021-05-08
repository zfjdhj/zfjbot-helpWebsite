export const data = {
  "key": "v-10ace460",
  "path": "/guide/fast_config.html",
  "title": "快速配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/fast_config.md",
  "git": {
    "updatedTime": 1619253532000,
    "contributors": [
      {
        "name": "Administrator",
        "email": "320336328@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
