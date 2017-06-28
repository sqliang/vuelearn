export default {
    namespaced: true,
    state: {
        count: 3,
        todos: [
            {
                id: 1,
                title: '要写代码',
                done: true
            },
            {
                id: 2,
                title: '要做饭',
                done: false
            },
            {
                id: 3,
                title: '要呵呵',
                done: true
            },
            {
                id: 4,
                title: 'heiheihahaha',
                done: false
            }
        ],
        message: 'nihao'
    },
    getters: {
        doneTodos(state, getters, rootState, rootGetters) {
            return state.todos.filter(todo => todo.done);
        },
        notDoneTodos(state, getters,rootState,rootGetters) {
            return state.todos.filter(todo => !todo.done);
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        updateMessage(state, message) {
            state.message = message;
        }
    },
    actions: {
        increment(context) {
            context.dispatch('updateName', null, {root: true});
            context.commit('increment');
        },
        incrementAsync({commit}) {
            setTimeout(() => {
                commit('increment');
                commit('updateName', null, {root: true});
            }, 500);
        }
    }
}