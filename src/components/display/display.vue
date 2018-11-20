<template>
	<div>
		<topbar></topbar>
		<div class="title">
			<h3>经典旧书</h3>
			<router-link to="/store">
				<span>&gt;&gt;</span>
			</router-link>
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
		.productList();
	}
	.pageNum{
		.pageNum();
	}
	.disable{
		.disable();
	}
</style>