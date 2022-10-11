import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
})
