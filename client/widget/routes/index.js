import Vue from 'vue/dist/vue';
import Router from 'vue-router/dist/vue-router';
//import store from '../store/index';

import Hello from '../components/Hello.vue';
import Reg from '../components/container/Reg.vue';
import Login from '../components/container/Logi.vue'



Vue.use(Router);

//import routes from './routes';

// 滚动条滚回顶部
/*const scrollBehavior =(to, from, savedPosition)=> {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
};*/

const router = new Router({
    mod: 'history',
    history: true,
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/login',
            component: Login
        }
    ]

});
export  default router;

//路由钩子
/*router.beforeEach(({meta, path}, from, next) => {
    store.dispatch('showProgress',0);
    let {auth=true}=meta;
    let isLogin = Boolean(store.state.token);
    
    if (auth && !isLogin && path !== '/login') {
        return next({path: '/login'});
    }
    if(isLogin && (path == '/login' || path == '/reg')) {
        return next({path: '/admin'});
    }
    next();
});*/
