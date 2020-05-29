<template>
    <!--<div class="home_container">-->
    <!--<HelloWorld father-component="home"></HelloWorld>-->
    <!--<label>this is homepage</label>-->
    <!--<Footer></Footer>-->
    <!--</div>-->
    <el-container>
        <el-header>
            <p class='topic'>OpenHeart</p>
            <p class='datetime'>{{date}}</p>
        </el-header>
        <el-main>
            <div class='navigation_list'>
                <router-link to="/article">article</router-link>
                <router-link to="/painting">painting</router-link>
                <router-link to="/photograph">photograph</router-link>
                <router-link to="/about">about</router-link>
                <router-link to="/contact">contact</router-link>
            </div>
            <div class='social'>
                <a href='http://instagram.com/hehe54213' class='ins'></a>
                <a href='https://github.com/Hyominn' class='github'></a>
                <a href='https://twitter.com/hehe54213' class='twitter'></a>
            </div>
        </el-main>
        <el-footer>
            <p>© 2020{{year}} OPENHEART KRIS NIE</p>
            <a>ALL RIGHTS RESERVED</a>
            <a href='http://www.beian.miit.gov.cn/'>鲁ICP备20007116号</a>
        </el-footer>
    </el-container>
</template>

<script>
    import utility from '../../config/utility';

    export default {
        name: 'home',
        data() {
            return {
                date: utility.formatDate(new Date(), 'MM/dd/yyyy') + ' ' + new Date().toLocaleTimeString('en'),
                year: ''
            }
        },
        //mounted是在el挂载到实例上后调用，一般第一个业务逻辑会在这里开启
        mounted: function () {
            let _this = this; //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(function () {
                //设置定时器，每秒执行一次function函数，
                //函数是获取当前时间并给date变量赋值(每秒赋值一次)
                _this.date = utility.formatDate(new Date(), 'MM/dd/yyyy') + ' ' + new Date().toLocaleTimeString('en');  //修改数据date
            }, 1000);

            let year = new Date().getFullYear();
            if (year > 2020) {
                this.year = '-' + year;
            }
        },
        beforeDestroy: function () {
            if (this.timer) {
                clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "../../style/homepage.scss";
</style>
