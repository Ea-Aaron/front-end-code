/* 
    使用npm i vuex@3.6.2 来安装较低的版本，不然会有一堆奇怪警告和报错，这是因为vuex4.0及以上的版本不兼容Vue2。
*/

// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 准备actions————响应组件中用户的动作
const actions = {}
// 准备mutations————修改state中的数据
const mutations = {}
// 准备state————用于存储数据
const state = {}

export default new Vuex.Store({
    actions,
    mutations,
    state
})