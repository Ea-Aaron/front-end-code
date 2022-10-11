import axios from "axios";
import { nanoid } from "nanoid";

// 人员相关配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('PERSON_ADD', value)
            } else {
                alert('必须添加姓王的人')
            }
        },
        addPersonServe(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('PERSON_ADD', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        PERSON_ADD(context, value) {
            console.log('mutation中的PERSON_ADD被调用了');
            context.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}