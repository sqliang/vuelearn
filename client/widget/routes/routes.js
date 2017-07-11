/**
 * Created by baidu on 17/6/7.
 */
import App from '../App.vue';
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

import Counter from '../components/Counter.vue';


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
            {
                path: '',
                redirect: 'home',
                meta: {auth:false}
            },
            {
                path: 'home',
                component: Home,
                meta: {auth: false}
            },
            {
                path: 'about',
                component: About,
                meta: {auth:false}
            },
            {
                path: 'tags',
                component: Tags,
                meta: {auth: false}
            },
            {
                path: 'article/:id',
                component: Article,
                meta: {auth: false, scrollTop: true}
            }
        ]
    },
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
            {
                path: '',
                hidden: true,
                redirect: {name: '文章管理'}
            },
            {
                path: 'articleList',
                component: ArticleList,
                name: '文章管理'
            },
            {
                path: 'articleCreate',
                component: ArticleCreate,
                name: '创建文章',
                hidden: true
            },
            {
                path: 'articleEdit/:postId',
                component: ArticleEdit,
                name: '编辑文章',
                hidden: true
            },
            {
                path: 'classList',
                component: ClassList,
                name: '分类管理'
            }
        ]
    },
    /// ====================基础学习部分路由
    {
        path: '/counter',
        component: Counter,
        meta: {auth: false},
        hidden: true
    },
    /// ====================end
    {
        path: '/error',
        component: NotFound,
        meta: {auth: false},
        hidden: true
    },
    {
        path: '*',
        component: NotFound,
        hidden: true
    }
];