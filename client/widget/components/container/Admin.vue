<template lang="html">
    <el-row class="panel">
        <el-row class="top">
            <el-col :span="23" class="panel-top" :push="1">

                <el-col :span="20" style="font-size: 26px;">
                    <span>AD<i style="color: #20a0ff;">MIN</i></span>
                </el-col>
                <el-col class="rightbar" :span="4">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;font-weight: 700">
                            更多操作<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="toHome">博客首页</el-dropdown-item>
                            <el-dropdown-item divided @click.native="con">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-col>
        </el-row>
        <!-- header nav end -->
        <el-row class="panel-center">
            <!--left nav-->
            <el-col :span="5">
                <el-menu theme="dark" router :default-active="currentPath">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''">
                            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :index="item.path+'/'+child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
            <!--left nav end-->
            <!--面包屑nav-->
            <el-col class="panel-c-c" :span="19">
                <el-row>
                    <el-col :span="24" class="breadcrumb">
                        <el-breadcrumb separator="/" style="float: right">
                            <el-breadcrumb-item :to="{path:'/admin/articleList'}">{{currentPathNameParent}}</el-breadcrumb-item>
                            <el-breadcrumb-item>{{currentPathName}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                </el-row>
                <router-view></router-view>
            </el-col>
        </el-row>
    </el-row>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                currentPath: '/admin/articleList',
                currentPathNameParent: '文章管理',
                currentPathName: '文章列表'
            };
        },
        methods: {
            con() {
                this.$confirm('确认退出吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('UserLogout');
                }).catch(() => {

                });
            },
            toHome(){
                this.$router.push({path: '/'});
            }
        },
        watch: {
            "$route"(to, from) {
                this.currentPath = to.path;
                this.currentPathNameParent = to.matched[0].name;
                this.currentPathName = to.name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .panel{
        position:absolute;
        top:0;
        bottom: 0;
        width:100%;
        background:#1F2D3D;
    }
    .panel-top{
        height: 60px;
        line-height:60px;
        background: #1F2D3D;
        color: #c0ccda;
    }
    .panel-top .rightbar{
        text-align: right;
        padding-right: 70px;
    }
    .panel-center{
        background: #324057;
        position: absolute;
        top: 60px;
        bottom: 0px;
        width: 100%;
        overflow: hidden;
        /*最外层要hidden*/
        /*这是行，绝对定位之后没有宽度因此必须设置width*/
    }
    .breadcrumb{
        margin-bottom:15px;
    }
    .panel-c-c{
        /*这是列，因为已经有了列的宽度因此无需设置width*/
        background: #f1f2f7;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        overflow-y: scroll;
        /*内层设置滚动*/
        padding: 30px;
    }
</style>