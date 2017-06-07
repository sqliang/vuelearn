/**
 * Created by baidu on 17/6/7.
 */
import Reg from '../components/container/Reg.vue';
import Login from '../components/container/Logi.vue';
import Admin from '../components/container/Admin.vue';
import ArticleCreate from '../components/container/ArticleCreate.vue';
import ArticleList from '../components/container/ArticleList.vue';
import ArticleEdit from '../components/container/ArticleEdit.vue';
import ClassList from '../components/container/ClassList.vue';

import Home from '../components/container/Home.vue';
import Front from '../components/container/Front.vue';
import About from '../components/container/About.vue';
import Tags from '../components/container/Tags.vue';
import Article from '../components/container/Article.vue';
import NotFound from '../components/container/NotFound.vue';


export default [
    {
        path: '/reg',
        component: Reg,
        meta: {auth: false},
        hidden: true
    },
    {
        path: '/',
        component: Front,
        hidden: true,
        children: [
            {path: '', redirect: 'home', meta: {auth: false}},
            {path: 'home', component: Home, meta: {auth: false}},
            {path: 'about', component: About, meta: {auth: false}},
            {path: 'tags', component: Tags, meta: {auth: false}},
            {path: 'article/:id',component: Article, meta: {auth: false, scrollTop: true}}
        ]
    },// 文章列表单独一个组件(可以删除并且编辑，编辑的时候需要跳转到另一个路由)
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/admin',
        component: Admin,
        name: '管理面板',
        iconCls: 'el-icon-message',
        children: [
            // 文章列表单独一个组件(可以删除并且编辑，编辑的时候需要跳转到另一个路由)
            {path: '', hidden: true, redirect: {name: '文章管理'}},
            // 文章列表单独一个组件(可以删除并且编辑，编辑的时候需要跳转到另一个路由)
            {path: 'articleList', component: ArticleList, name: '文章管理'},
            {path: 'articleCreate',component: ArticleCreate, name:'创建文章', hidden: true},
            {path: 'articleEdit/:postId', component: ArticleEdit, name: '编辑文章', hidden: true},
            {path: 'classList', component: ClassList, name: '分类管理'}
        ]
    },
    {
        path: '*',
        component: NotFound,
        hidden: true
    }
];