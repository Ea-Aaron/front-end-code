/* 
    使用npm i vuex@3.6.2 来安装较低的版本，不然会有一堆奇怪警告和报错，这是因为vuex4.0及以上的版本不兼容Vue2。
*/

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import countAbout from './count'
import personAbout from './person'

// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})