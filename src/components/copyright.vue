<template>
	<div>
		<div class="tabBar">
			<router-link to="/index">
				<div class="tabBar-box">主页</div><span>|</span>
			</router-link>
			<router-link to="/center">
				<div class="tabBar-box">会员中心</div><span>|</span>
			</router-link>	
			<div class="tabBar-box">电脑版</div>
		</div>
		<div class="copyRight">
			<p>&copy;2018  MADE BY HuXiang</p>
			<p>版权所有：三家软件有限公司</p>
		</div>
		<ul class="nav">
			<li class="li-home li-border">
				<router-link to="/index">
					<img src="/static/images/index13.png" class="icon-home">
				</router-link>
			</li>
			<li class="li-border"><router-link to="/display">产品展示</router-link></li>
			<li class="li-border"><router-link to="/login">会员登录</router-link></li>
			<li class="li-border"><router-link to="/register">会员注册</router-link></li>
			<li><router-link to="/center">会员中心</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'copyright',
		data(){
			return{

			}
		}
	}
</script>

<style scoped lang="less">
	.tabBar{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		padding: 0 8rem;
		display: flex;
		justify-content: space-between;
		&-box{
			font-size: 1.2rem;
			color: #323232;
		}
		span{
				
				font-size: 1.7rem;
				color: #f0f0f0;
			}
	}
	.copyRight{
		width: 100%;
		padding-top: 1.2rem;
		margin-bottom: 9rem;
		border-top: .1rem solid #f0f0f0;
		p{
			color:#999999;
			font-size: 1.2rem;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			margin-bottom: 1.2rem;
		}
	}
	.nav{
		width: 100%;
		height: 5.6rem;
		line-height: 5.6rem;
		position: fixed;
		bottom: 0;
		z-index: 100;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		li{
			border:.1rem solid #ebebeb;
			flex: 1;
			text-align: center;
			
			font-size: 1.2rem;
			color: #666666;
		}
		.icon-home{
			margin-top: 1.2rem;
		}
		.li-border{
			margin-right: -.1rem;
		}
	}


	
</style>