import Vue from 'vue/dist/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';
import '../static/css/commen.css';// 可以覆盖index.css的样式

Vue.use(ElementUI);

import router from './routes/index';
import store from './store/index';


new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App } //此处的components用在了上面的template里面用来编译
});//.$mount('#app');