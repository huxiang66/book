<template>
	<div class="topBar">
		<router-link to="/index">
			<div class="topBar-left">
				<img src="/static/images/member1.png" alt="." v-if="userImg==null">
				<img :src="userImg" v-else>
				<span>图书小店</span>
			</div>
		</router-link>
		<div class="topBar-right">
			
			<img src="/static/images/index16.png" alt=".">
			<router-link to="/search">
			<p class="search">搜索</p>
			</router-link>
			<span>|</span>
			<router-link to="/center">
			<div class="center">
				会员中心
			</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'topbar',
		data(){
			return{
				userImg:'',
			}
		},
		mounted(){
			this.userImg=window.localStorage.userImg;

		}
	}
</script>

<style scoped lang="less">
	.topBar{
		height: 3.5rem;
		background-color: #f23030;
		padding: 0 1rem 0 .7rem;
		overflow: hidden;
		&-left{
			float: left;
			display: flex;
			img{
				width: 2.1rem;
				height: 2.1rem;
				border:.1rem solid #faacac;
				border-radius: .3rem;
				display: block;
				align-self: center;
				margin-right: 1.2rem;
			}
			span{
				color: #fff;
				font-size: 1.2rem;
				display: block;
				line-height: 3.5rem;
			}
		}
		&-right{
			line-height: 3.5rem;
			float: right;
			display: flex;
			img{
				width: 1.3rem;
				height: 1.3rem;
				align-self: center;
				margin-right: 1rem;
			}
			span{
				color: #f45959;
				font-size: 1.6rem;
				margin: 0 1.2rem;
			}
			.search,
			.center{
				font-size: 1.2rem;
				color: #fff;
			}

		}
	}

	
</style>