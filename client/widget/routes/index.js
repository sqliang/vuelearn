import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

import routes from './routes';

// 滚动条滚回顶部
const scrollBehavior =(to, from, savedPosition)=> {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
};

const router = new VueRouter({
    mode:'history',
    scrollBehavior,
    routes
});

//路由钩子
router.beforeEach(({meta, path}, from, next) => {
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
});

export  default router;