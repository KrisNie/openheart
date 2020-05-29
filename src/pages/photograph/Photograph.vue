<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div class="fav_list">
                <div v-for="(img,index) in imgs" :key="index">
                    <img :data-current="img.url" :id='index' :height='imgHeight' class="lazy-img-fadein"
                         v-lazy="img.url">
                </div>
            </div>
            <el-backtop target=".el-main"></el-backtop>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from '../../components/MyHeader'
    import Footer from '../../components/MyFooter'
    import utility from '../../config/utility';

    export default {
        name: 'photograph',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                imgs: [],
                screenWidth: 0,
                imgHeight: '',
            }
        },
        created() {
            this.computedWidth();
            this.$Lazyload.$on('loaded', this.handler)
        },
        computed: {},
        mounted() {
            this.$http.get('../../../static/json/photographs.json').then(response => {
                let json = response.data;
                json.imgs.map(function (item) {
                    item.url = '../../../static/photograph/' + item.url;
                });
                this.imgs = json.imgs;
            });
            window.onresize = () => {
                this.computedWidth();
            };
            // this.width = window.innerWidth / 8;
        },
        methods: {
            computedWidth: function () {
                let ua = navigator.userAgent,
                    isWindowsPhone = /(?:Windows Phone)/.test(ua),
                    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
                    isAndroid = /(?:Android)/.test(ua),
                    isFireFox = /(?:Firefox)/.test(ua),
                    isChromie = /(?:Chrome|CriOS)/.test(ua),
                    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
                    isIPhone = /(?:iPhone)/.test(ua) && !isTablet,
                    isPc = !isIPhone && !isAndroid && !isSymbian && !isTablet && !isWindowsPhone;

                if (isAndroid || isIPhone) {
                    this.screenWidth = 80;
                    this.imgHeight = '110px';
                } else if (isTablet) {
                    this.screenWidth = 150;
                    this.imgHeight = '200px';
                } else if (isPc) {
                    this.screenWidth = 240;
                    this.imgHeight = '200px';
                }
                // console.log(this.screenWidth);
            },
            handler(listener, fromCache) {
                // console.log(listener.el.id);
                let width = listener.el.naturalWidth,
                    height = listener.el.naturalHeight;
                let flexGrow = Math.round(width * 100 / height),
                    flexBasis = Math.round(width * this.screenWidth / height);
                listener.el.parentElement.setAttribute(
                    'style',
                    'flex-grow:' + flexGrow + ';flex-basis:' + flexBasis + 'px;height:100% !important'
                );
                listener.el.setAttribute(
                    'style',
                    'height:100% !important;width:100%'
                );
                this.computedWidth();
            },
        },
        destroyed: function () {
            // console.log('我已经离开了！');
        },
    }
</script>

<style lang='scss' scoped>
    @import "../../style/public";
    @import "../../style/photograph";
</style>
