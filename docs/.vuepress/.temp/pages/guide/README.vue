<template><h1 id="快速引导"><a class="header-anchor" href="#快速引导">#</a> 快速引导</h1>
<p><a @click="docsearch()"
    >
我想要……
</a></p>
<p><RouterLink to="/guide/purchase.html">知道怎么租用一个机器人</RouterLink></p>
<p><RouterLink to="/zfjbot/">了解各个功能如何使用</RouterLink></p>
<p><RouterLink to="/guide/faq.html">解决遇到的一些问题</RouterLink></p>
<p><RouterLink to="/guide/plan.html">看看相关的文档</RouterLink></p>
<p><RouterLink to="/guide/contact.html">联系维护组</RouterLink></p>
</template>

<script
    >
export default {
    methods: {
        docsearch(){
            var btn = document.getElementsByClassName('DocSearch DocSearch-Button')[0];
            btn.click();
        },
    }
}
</script>
