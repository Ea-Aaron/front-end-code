// 引入Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  // 安装全局事件总线
    }
})
