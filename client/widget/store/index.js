import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './states';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import moduleCounter from './modules/couter';

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        counter: moduleCounter
    }
});

export default store;