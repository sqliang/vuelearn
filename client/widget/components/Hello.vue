<template>
    <div id="hello-title">
        <p>{{ hello }}</p>
        <p>{{ count }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                hello: 'hekklo vue.js'
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
    }
</script>
<style lang="scss">
    #hello-title {
        font-size: 24px;
    }
</style>