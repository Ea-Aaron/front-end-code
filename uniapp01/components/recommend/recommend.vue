<template>
	<view class="recommend">
		<!-- 1.轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="img" src="https://yanxuan.nosdn.127.net/89ddc38903cee9923e7d998a8a88ed08.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="img" src="https://yanxuan.nosdn.127.net/static-union/166192596737b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="img" src="https://yanxuan.nosdn.127.net/1ee1fff2ef46ce457164c617e85d7911.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 2.图标 -->
		<view class="policyList">
			<view class="policyItem" v-for="(item ,index) in policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 3.导航分类 -->
		<view class="kingKongModule" v-if="kingKongList">
			<view class="kingKongItem" v-for="item in kingKongList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<view class="kingKongText">
					{{item.text}}
				</view>
			</view>
		</view>
		
		<!-- 4.分类区 -->
		<view class="categoryList">
			<view class="categoryItem" v-for="(item ,index) in categoryModule" :key="index">
				<!-- 大图 -->
				<image class="categoryImg" :src="item.titlePicUrl" mode=""></image>
				
				<!-- 滑块 -->
				<scroll-view class="categoryScroll" scroll-x="true" enable-flex>
					<view class="goodsItem" v-for="goodsitem in item.itemList" :key="goodsitem.id">
						<image class="goodsImg" :src="goodsitem.showPicUrl" mode=""></image>
						<view class="goodsText">
							{{goodsitem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name: 'recommend',
		data() {
			return {
				
			}
		},
		
		computed: {
			...mapState({
				policyDescList: state => state.home.indexData.policyDescList,
				kingKongList: state => state.home.kingKongList,
				categoryModule: state => state.home.indexData.categoryModule
			})
		}
	}
</script>

<style lang="stylus">
	.recommend
		.swiper
			height: 350rpx
			.img
				width: 100%
				height: 350rpx
				
		.policyList
			display: flex
			margin: 10rpx 0
			.policyItem
				flex: 1
				text-align: center
				image
					width: 40rpx
					height: 40rpx
					vertical-align: middle
				text
					font-size: 26rpx
					
		.kingKongModule
			display: flex
			flex-wrap: wrap
			.kingKongItem
				width: 20%
				text-align: center
				margin: 10rpx 0
				image
					width: 100rpx
					height: 100rpx
				.kingKongText
					font-size: 24rpx
					
		.categoryList
			.categoryItem
				.categoryImg
					height: 370rpx
					width: 100%
				.categoryScroll
					height: 300rpx
					display: flex
					white-space: nowrap
					.goodsItem
						width: 200rpx
						height: 300rpx
						margin: 0 10rpx
						.goodsImg
							background-color: #f5f5f5
							width: 200rpx
							height: 200rpx
						.goodsText
							// 换行，超出两行显示...
							margin: 10rpx 0
							font-size: 26rpx
							white-space: pre-wrap
							overflow: hidden
							text-overflow: ellipsis
							display: -webkit-box
							-webkit-box-orient: vertical
							-webkit-line-clamp: 2
</style>