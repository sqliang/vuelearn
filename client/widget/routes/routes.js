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

import Hello from '../components/Hello.vue';
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
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/hello',
        component: Hello,
        meta: {auth: false},
        hidden: true
    },
    {
        path: '/counter',
        component: Counter,
        meta: {auth: false},
        hidden: true
    },
    {
        path: '*',
        component: NotFound,
        hidden: true
    }
];