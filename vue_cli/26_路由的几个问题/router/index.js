// 该文件专门用于创建整个应用的路由器

import vueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建并导出一个路由器
export default new vueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})