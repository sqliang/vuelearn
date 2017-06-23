<template>
    <div id="hello-title">
        <p>{{hello}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                hello: 'hekklo vue.js'
            }
        }
    }
</script>
<style lang="scss">
    #hello-title {
        font-size: 24px;
    }
</style>