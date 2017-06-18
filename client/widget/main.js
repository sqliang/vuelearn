import Vue from 'vue/dist/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../static/css/commen.css';// 可以覆盖index.css的样式

Vue.use(ElementUI);

import router from './routes/index';
//import store from './store/index';

import App from './App.vue';

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    created: function () {
        console.log('created');
    },
    mounted: function(){
        console.log('mounted');
    },
    updated: function () {
        console.log('updated');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});

