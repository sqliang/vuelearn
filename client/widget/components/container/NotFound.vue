<template lang="html">
    <div class="NotFound">
        <div class="wrap">
            <h1>哎呀,您走远了 !</h1>
            <p><a href="javascript:;" @click="goHome">请重回主页</a></p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            goHome(){
                this.$router.replace({path: '/home'});
            }
        }
    }
</script>