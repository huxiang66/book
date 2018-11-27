<template>
	<div class="page">
		<topbar></topbar>
		<img :src="introductions[this.getId-1].imgUrl" alt="." class="bigPic">
		<div class="share">
			<div class="share-left">
				{{introductions[this.getId-1].name}}
			</div>
			<div class="share-right">
				<img src="/static/images/intro1.png" alt=".">
				<p @click="share">分享</p>
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
						<div class="products-box" 
							v-for="(n,index) in recommend"
							@click="set"
							>
							<img :src="n.imgUrl">
							<div class="products-box-name">
								{{n.name}}
							</div>
							<div class="products-box-price">
								￥{{n.price}}
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="产品参数">
					<div class="h27"></div>

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
			<router-link to="/index">
				<img src="/static/images/index13.png" alt=".">
				<p>首页</p>
			</router-link>
			</div>
			<div class="shopNav-left">
				<img src="/static/images/index17.png" alt=".">
				<p>客服</p>
			</div>
			<div class="shopNav-left" @click="toCar">
				<!-- 判断是否有已选购商品跳转路由 -->
				<!-- <router-link to="shopcar"> -->
					<img src="/static/images/index18.png" alt=".">
					<p>购物车</p>
					<span class="shopNav-add-num" v-show="shopCarNum!=0">{{shopCarNum}}</span>
				<!-- </router-link> -->
			</div>
			<div class="shopNav-add" @click="addCar">
				<p>加入购物车</p>
			</div>
			<div class="shopNav-pay">
				<p>立即购买</p>
			</div>

		</div>
		<!-- 加入购物车 遮罩+弹窗-->
		<div class="mask" @touchmove.prevent v-show="maskShow">
			<div class="mask-wrap">
				<div class="mask-wrap-top">
					<img class="mask-wrap-top-img" :src="introductions[this.getId-1].imgUrl" alt=" ">
					<div class="mask-wrap-top-text">
						<h3>{{introductions[this.getId-1].name}}</h3>
						<p>￥{{introductions[this.getId-1].price}}</p>
					</div>
					<div class="mask-wrap-top-close" @click="maskShow=false">×</div>
				</div>
				<div class="mask-wrap-mid">
					<p>购买数量</p>
					<van-stepper v-model="value" />
				</div>
				<div class="mask-wrap-bottom">
					<van-button size="large" type="danger" @click="ok">确认</van-button>
				</div>
			</div>
		</div>
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
			this.shopCarNum=window.localStorage.buyNum
		},
		data(){
			return {
				active: 2,
				show: false,
				getId:'',
				maskShow:false,
				value:1,
				shopCarNum:0,
				introductions:[
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
					// 产品推荐
					recommend:[{
					  id:10,
					  imgUrl:'/static/images/index8.jpg',
					  name:'唐诗别载集',
					  price:150.00,
					  originalPrice:188.00
					},
					{
					  id:3,
					  imgUrl:'/static/images/index7.jpg',
					  name:'中国艺术精神',
					  price:119,
					  originalPrice:188.00
					},
					{
						id:9,
					  imgUrl:'/static/images/index7.jpg',
					  name:'说文解字',
					  price:128.00,
					  originalPrice:158.00
					},
					{
					  id:7,
					  imgUrl:'/static/images/index11.jpg',
					  name:'哲学概论',
					  price:109.00,
					  originalPrice:129.00

					},
					]
				}

			},
		methods:{
		    ok(){
		    	window.localStorage.buyNum=this.value;
		    	console.log(window.localStorage)
		    	this.maskShow=false;
		    	this.$toast.success('加入成功');
		    },
		    set(a){
		    	this.getId=2;
		    },
		    share(){
		    	window.location.href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=你的网址&sharesource=qzone&title=图书小店&pics=http://localhost:8080/static/images/index8.jpg&summary=你的分享描述信息"
		    },
		    addCar(){
		    	if(window.localStorage.name!=null){
		    		this.maskShow=true;
		    	}else{
		    		this.$router.push('/login')
		    	}
		    	
		    },
		    toCar(){
		    	if(this.shopCarNum!=0){
		    		this.$router.push('/account')
		    	}else{
		    		this.$router.push('/shopcar')
		    	}
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
	.page{
		position: relative;
	}
/*产品参数标签*/
	.parameters{
		width: 100%;
		font-size: 1.2rem;
		color: #b5b5b5;
		padding-left: .9rem;
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
		z-index: 99;
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
			&-num{
				display: block;
				width: 1rem;
				height: 1rem;
				line-height: 1rem;
				border: .1rem solid #c00;
				border-radius: 50%;
				position: relative;
				bottom: 4rem;
				left: 3.7rem;
				color: #c00;
			}
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
	.mask{
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,.5);
		z-index: 100;
		&-wrap{
			width: 100%;
			height: 25rem;
			background-color: #fff;
			z-index: 101;
			position:fixed;
			bottom: 0;
			&-top{
				height: 12.2rem;
				width: 100%;
				padding: 1rem .4rem 0 1.2rem;
				display: flex;
				justify-content: space-between;
				&-img{
					width: 6rem;
					height: 9rem;
				}
				&-text{
					flex: 1;
					padding-left: .8rem;
					h3{
						font-size: 1.4rem;
						color: #333333;
					}
					p{
						font-size: 1.2rem;
						color: #f23030;
					}
				}
				&-close{
					width: 2rem;
					height: 2rem;
					border: .1rem solid #919191;
					border-radius: 50%;
					text-align: center;
					line-height: 1.8rem;
				}
			}
			&-mid{
				width: 100%;
				height: 6rem;
				padding: 0 1.2rem 0 1.3rem;
				border-top: .1rem solid #ebebeb;
				border-bottom: .1rem solid #ebebeb;
				display: flex;
				justify-content: space-between;
				align-items: center;
				p{
					font-size: 1.4rem;
					color: #000;
				}
				.van-stepper{
					width: 14.2rem;
					height: 4rem;
					display: flex;
					justify-content: space-between;
					
				}
				.van-stepper__plus{
					width: 100px;
				}
			}
			&-bottom{
				padding: 1.2rem 1.2rem 0 1.2rem;
			}
		}
	}

</style>