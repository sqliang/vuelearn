export default {
    doneTodos(state) {
        return state.todos.filter(todo => todo.done);
    },
    notDoneTodos(state) {
        return state.todos.filter(todo => !todo.done);
    }
}