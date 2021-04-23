import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("W:/github/zfjbot-helpWebsite/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("W:/github/zfjbot-helpWebsite/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
