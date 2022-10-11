import Vue from 'vue'
import vuex from "vuex"

import home from './modules/home.js'

// 使用vuex
Vue.use(vuex)

const store = new vuex.Store({
	modules: {
		home
	}
})

export default store