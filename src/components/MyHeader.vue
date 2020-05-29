<template>
    <div>
        <div class='header'>
            <div v-bind:class='{ "menu icon" : !showMenu, "remove icon": showMenu}' v-on:click='showMenu=!showMenu'>
            </div>
            <div class='header_title'>
                <p class='topic' title='Back To HomePage'>
                    <label v-on:click='toHomePage()'>
                        OPENHEART
                    </label>
                </p>
                <p class='introduce'>wiggle wiggle</p>
            </div>
        </div>

        <transition name="el-fade-in-linear">
            <div class='header_menu' v-show='showMenu'>
                <div class='header_navigation_list' @click='menuClick'>
                    <router-link to="/article">article</router-link>
                    <router-link to="/painting">painting</router-link>
                    <router-link to="/photograph">photograph</router-link>
                    <router-link to="/about">about</router-link>
                    <router-link to="/contact">contact</router-link>
                </div>
                <div class='header_social'>
                    <a href='http://instagram.com/hehe54213' class='ins'></a>
                    <a href='https://github.com/Hyominn' class='github'></a>
                    <a href='https://twitter.com/hehe54213' class='twitter'></a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'my-header',
        data() {
            return {
                showMenu: false,
            }
        },
        computed: {
            link: function () {
                return this.$route;
            }
        },
        methods: {
            toHomePage: function () {
                this.showMenu = false;
                this.back();
            },
            menuClick: function (event) {
                console.log(event);
                if (event.toElement.href === window.location.href) {
                    this.showMenu =false;
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "../style/public";
</style>
