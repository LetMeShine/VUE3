import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/font/iconfont.css'
// import components from '@/components/index'
import Banner from '@/components/Banner.vue'

// console.log(components, 123)
// Object.keys(components).forEach((key: string) => {
//     Vue.component(key, components[key])
// })

const app = createApp(App)
// Object.keys(components).forEach((key: string) => {
// console.log(app.component, 546)
// app.component(key, components[key] as any)
// })
app.component('Banner', Banner)
app.use(store).use(router).mount('#app');

const win: any = window;
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
        win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
}

