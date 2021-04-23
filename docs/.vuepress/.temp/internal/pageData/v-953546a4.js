export const data = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "更新日志",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "20210419",
      "slug": "_20210419",
      "children": []
    }
  ],
  "filePathRelative": "test.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
