import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerData from '@/utils/routerData.ts'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
]
routerData.forEach(item => {
    routes.push({
        path: item.path,
        name: item.name,
        component: () => item.component,
    })
})

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
