<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="hander">
			<image class="logo" src="/static/images/logo.png" mode=""></image>

			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="搜索..." placeholder-class="placeholder">
			</view>

			<button>download</button>
		</view>
		
		<!-- 滑块 -->
		<!-- 在h5中，vue先编译模板在发送请求，可能会导致模板编译完，但是请求数据还没返回。导致indexData没有数据，可以使用v-if进行判断，没有时，删除该节点，数据返回后，在显示在页面中 -->
		<!-- 小程序中不会存在该问题，是因为小程序时整体编译打包之后，在显示，此时所有的数据，节点都已渲染完毕 -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex v-if="indexData">
			<view class="navitem" :class="{active: navIndex === -1}" @click="changeIndex(-1, -1)">推荐</view>
			<view class="navitem" :class="{active: navIndex === index}" v-for="(item ,index) in indexData.kingKongModule.kingKongList" :key="item.L1Id" @click="changeIndex(index, item.L1Id)">{{item.text}}</view>
		</scroll-view>
		
		<!-- 内容区 -->
		<scroll-view scroll-y="true" >
			<recommend v-if="navIndex === -1"></recommend>
			<catelist v-else :L1Id="L1Id"></catelist>
		</scroll-view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import {mapState} from 'vuex'
	import recommend from '../../components/recommend/recommend.vue'
	import catelist from '../../components/cateList/cateList.vue'
	
	
	export default {
		data() {
			return {
				navIndex: -1, // 滑块标识
				L1Id: -1, // 类别标识
			}
		},
		
		components: {
			recommend,
			catelist
		},
		
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			}),
		},
		mounted() {
			this.$store.dispatch('home/getIndexData')	
		},
		methods: {
			// 滑块切换
			changeIndex(index, L1Id) {
				this.navIndex = index
				this.L1Id = L1Id
			}
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.hander 
			display flex
			padding 10rpx 5rpx
			.logo
				width 140rpx
				height 40rpx
				margin: 10rpx
				
			.search
				width 420rpx
				flex: 1
				height 60rpx
				background-color #f5f5f5
				position: relative
				margin: 0 10rpx
				
				.iconfont
					position: absolute
					font-size: 40rpx
					left: 10rpx
					top: 10rpx
				
				input 
					width 360rpx
					height 60rpx
					margin-left 60rpx
					.placeholder 
						font-size: 26rpx
			
			button 
				width: 144rpx
				height: 60rpx
				line-height: 60rpx
				text-align: center
				font-size: 26rpx
				padding: 0 40rpx
				
		.navScroll 
			display: flex
			height: 80rpx
			// 不换行
			white-space: nowrap
			.navitem 
				display: inline-block
				height: 40rpx
				padding: 10rpx
				font-size: 26rpx
				&.active
					border-bottom: 3rpx solid #BB2C08
</style>
