import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-953546a4",
    path: "/test.html",
    component: Vuepress,
    meta: { title: "更新日志" },
  },
  {
    path: "/test.md",
    redirect: "/test.html",
  },
]
