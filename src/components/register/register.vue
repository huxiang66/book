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
				placeholder="请输入账号(必填)"
				@click-icon="$toast('不要以数字或特殊符号开头哦！')"
				/>
				<van-field
				v-model="password"
				type="password"
				label="密码"
				placeholder="请输入密码(必填)"
				required
				/>
				<van-field
				v-model="password"
				type="password"
				label="重复密码"
				placeholder="请确认密码(必填)"
				required
				/>
				<van-field
			    v-model="phone"
			    label="邮箱"
			    placeholder="请输入邮箱"
			  />
				<van-field
			    v-model="phone"
			    label="手机号"
			    placeholder="请输入手机号"
			    required
			  />
			  <van-field style="min-height: 5.4rem;"
			    v-model="message"
			    label="留言"
			    type="textarea"
			    placeholder="请输入留言"
			    rows="1"
			    autosize
			  />
			</van-cell-group>
			<van-button size="large" type="danger">注册</van-button>
		</div>
	</div>
</template>

<script>
	import topbar from '../topbar.vue';
	export default{
		name:'register',
		components:{
			topbar,
		},
		data(){
			return{
				username:'',
				password:'',
				phone:'',
				message:'',
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../common/less/mix.less';
	.form{
		.form();
	}


	
</style>