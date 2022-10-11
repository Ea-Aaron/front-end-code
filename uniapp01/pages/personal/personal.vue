<template>
	<view>
		<button @click="getuser">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			getuser() {
				wx.getUserProfile({
					desc: '111',
					success: (res) => {
						console.log('@@@@@',res.userInfo);
					  }
				}) 
			}
		}
	}
</script>

<style lang="stylus">

</style>
