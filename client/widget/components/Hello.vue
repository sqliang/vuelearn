<template>
    <div id="hello-title">
        <p>{{hello}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                hello: 'hello vue.js'
            }
        }
    }
</script>
<style lang="scss">
    #hello-title {
        font-size: 24px;
    }
</style>