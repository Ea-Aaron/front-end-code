// 该文件专门用于创建整个应用的路由器

import vueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并导出一个路由器
export default new vueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqin', // 给路由命名，简化路由的跳转
                            path: 'detail/:id/:title', // 使用占位符接受params参数
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})