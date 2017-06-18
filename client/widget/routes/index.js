import Vue from 'vue/dist/vue';
import Router from 'vue-router/dist/vue-router';
import store from '../store/index';




Vue.use(Router);

import routes from './routes';

// 滚动条滚回顶部
const scrollBehavior =(to, from, savedPosition)=> {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
};

const router = new Router({
    mod: 'history',
    scrollBehavior,
    routes
});

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

export default router;