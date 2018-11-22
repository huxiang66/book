<template>
	<div>
		<topbar></topbar>
		<img :src="introductions[this.getId-1].imgUrl" alt="." class="bigPic">
		<div class="share">
			<div class="share-left">
				{{introductions[this.getId-1].name}}
			</div>
			<div class="share-right">
				<img src="/static/images/intro1.png" alt=".">
				<p>分享</p>
			</div>
		</div>
		<div class="price">
			<p class="price-current">￥{{introductions[this.getId-1].price}}</p>
			<p class="price-original">￥{{introductions[this.getId-1].originalPrice}}</p>
		</div>
		<div class="h17"></div>
		<!-- 标签 -->
		<div class="tab">
			<van-tabs v-model="active">
				<van-tab title="产品详情">
					<div class="h27"></div>
					<div class="title">
						产品推荐
					</div>
					<div class="products">
						<div class="products-box" v-for="(n,index) in 7">
							<img src="/static/images/index11.jpg">
							<div class="products-box-name">
								小窗幽记
							</div>
							<div class="products-box-price">
								￥98.00
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="产品参数">
					<div class="parameters">
						<div class="parameters-top">
							市场价 <span class="highPrice">￥{{introductions[this.getId-1].price}}</span>
						</div>
						<div class="parameters-bottom">
							价格	<span>￥{{introductions[this.getId-1].originalPrice}}</span>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<div class="shopNav">
			<div class="shopNav-left">
				<img src="/static/images/index13.png" alt=".">
				<p>首页</p>
			</div>
			<div class="shopNav-left">
				<img src="/static/images/index17.png" alt=".">
				<p>客服</p>
			</div>
			<div class="shopNav-left">
				<router-link to="shopcar">
					<img src="/static/images/index18.png" alt=".">
					<p>购物车</p>
				</router-link>
			</div>
			<div class="shopNav-add" @click="show=true">
			
				<p>加入购物车</p>
			</div>
			<div class="shopNav-pay">
				<p>立即购买</p>
			</div>

		</div>
		<van-actionsheet
  v-model="show"
  :actions="actions"
  cancel-text="确认"
  @cancel="onCancel"
/>

	</div><!-- 结束 -->
</template>

<script>
	import topbar from '../topbar.vue';

	export default{
		name:'introduction',
		components:{
			topbar,
		},
		created(){
			this.getId=this.$route.query.id;
		},
		data(){
			return {
				active: 2,
				show: false,
				getId:'',
				actions: [
				    {
				      name: '梨园红雪录',
				      subname: '￥120'
				    },
				    {

				      name: '数量',
				      subname: '×1'
				    },
				],

				introductions:[{
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
					]
				// shopNav:[
				// 		{
				// 			img:'/static/images/index13.png',
				// 			text:'首页'
				// 		},
				// 		{
				// 			img:'/static/images/index17.png',
				// 			text:'客服'
				// 		},
				// 		{
				// 			img:'/static/images/index18.png',
				// 			text:'购物车'
				// 		}]
			}

		},
		methods:{
		    onCancel(){
		    	this.$toast.success('加入成功');
		    }
		}
		
	}
</script>

<style scoped lang="less">
/*混合*/
.border-top(){
	border-top: .1rem solid #ebebeb;
}
.border-bottom(){
	border-bottom: .1rem solid #ebebeb;
}
	.bigPic{
		height: 26.2rem;
		width: 15.8rem;
		display: block;
		margin:0 auto;
		margin-top: 5.5rem;
	}
	.share{
		height: 4.2rem;
		padding: 0 2rem 0 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-left{
			font-size: 1.4rem;
			color: #333333;
		}
		&-right{
			height: 100%;
			padding-left: 1rem;
			border-left: .1rem solid #ebebeb;
			img{
				width: 1.4rem;
				height: 1.4rem;
				display: block;
				margin:0 auto;
				margin-top: .4rem;
			}
			p{
				font-size: 1.2rem;
				color: #666666;
			}
		}
	}
	.price{
		width: 100%;
		height: 6.5rem;
		padding-left: 1rem;
		border-bottom: .1rem dashed #ebebeb;
		&-current{
			font-size: 1.6rem;
			color: #f23030
		}
		&-original{
			font-size: 1rem;
			color: #999999;
			text-decoration: line-through;
		}
	}
	.h17{
		height: 1.7rem;
		background-color: #f7f7f7;
	}
	.tab{
		margin-bottom: 4.6rem;
		.van-tab {
			span{
				font-size: 1.2rem;
				color: #333333;
			}
		}
		
	}
	/*产品详情标签*/
		.h27{
			height: 2.7rem;
			border-top: .1rem solid #dddddd;
			border-bottom: .1rem solid #dddddd;
			margin-top: .7rem;
		}
		.title{
			font-size: 1.2rem;
			color: #333333;
			height: 1.2rem;
			margin-bottom: 6.5rem;
			line-height: 1.2rem;
			margin-top: 1.7rem;
			padding-left: 1rem;
		}
	.products{
		height: 19.2rem;
		width: 100%;
		padding-left: 1.2rem;
		overflow-x: auto;
		display: flex;
		&-box{
			flex:0 0 12.8rem;
			height: 100%;
			margin-right: 1rem;
			&-name{
				width: 13.8rem;
				height: 3.9rem;
				font-size: 1.4rem;
				text-indent: 1em;
				background-color: #000;
				opacity: .5;
				color: #fff;
				position: relative;
				top: -1.7rem;
			}
			&-price{
				font-size: 1.7rem;
				color: #f23030;
			}
			img{
				width: 6.8rem;
				height: 9.4rem;
				display: block;
				margin:0 auto;
			}
		}
	}
/*产品参数标签*/
	.parameters{
		width: 100%;
		font-size: 1.2rem;
		color: #b5b5b5;
		padding-left: .9rem;
		border-top: .2rem solid #dddddd;
		border-bottom: .2rem solid #ebebeb;
		&-top{
			height: 5.6rem;
			line-height: 5.6rem;
			.border-bottom();
			.highPrice{
				text-decoration: line-through;
			}
		}
		&-bottom{
			height: 5.6rem;
			line-height: 5.6rem;
		}
	}
	.shopNav{
		height: 4.6rem;
		width: 100%;
		.border-top();
		background-color: #fff;
		z-index: 100;
		position: fixed;
		bottom: 0rem;
		display: flex;
		justify-content: space-between;
		&-left{
			flex: 0 0 5.2rem;
			text-align: center;
			font-size: 1.2rem;
			color: #666666;
			border-right: .1rem solid #ebebeb;
		}
		&-add{
			color:#f23030;
			font-size: 1.2rem;
			text-align: center;
			flex: 1 1 10.6rem;
			line-height: 4.6rem;
		}
		&-pay{
			font-size: 1.2rem;
			line-height: 4.6rem;
			text-align: center;
			flex: 1 1 10.6rem;
			color: #fff;
			background-color: #f23030;
		}
	}
</style>