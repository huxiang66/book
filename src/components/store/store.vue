<template>
	<div>
		<topbar></topbar>
		<div class="title">
			<h3>产品展示</h3>
		</div>
		<div class="sort">
			<div class="sort-name" v-for="(n,index) in 3">
				 <span @click="aa=!aa">名称</span>
				 <img src="static/images/up.png" alt="." v-if="aa">
				 <img src="static/images/down.png" alt="." v-if="!aa">
			</div>
			<div class="sort-filter">
				<span @click="show=true">筛选</span>
				<img src="static/images/filter.png" alt="." >
			</div>
		</div>
		<div class="productList" v-for="(l,index) in 6">
			<img src="/static/images/index6.jpg" alt=".">
			<p>唐诗别载集</p>
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
		<!-- 模态框 -->
		<div class="modal" v-if="show">
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
		data(){
			return {
				aa:true,
				page:1,
				allPage:7,
				show:false,
				load:false,
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