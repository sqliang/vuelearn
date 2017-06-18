<template lang="html">
    <div class="about" v-loading="loading2" element-loading-text="加载中">
        <div v-if="shows">
            <h2>sqliang</h2>
            <p>一个尝试组装vue和yog2,继续改装yog2的newer</p>
            <p>
                <a href="">GitHub</a>
                <a href="">掘金</a>
                <a href="">简书</a>
            </p>
            <h2>关于</h2>
            <p>原作者的项目服务端采用 express + mongoDB 搭建, 客户端采用Vue2全家桶.本网站客户端采用vue2全家桶,服务器端采用yog2和接口网站,没有数据库</p>
            <p>主要功能包括: 后台登录, 注册, 管理, 标签, 文章, 支持markdown语法编辑, 支持代码高亮</p>
            <p>主要技术栈: yog2, vue2, vue2-router, vuex, axios, es6, element ui</p>
            <p>其实我一直觉得iview比elment ui好点</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                shows: false,
                loading2: true
            }
        },
        mounted() {
            //this.$store.dispatch('changeHeadLine','关于');
            setTimeout(()=>{
                //this.$store.dispatch('showProgress', 100)
                this.shows = true;
                this.loading2 = false
            },300)
        }
    }
</script>
<style lang="css" scoped>
    .about{
        margin:auto;
    }

    .about a {
        color:#4078c0;
        display:inline-block;
        padding: 0.2rem 0.4rem;
        font-size: 1.6rem;
    }
    .about a:first-child{
        padding-left: 0;
    }
    .about p{
        font-size: 1.6rem;
        line-height: 1.6em;
    }

    .about a ,.about p,.about h2{
        margin: 1rem auto;
    }
    .about h2{
        font-weight: 400;
        font-size: 3rem;
        align-self: center;
        margin-top: 2rem;
    }
    @media screen and (max-width:480px){
        .about a,.about p{
            font-size: 1.4rem;
        }
        .about h2{
            margin-top: auto;
            font-size: 2.2rem;
        }
    }
</style>