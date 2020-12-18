import { createApp } from 'vue'
import App from './App.vue'
import less from 'less'
import  {Search,Button, Collapse, CollapseItem,Cell,CellGroup,NavBar,NoticeBar,Sticky,Divider,Tag } from "vant"
import 'vant/lib/index.css';

createApp(App)
    .use(Collapse).use(CollapseItem).use(Button).use(Search).use(Cell).use(Tag)
    .use(CellGroup).use(NavBar).use(NoticeBar).use(Sticky).use(Divider)
    .use(less)
    .mount('#app')
