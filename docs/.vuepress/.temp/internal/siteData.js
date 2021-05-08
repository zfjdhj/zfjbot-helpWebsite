export const siteData = {
  "base": "/zfjbot/help/",
  "lang": "zh-CN",
  "title": "猫猫",
  "description": "PCR公主连结会战机器人",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/zfjbot/help//images/logo.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#ea5252"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
