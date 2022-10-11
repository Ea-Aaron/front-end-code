// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入 vue-router
import vueRouter from 'vue-router'
// 引入 router
import router from './router'

// 使用插件vue-router
Vue.use(vueRouter)

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
    router: router
})
