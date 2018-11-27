<template>
	<div>
		<topbar></topbar>
		<div class="title">
			<h3>经典旧书</h3>
			<router-link to="/store">
				<span>&gt;&gt;</span>
			</router-link>
		</div>
		<div class="productList" v-for="(n,index) in list" @click="detail(n)">
			<img :src="n.imgUrl" alt=".">
			<p>{{n.name}}</p>
		</div>
		<!-- 页码 -->
		<div class="pageNum">
			<div class="pageNum-left" :class="{disable:page===1}" @click="prev">
				上一页
			</div>
			<div class="pageNum-mid">
				<span class="thisPage">{{page}}</span>
				<span>/</span>
				<span class="allPage">{{allPage}}</span>
			</div>
			<div class="pageNum-right" @click="next" :class="{disable:page===allPage}">下一页</div>
		</div>
		<!-- 顶部弹出层 -->
		<van-popup v-model="show" position="top" :overlay="false">没有更多了</van-popup>
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
				allPage:1,
				dark:true,
				show: false,
				list:[{
					  id:13,
					  imgUrl:'/static/images/display6.png',
					  name:'世语新说',
					  price:88.00,
					  originalPrice:108.00
					},
					{
					  id:14,
					  imgUrl:'/static/images/display7.png',
					  name:'说文解字',
					  price:99.00,
					  originalPrice:108.00
					},
					{
					  id:15,
					  imgUrl:'/static/images/display8.png',
					  name:'古诗源',
					  price:66.00,
					  originalPrice:86.00
					},]
			}
		},
		methods:{
			prev(){
				this.$toast('没有更多了');
				
			},
			next(){
				this.$toast('没有更多了');
			},
			detail(n){
				this.$router.push({path:'/introduction',query:{id:n.id}})
			}
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