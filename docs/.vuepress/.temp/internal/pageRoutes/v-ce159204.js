import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-ce159204",
    path: "/changelog.html",
    component: Vuepress,
    meta: { title: "更新日志" },
  },
  {
    path: "/changelog.md",
    redirect: "/changelog.html",
  },
]
