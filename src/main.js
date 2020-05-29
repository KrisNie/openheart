import Vue from 'vue'
import App from './App'
import router from './router/router'
import an from 'axios'
import ELEMENT from 'element-ui';
import VueLazyload from 'vue-lazyload'
// import locale from 'element-ui/lib/locale/lang/en';//国际化
import '../theme/index.css';

// import {Container, Header, Main, Footer, Pagination} from 'element-ui';
//main.js

Vue.use(VueLazyload,{
    preLoad: 1.1,
    adapter: {
        loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
            // console.log('loaded')
            // do something here
            // example for call LoadedHandler
            // LoadedHandler(el)
        },
        loading (listender, Init) {
            // console.log('loading')
        },
        error (listender, Init) {
            // console.log('error')
        }
    }
});
Vue.use(ELEMENT);
// Vue.use(Header);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Pagination);
// Vue.use(Container);

Vue.prototype.$http = an;
Vue.config.productionTip = false;

Vue.prototype.back = function () {
    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let path = this.$route.fullPath;
    // if (scrollTop) {
    // window.scroll({top: 0, left: 0, behavior: 'smooth'});
    // } else
    if (path.slice(1).indexOf('/') === -1 && path.slice(1).indexOf('?') === -1) {
        this.$router.push('/')
    } else if (window.history.length > 1) {
        this.$router.back()
    }
};

Vue.prototype.scrollTop = function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }
};

Vue.config.devtools = true;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
