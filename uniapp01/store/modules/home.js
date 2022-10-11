import request from '../../utils/request.js'

const state ={
	indexData: {}, // 首页数据
	kingKongList: []
}

const mutations = {
	GETINDEXDATA(state,indexData) {
		state.indexData = indexData
		state.kingKongList = indexData.kingKongModule.kingKongList
	}
}

const actions = {
	async getIndexData({commit}) {
		const result = await request('/getIndexData')
		console.log(result);
		commit('GETINDEXDATA',result.data)
	}
}

const getters = {
	
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}