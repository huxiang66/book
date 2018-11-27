<template>
	<div>
		<topbar></topbar>
		<div class="title">
			<h3>产品展示</h3>
		</div>
		<div class="sort">
			<div class="sort-name" v-for="(n,index) in screen">
				 <span @click="aa=!aa">{{n.title}}</span>
				 <img src="static/images/up.png" alt="." v-if="aa">
				 <img src="static/images/down.png" alt="." v-else>
			</div>
			<div class="sort-filter">
				<span @click="show=true">筛选</span>
				<img src="static/images/filter.png" alt="." >
			</div>
		</div>
		<div class="productList" v-for="(n,index) in showlist" @click="detail(n)">
			<!-- <router-link :to="{path:'/introduction',query:{id:n.id}}"> -->
			<img :src="n.imgUrl" alt=".">
			<p>{{n.name}}</p>
			<!-- </router-link> -->
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
		<!-- 模态框 -->
		<div class="modal" v-if="show" @touchmove.prevent>
			<div class="modal-top">
				<img src="/static/images/back.png" alt="." @click="show=false">
				<span>筛选</span>
			</div>
			<div class="h9"></div>
			<div class="modal-mid"></div>
			<div class="modal-bottom">
				<van-button size="large" type="danger" @click="close">确定</van-button>
			</div>
		</div>
		<!-- 遮罩层 -->
		<div class="mask" v-if="show">
		</div>
		<div class="loading" v-if="load">
			<van-loading type="spinner" />
		</div>
		<copyright></copyright>
	</div><!-- 结束 -->
</template>

<script>
	import topbar from '../topbar.vue';
	import copyright from '../copyright.vue';
	
	
	export default{
		name:'store',
		components:{
			topbar,
			copyright,
		},
		mounted(){
			this.getList();
		},
		data(){
			return {
				aa:true,
				page:1,
				allPage:3,
				eachShow:5,
				show:false,
				load:false,
				showlist:[],
				screen:[
					{
						title:'名称',
					},
					{
						title:'时间',
					},
					{
						title:'价格',
					},
					],
				list:[
					{
					  id:1,
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:88.00,
					  originalPrice:109.00
					},
					{
						id:2,
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:138,
					  originalPrice:159.00
					},
					{
					  id:3,
					  imgUrl:'/static/images/index7.jpg',
					  name:'中国艺术精神',
					  price:119,
					  originalPrice:188.00
					},
					{
					  id:4,
					  imgUrl:'/static/images/index8.jpg',
					  name:'中国神话传说',
					  price:209.00,
					  originalPrice:249.00
					},
					{
					  id:5,
					  imgUrl:'/static/images/index9.jpg',
					  name:'小窗幽记',
					  price:69.00,
					  originalPrice:99.00
					},
					{
					  id:6,
					  imgUrl:'/static/images/index10.jpg',
					  name:'杨万里选集',
					  price:59.00,
					  originalPrice:88.00
					},
					{
					  id:7,
					  imgUrl:'/static/images/index11.jpg',
					  name:'哲学概论',
					  price:109.00,
					  originalPrice:129.00
					},
					{
					  id:8,
					  imgUrl:'/static/images/display1.png',
					  name:'故都风物',
					  price:109.00,
					  originalPrice:129.00
					},
					{
					  id:9,
					  imgUrl:'/static/images/display2.png',
					  name:'梨园红雪录',
					  price:138.00,
					  originalPrice:159.00
					},
					{
					  id:10,
					  imgUrl:'/static/images/display3.png',
					  name:'论语新解',
					  price:118.00,
					  originalPrice:129.00
					},
					{
					  id:11,
					  imgUrl:'/static/images/display4.png',
					  name:'启功平传',
					  price:99.00,
					  originalPrice:119.00
					},
					{
					  id:12,
					  imgUrl:'/static/images/display5.png',
					  name:'山水有清音',
					  price:79.00,
					  originalPrice:99.00
					},
					
					{
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
					},
					  ],
			}
		},
		methods:{
			close:function(){
				 this.show=false;
				 this.load=true;
				 let that=this;
				 setTimeout(function(){
				 	that.load=false;
				 },1000)
			},
			getList(page){
				// 发请求，获取当第一页展示数据5条

				let a = this.page;//当前页码
				let b = this.eachShow;//每页显示条数
				this.showlist=this.list.slice(b*(a-1),b*a)
			},
			next(){
				if(this.page<this.allPage){
					this.page++;
					//发送一个请求,又获取5条
					this.getList();
				}
			},
			prev(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
			},
			detail(n){
				this.$router.push({path:'/introduction',query:{id:n.id}})
			}
		}

	}
	// setTimeout(function(){
	// 	this.load=false;
	// },1000)
</script>

<style scoped lang="less">
	@import '../../common/less/mix.less';
	.title{
		.title();
	}
	.sort{
		width: 100%;
		height: 5rem;
		border-bottom: .1rem solid #ebebeb;
		display: flex;
		justify-content: space-around;
		align-items: center;
		&-name{
			font-size: 1.4rem;
			color: #636363;
			text-align: center;
			img{
				width: 1.4rem;
				height:1.4rem;
			}
		}
		&-filter{
			text-align: center;
			font-size: 1.4rem;
			color: #636363;
			img{
				width: 1.4rem;
				height: 1.4rem;
				position: relative;
				top: .3rem
			}
			span{}
		}
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
	/*遮罩*/
	.mask{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-color: #000;
		opacity: .3;
		z-index: 101;
	}
	/*模态框*/
	.modal{
		width: 84%;
		height: 100%;
		background-color: #fff;
		z-index: 102;
		position: absolute;
		top: 0;
		right: 0;
		overflow: hidden;
		.h9{
			height: .9rem;
			background-color: #f0f0f0;
		}
		&-top{
			height:6rem;
			font-size: 1.5rem;
			color: #333333;
			display: block;
			line-height: 6rem;
			text-align: center;
			position: relative;
			img{
				display: inline-block;
				position: absolute;
				width: 1.7rem;
				height: 1.7rem;
				left: 1.3rem;
				top: 2.2rem;
			}
		}
		&-mid{
			min-height: 23rem;
		}
		&-bottom{
			width: 100%;
			padding:0 .9rem 0 .9rem;
		}
	}
	/*加载动画*/
	.loading{
		width: 5rem;
		height: 5rem;
		background-color:#000;
		opacity: .7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: .3rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -2.5rem;
		margin-top: -2.5rem;
	}
</style>