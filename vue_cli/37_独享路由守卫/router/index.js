// 该文件专门用于创建整个应用的路由器

import vueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并导出一个路由器
const router = new vueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) { // 判断当前路由是否需要权限控制
                            if (localStorage.getItem('city') === 'wuhan') {
                                next()
                            } else {
                                alert('所在城市不符合，无权限查看')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqin', // 给路由命名，简化路由的跳转
                            path: 'detail', // 使用占位符接受params参数
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

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

// 全局前置路由守卫————初始化的时候、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('全局前置路由', to, from);
    // if (to.name === 'xinwen' || to.name === 'xiaoxi') { // 多个路由控制不方便
    if (to.meta.isAuth) { // 判断当前路由是否需要权限控制
        if (localStorage.getItem('city') === 'wuhan') {
            next()
        } else {
            alert('所在城市不符合，无权限查看')
        }
    } else {
        next()
    }
}) */

// 全局后置路由守卫————初始化的时候、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('全局后置路由', to, from);
    document.title = to.meta.title || '城市系统'
})

export default router