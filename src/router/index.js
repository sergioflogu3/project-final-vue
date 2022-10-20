import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/area',
        name: 'Area',
        component: () => import(/* webpackChunkName: "area" */ '../views/Area/AreaView.vue')
    },
    {
        path: '/area/create',
        name: 'CreateArea',
        component: () => import(/* webpackChunkName: "create-area" */ '../views/Area/CreateView.vue')
    },
    {
        path: '/area/:id',
        name: 'EditArea',
        component: () => import(/* webpackChunkName: "edit-area" */ '../views/Area/EditView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
