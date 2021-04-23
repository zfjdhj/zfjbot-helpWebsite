import { defineClientAppEnhance } from '@vuepress/client'
import zfjbot_plugin from './components/zfjbot_plugin'


export default defineClientAppEnhance(({ app, router, siteData }) => {
    console.log("注册插件")
    app.component("zfjbot_plugin", zfjbot_plugin)
})