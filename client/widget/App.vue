<template>
    <div id="app" v-cloak>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        components: {

        },
        method: {

        },
        computed: mapState(['progress']),
        mounted(){

        }
    };
</script>

<style lang="scss">
    #app{
        height: 100%;
    }
</style>
