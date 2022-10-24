import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/area'
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
    },
    {
        path: '/active',
        name: 'Active',
        component: () => import(/* webpackChunkName: "active" */ '../views/Active/IndexView.vue')
    },
    {
        path: '/active/create',
        name: 'CreateActive',
        component: () => import(/* webpackChunkName: "create-active" */ '../views/Active/CreateView.vue')
    },
    {
        path: '/active/:id',
        name: 'EditActive',
        component: () => import(/* webpackChunkName: "edit-active" */ '../views/Active/EditVIew')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
