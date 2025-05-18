import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import routerData from '@/utils/routerData'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    { name: 'home', title: '首页', path: '/home', component: () => import('@/components/Banner.vue') },
    { name: 'detail', title: '列表详情', path: '/detail/:id', component: () => import('@/views/Detail.vue') },
    { name: 'order', title: '订单', path: '/order', component: () => import('@/views/Order.vue') },
    { name: 'find', title: '发现', path: '/find', component: () => import('@/views/Find.vue') },
    { name: 'map', title: '地图', path: '/map', component: () => import('@/views/Map.vue') }
]
// routerData.forEach(item => {
//     let temp = item.component();// 此处想要通过调用拿到组件名称，方便后续拼接
//     routes.push({
//         path: item.path,
//         name: item.name,
//         component: () => import('@/views/' + temp),
//     })
// })

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
