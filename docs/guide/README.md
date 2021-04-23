# 快速引导

<a @click="docsearch()"
    >
    我想要……
</a>

[知道怎么租用一个机器人](./purchase.md)

[了解各个功能如何使用](../zfjbot/)

[解决遇到的一些问题](./faq.md)

[看看相关的文档](./plan.md)

[联系维护组](./contact.md)

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
