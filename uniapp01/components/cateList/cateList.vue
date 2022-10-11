<template>
	<view class="cateList">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in cateObj.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image class="swiperImg" :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 文字 -->
		<view class="title">
			{{cateObj.category.frontName}}
		</view>
		<view class="desc">
			{{cateObj.category.frontDesc}}
		</view>
		
		<!-- 商品列表 -->
		<view class="goodsList">
			<view class="goodsItem" v-for="item in cateObj.itemList" :key="item.id">
				<image class="goodsImg" :src="item.primaryPicUrl" mode=""></image>
				<!-- 名称 -->
				<view class="goodsDesc">
					{{item.name}}
				</view>
				<!-- 价格 -->
				<view class="goodsPrice">
					￥ {{item.counterPrice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	
	export default {
		name:"cateList",
		props: ['L1Id'],
		data() {
			return {
				indexCateList: []
			};
		},
		mounted() {
			this.getIndexCateList()
		},
		
		methods: {
			// 获取首页分类数据
			async getIndexCateList() {
				const result = await request('/getIndexCateList')
				console.log(result);
				this.indexCateList = result.data
			}
		},
		
		computed: {
			cateObj() {
				return this.indexCateList.find(item => item.category.parentId === this.L1Id)
			}
		}
	}
</script>

<style lang="stylus">
	.cateList
		.swiper
			height: 350rpx
			.swiperImg
				width: 100%
				height: 350rpx
		
		.title
			font-size: 40rpx
			line-height: 80rpx
			color: #333
			text-align: center
		.desc
			font-size: 30rpx
			line-height: 40rpx
			color: #999
			text-align: center
			
		// 商品列表
		.goodsList
			display: flex
			flex-wrap: wrap
			justify-content: space-around
			// 如果是单数，最后一个会居中显示，但是不能给高度，如果是偶数，最后一个因为没有高度，所以不显示
			&::after
				content: ''
				width: 344rpx
			.goodsItem
				width: 344rpx
				height: 480rpx
				.goodsImg
					width: 344rpx
					height: 344rpx
				.goodsPrice
					color: red
					font-size: 45rpx
</style>