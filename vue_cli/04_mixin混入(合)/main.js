import Vue from 'vue'
import App from './App.vue'

import { hunhe, hunhe2 } from './mixin'

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
})
