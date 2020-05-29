import Vue from 'vue'
import Router from 'vue-router'

//router 懒加载
// const Home = () => import('../pages/home/Home');
// const Article = () => import( '../pages/articles/Articles');
// const Photograph = () => import( '../pages/photograph/Photograph');
// const About = () => import( '../pages/about/About');
// const Contact = () => import( '../pages/contact/Contact');
// const Painting = () => import( '../pages/painting/Painting');
function loadView(view) {
    let fatherView = view.replace(view[0],view[0].toLowerCase());
    return () => import(/* webpackChunkName: "view-[request]" */ `@/pages/${fatherView}/${view}.vue`)
}

// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router);

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: loadView('Home')
    },
    {
        path: '/article',
        name: 'Article',
        component: loadView('Articles')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: loadView('Contact')
    },
    {
        path: '/about',
        name: 'About',
        component: loadView('About')
    },
    {
        path: '/photograph',
        name: 'Photograph',
        component: loadView('Photograph')
    },
    {
        path: '/painting',
        name: 'Painting',
        component: loadView('Painting')
    }
];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new Router({
    routes, // (缩写) 相当于 routes: routes
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})





