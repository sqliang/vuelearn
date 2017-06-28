import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './states';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import moduleCounter from './modules/couter';

import createLogger from 'vuex/dist/logger';

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        counter: moduleCounter
    },
    plugins: [createLogger()], // logger会生成状态快照,仅在开发环境下使用
    strict: true // 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误.不要在发布环境下启用严格模式
});

export default store;