<template>
    <el-container>
        <el-header>
            <MyHeader></MyHeader>
        </el-header>
        <el-main>
            <div id='article_list' class='article_list' v-if='!this.link.query.name'>
                <ul>
                    <li v-for="article in articles" v-on:click='toArticle(article.title)'>
                        {{ article.title }}
                    </li>
                </ul>
            </div>
            <div id='article' class='article' v-if='this.link.query.name' v-show='showArticle()'>
                <Article ref='Article'></Article>
            </div>
            <el-backtop target=".el-main"></el-backtop>
        </el-main>
        <el-footer>
            <!--:hide-on-single-page='show'-->
            <el-pagination small layout="prev, pager, next" v-show='isShow'
                           :current-page.sync='currentPage' :page-size='size'
                           :total=total @current-change='handleCurrentChange'></el-pagination>
            <MyFooter></MyFooter>
        </el-footer>
    </el-container>
</template>

<script>
    import Article from './Article';
    import MyHeader from '../../components/MyHeader';
    import MyFooter from '../../components/MyFooter';

    export default {
        name: 'articles',
        components: {
            MyHeader,
            Article,
            MyFooter,
        },
        watch: {},
        ready() {
        },
        // props:['item'],
        data() {
            return {
                list: [],
                articles: [],
                // show: false,
                size: 15,
                currentPage: 1,
                total: 1,
                isShow: true
            }
        },
        mounted() {
            //初始化信息
            this.$http.get('../../../static/json/articles.json').then(response => {
                let json = response.data;
                this.list = json.names;
                this.show = json.show;
                this.size = json.size;
                this.total = this.list.length;

                if (this.list.length > 15) {
                    this.articles = this.list.slice(0, 15);
                    this.isShow = true;
                } else {
                    this.articles = this.list;
                    this.isShow = false;
                }
            });
            if (window.history && window.history.pushState) {
                // history.pushState(null, null, document.URL);
                window.addEventListener('popstate', this.goBack, false);
            }
        },
        computed: {
            link: function () {
                return this.$route;
            }
        },
        methods: {
            toArticle: function (name) {
                console.log('to articles' + name);
                console.log(this.link.query.name);
                this.isShow = false;
                this.$router.push({
                    path: `/article?name=` + name
                })
            },
            showArticle: function () {
                console.log('show articles');
                this.isShow = false;
                return true;
            },
            handleCurrentChange: function () {
                this.articles = this.list.slice((this.currentPage - 1) * this.size);
                console.log(this.currentPage);
            },
            goBack: function () {
                if (this.list.length > 15 && !this.link.query.name) {
                    this.isShow = true;
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "../../style/article";
</style>
