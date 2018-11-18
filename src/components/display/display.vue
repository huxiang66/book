<template>
	<div>
		<topbar></topbar>
		<div class="title">
			<h3>经典旧书</h3>
			<span>&gt;&gt;</span>
		</div>
		<div class="productList" v-for="(l,index) in 3">
			<img src="/static/images/display1.png" alt=".">
			<p>故都风物</p>
		</div>
		<!-- 页码 -->
		<div class="pageNum">
			<div class="pageNum-left" :class="{disable:page===1}" @click="page--">
				上一页
			</div>
			<div class="pageNum-mid">
				<span class="thisPage">{{page}}</span>
				<span>/</span>
				<span class="allPage">{{allPage}}</span>
			</div>
			<div class="pageNum-right" @click="page++" :class="{disable:page===allPage}">下一页</div>
		</div>
		<copyright></copyright>
	</div><!-- 结束 -->
</template>

<script>
	import copyright from '../copyright.vue';
	import topbar from '../topbar.vue';

	export default{
		name:'display',

		components:{
			copyright,
			topbar,
		},
		data(){
			return{
				page:1,
				allPage:3,
				dark:true
			}
		},
		methods:{

		}
	}
</script>

<style scoped lang="less">
	@import '../../common/less/mix.less';
	
	.title{
		.title();
	}
	.productList{
		width: 100%;
		height: 12.4rem;
		padding-left: 4rem;
		border-bottom: .1rem solid #ebebeb;
		display: flex;
		align-items: center;
		img{
			height: 4.4rem;
			margin-right: 4rem;
		}
		p{
			font-size: 1.4rem;
			color: #333333;
		}
	}
	.pageNum{
		height: 7rem;
		width: 100%;
		padding: 0 1.2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-mid{
			font-size: 1.2rem;
			color: #787878;
		}
		&-left,&-right{
			width: 8rem;
			height: 3rem;
			border:.1rem solid #f23030;
			line-height: 3rem;
			text-align: center;
			border-radius: .3rem;
			color: #f23030;
		}
	}
	.disable{
		color: #f89797;
		border: .1rem solid #f89797;
		disabled:disabled;
	}
</style>