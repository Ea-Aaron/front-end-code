// 求和相关配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(context, value) {
            console.log('mutation中的JIA被调用了');
            context.sum += value
        },
        JIAN(context, value) {
            console.log('mutation中的JIAN被调用了');
            context.sum -= value
        },
    },
    state: {
        sum: 0, // 当前求和的值
        school: '武汉',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
