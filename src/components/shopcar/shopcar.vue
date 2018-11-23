<template>
	<div>
		<topbar></topbar>
		<div class="car">
			<img src="/static/images/empty.png" alt=".">
			<p>亲，您的购物车空空的哟~</p>
		</div>
		<router-link to="/index">
		<van-button plain type="danger">
			继续购物
		</van-button>
		</router-link>
	</div>
</template>

<script>
	import topbar from '../topbar';

	export default{
		name:'shopcar',

		components:{
			topbar,
		}
	}
	
</script>

<style scoped lang="less">
	.car{
		text-align: center;
		margin-top: 13rem;
		p{
			color: #666666;
			font-size: 1.4rem;
		}
	}
	.van-button--plain{
		display: block;
		margin:2rem auto;

	}
</style>