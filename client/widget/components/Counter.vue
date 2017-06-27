<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ count }}</p>
        <div class="todos">
            <h4>todos which has done:</h4>
            <ul>
                <li v-for="doneTodo in doneTodos">
                    <span>{{ doneTodo.id }} : {{ doneTodo.title }}</span>
                </li>
            </ul>
        </div>
        <div class="todos">
            <h4>todos which not done.</h4>
            <ul>
                <li v-for="notDone in notDones">
                    <span>{{ notDone.id }} : {{ notDone.title }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState,mapGetters } from 'vuex';
export default {
    data() {
        return {
            title: 'Hello, this is counter:',
            localCount: 0
        }
    },
    computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            count: state => state.count,
            doneTodos: state => {
                return state.todos.filter(todo => todo.done);
            }
        }),
        ...mapGetters({
            notDones: 'notDoneTodos'
        })
    }
}
</script>

<style lang="scss">
    .todos {
        width: 150px;
        margin: 5px auto;
    }
</style>