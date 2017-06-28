<template>
    <div>
        <div>
            <span>{{ name }}</span>
            <button type="button" @click="updateName">修改名字</button>
        </div>
        <p>{{ title }}</p>
        <p>{{ count }}</p>
        <div>
            <button type="button" @click="add">
                同步加法器
            </button>
            <button type="button" @click="addAsync">
                异步加法器
            </button>
        </div>
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
import { mapState,mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
            title: 'Hello, this is counter:',
            localCount: 0
        }
    },
    methods: {
            ...mapActions({
                updateName: 'updateName'
            }),
            ...mapActions('counter',{
                add: 'increment',
                addAsync: 'incrementAsync'
            })
    },
    computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            name: state => state.name,
            count: state => state.counter.count,
            doneTodos: state => {
                return state.counter.todos.filter(todo => todo.done);
            }
        }),
        ...mapGetters('counter',{
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