import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import TemplateDetail from '../views/TemplateDetail.vue'
import Works from '../views/Works.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        children: [{
            path: '',
            name: 'home',
            component: Home,
            meta: { title: '欢迎来到慕课乐高' },
        },{
            path: '/template/:id',
            name: 'template',
            component: TemplateDetail,
            meta: { title: '模版详情' }
        },{
            path: 'works',
            name: 'works',
            component: Works,
            meta: { title: '我的作品', requireLogin: true }
        }]
    },{
        path: '/editor/:id',
        name: 'editor',
        component: () => import( '../views/Editor.vue' ),
        meta: { title: '编辑我的设计', requireLogin: true }
    },{
        path: '/login',
        name: 'login',
        component: () => import( '../views/Login.vue' ),
        meta: {title: '登录到慕课乐高', disableLoading: true }
    }]
})

export default router