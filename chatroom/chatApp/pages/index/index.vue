<template>
	<view class="content">
		<view class="top">
		<view v-for="item in arr" class="out">
			<view v-if="item.id==1" class="contHost"><text class="cont">{{item.message}}</text></view>
			<view v-else-if="item.id==3" ><view style="font-size: 30rpx;">{{item.name}}</view><text class="contLeft">{{item.message}}</text></view>
			<view v-else class="contMiddle">{{item.message}}</view>
		</view>
		</view>
		<view class="message">
		<input type="text" v-model="content" /><button size="mini" @tap="add">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[],
				content:'',
				host:''
			}
		},
		onLoad(option) {
			this.host=option.name;
			this.getMessage();
			this.loginMessage();
		},
		methods: {
			add(){
				if(this.content.length>0){
				let obj={
					id:1,
					message:this.content,
					name:this.host
				}
				let pushObj={
					id:3,
					message:this.content,
					name:this.host
				}
				this.arr.push(obj);
				this.socket.emit('message',pushObj);
				this.content='';
				}
			},
			getMessage(){
				this.socket.on('emitMessage',data=>{
					this.arr.push(data);
				})
			},
			loginMessage(){
				let mess=this.host+'进入了房间'
				let obj={
					id:2,
					message:mess,
					name:this.host
				}
				this.arr.push(obj);
				this.socket.emit('message',obj);
			}
		}
	}
</script>

<style>
	.content{
		position: relative;
		background-color: #39c5bb;
	}
	.top {
		box-sizing: border-box;
		width: 750rpx;
		height: 1400rpx;
		border: 20rpx solid #39c5bb;
		padding: 0 10rpx;
		border-radius: 30rpx;
		overflow: scroll;
		background-color: white;
	}
	.contHost{
		display: flex;
		justify-content: flex-end;
	}
	.cont {
			display: inline-block;
			margin: 20rpx;
			border:1px solid #39C5BB;
			color: white;
			background-color: #007AFF;
			padding: 10rpx;
			border-radius: 20rpx;
		}
	.contLeft {
			display: inline-block;
			margin: 20rpx;
			border:1px solid #39C5BB;
			color: white;
			background-color: #F0AD4E;
			padding: 10rpx;
			border-radius: 20rpx;
		}
	.contMiddle{
		margin: 20rpx;
		opacity: 0.3;
		font-size: 30rpx;
		text-align: center;
	}
	input {
		border:1px solid #39c5bb;
		width: 555rpx;
		height: 100rpx;
		border-radius: 30rpx;
		display: inline-block;
		background-color: white;
		text-indent: 1em;
	}
	.message{
		padding-left: 10rpx;
		height: 136rpx;
		background-color: rgba(0,0,0,.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		width: 150rpx;
		height: 100rpx;
		display: inline-block;
		line-height: 100rpx;
		background-color: #F0AD4E;
		color:white;
		font-size: 30rpx;
	}
</style>
