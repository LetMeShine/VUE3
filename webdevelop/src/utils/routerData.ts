import { RouteRecordRaw } from 'vue-router'
const arr: Array<RouteRecordRaw> = [
    { name: 'home', title: '首页', path: '/home', component: () => import('@/views/Home.vue') },
    { name: 'detail', title: '列表详情', path: '/detail/:id', component: () => import('@/views/Detail.vue') },
    { name: 'order', title: '订单', path: '/order', component: () => import('@/views/Order.vue') },
    { name: 'find', title: '发现', path: '/find', component: () => import('@/views/Find.vue') },
    { name: 'map', title: '地图', path: '/map', component: () => import('@/views/Map.vue') }
]
export default arr;