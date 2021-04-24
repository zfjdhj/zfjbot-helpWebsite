export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "快速引导",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/README.md",
  "git": {
    "updatedTime": 1619165657000,
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
