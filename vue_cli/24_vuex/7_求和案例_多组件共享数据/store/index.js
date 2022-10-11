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
const actions = {
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了');
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    },
}
// 准备mutations————修改state中的数据
const mutations = {
    JIA(context, value) {
        console.log('mutation中的JIA被调用了');
        context.sum += value
    },
    JIAN(context, value) {
        console.log('mutation中的JIAN被调用了');
        context.sum -= value
    },
    PERSON_ADD(context, value) {
        console.log('mutation中的PERSON_ADD被调用了');
        context.personList.unshift(value)
    }
}
// 准备state————用于存储数据
const state = {
    sum: 0, // 当前求和的值
    school: '武汉',
    subject: '前端',
    personList: [
        { id: '001', name: '张三' }
    ]
}

// 准备getters————对state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})