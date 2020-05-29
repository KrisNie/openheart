<template>
    <div>
        <p class='article_title'>{{title}}</p>
        <el-divider content-position="right">Author: Kris Nie</el-divider>
        <div v-html='rawHtml' class='raw_html'>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        data() {
            return {
                rawHtml: '',
                title: ''
            }
        },
        computed: {
            link: function () {
                return this.$route;
            }
        },
        mounted() {
            let name = this.link.query.name;
            this.title = name;
            console.log(name);
            let url = '../../../static/html/' + name + '.html';
            if (url && url.length > 0) {
                // 加载中
                let param = {
                    accept: 'text/html, text/plain'
                };
                this.$http.get(url).then((response) => {
                    // 处理HTML显示
                    this.rawHtml = response.data;
                }).catch(() => {
                    this.rawHtml = '加载失败'
                }).then(() => {
                        document.getElementsByClassName('raw_html')[0].children[3].setAttribute('class', 'has_dropcap')
                    }
                )
            }
        },
    }
</script>

<style lang='scss' scoped>
    @import "../../style/article";
</style>

<style lang='scss'>
    .raw_html > p.has_dropcap:first-letter {
        font-size: 4rem !important;
        line-height: 1em !important;
        letter-spacing: normal !important;
        /*font-family: VFDidot7, helvetica, sans-serif;*/
        font-weight: 400 !important;
        font-style: normal !important;
        text-transform: none !important;
        float: left !important;
        margin-bottom: -.3em !important;
        padding: 0 .05em 0 0 !important;
        color: #e7131a !important;
        clear: both;
    }
</style>
