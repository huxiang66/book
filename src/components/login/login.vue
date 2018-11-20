<template>
	<div>
		<topbar></topbar>
		<div class="form">
			<van-cell-group>
				<van-field
				v-model="username"
				required
				clearable
				label="用户名"
				icon="question"
				placeholder="请输入用户名"
				@click-icon="$toast('不要以数字或特殊符号开头哦！')"
				/>
				<van-field
				v-model="password"
				type="password"
				label="密码"
				placeholder="请输入密码"
				required
				/>
			</van-cell-group>
			<van-button size="large" type="danger">登录</van-button>
			<router-link to="/register">
				<div class="register">
					立即注册
				</div>
			</router-link>
		</div>
		<div class="wxlogin">
			<p class="third">第三方登录</p>
			<img src="/static/images/wx.png" alt=".">
			<p class="wx">微信</p>
		</div>
	</div><!-- 结束 -->
</template>

<script>
	import topbar from '../topbar.vue';
	export default{
		name:'display',
		components:{
			topbar,
		},
		data(){
			return{
				username:'',
				password:''
			}
		},
	
	}

</script>

<style scoped lang="less">
	@import '../../common/less/mix.less';
	.form{
		.form();
	}
	
	.register{
		font-size: 1.2rem;
		text-align: right;
		color: #f23030;
		height: 4.2rem;
		line-height: 4.2rem;
	}
	/*微信登录按钮*/
	.wxlogin{
		padding: 0 3rem;
		border-top: .1rem solid #cccccc;
		.third,.wx{
			color: #cccccc;
			font-size: 1.2rem;
			text-align: center;
			height: 1.4rem;
			line-height: 1.4rem;
		}
		.third{
			width: 8.5rem;
			margin:0 auto;
			position: relative;
			top: -0.7rem;
			background-color: #fff;
			z-index: 10;
		}
		img{
			width: 5rem;
			height: 5rem;
			display: block;
			margin:0 auto;
			margin-top: 1.5rem;
			margin-bottom: 0.7rem;
		}
	}
</style>