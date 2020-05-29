<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <!--<label>be happy</label>-->
            <div v-html='rawHtml' class='raw_html'></div>
            <div class='it'>
                <div class="wink-tougue icon" @click="it"><i></i></div>
            </div>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from '../../components/MyHeader';
    import Footer from '../../components/MyFooter';

    export default {
        name: 'about',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                rawHtml: '',
            }
        },
        mounted() {
            let url = '../../../static/html/about.html';
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
                })
            }
        },
        methods: {
            it: function () {
                const h = this.$createElement;
                // h('i', {style: 'color: teal'}),
                this.$notify({
                    title: 'ABOUT',
                    dangerouslyUseHTMLString: true,
                    message:
                        '</br>'+
                        '<p>本站使用阿里云ECS、.icu域名、SSL证书，以及NGINX服务器；</P>' +
                        '</br>'+
                        '<p>应用vue、element-ui、vue-lazyload等前端框架及插件搭建；<p>' +
                        '</br>'+
                        '<p>工信部备案鲁ICP备20007116号；<p>' +
                        '</br>'+
                        '<p>Create by Kris Nie。<p>',
                    duration: 5500,
                    offset: 100
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "../../style/public";
    @import "../../style/about";
</style>
