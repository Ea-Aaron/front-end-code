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
                            path: 'detail', // 使用占位符接受params参数
                            component: Detail,

                            // props第一种写法，对象写法，该对象中所有的的key-value组合都会通过props传递给Detail组件
                            // props: { id: '001', title: 'hello' }

                            // props第二种写法，布尔写法，布尔值为true，则把路由收到的params参数通过props传递给Detail组件
                            // props: true

                            // props第三种写法，函数写法，该函数中返回的每一组对象通过props传递给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})