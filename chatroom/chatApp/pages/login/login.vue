<template>
	<view>
		<h3>立刻加入内鬼群聊</h3>
		<image src="../../img/img.png"class="image"></image>
		<view class="name">
			<input type="text" placeholder="输入一个昵称" v-model:value="name" />
		</view>
		<view class="login" @tap="login">加入</view>
	</view>
</template>

<script>
	export default{
	data(){
		return{
			name:''
		}
	},
	methods:{
		login(){
			uni.navigateTo({
				url:'../index/index?name='+this.name				
			});
		}
	}
	}
</script>

<style lang="scss">
	h3 {
		margin:200rpx 0rpx 100rpx;
		text-align: center;
		text-shadow: 5rpx 5rpx 15rpx;
	}
	.image{
		width: 200rpx;
		height: 200rpx;
		margin:0 280rpx;
		border-radius: 200rpx;
		background-color: #39C5BB;
	}
	.name {
		margin-top:50rpx ;
		display: flex;
		justify-content: center;
		input {
			width: 300rpx;
			height: 100rpx;
			border:1rpx solid #39C5BB;
			border-radius: 100rpx;
			text-indent: 1em;
		}
	}
	.login {
		margin-left: 225rpx;
		margin-top: 100rpx;
		width: 300rpx;
		height: 300rpx;
		border-radius: 300rpx;
		background-color: #39C5BB;
		color: white;
		text-align: center;
		line-height: 300rpx;
		box-shadow: 5rpx 5rpx 20rpx gray;
	}
</style>
