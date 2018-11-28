<template>
	<div class="page">
		<topbar></topbar>
		<!-- 安全环境 -->
		<div class="safe">
			<img src="/static/images/safe.png" alt=".">
			<p>您正在安全购物环境中，请放心购买</p>
		</div>
		<!-- 地址列表 -->
		<div class="address">
			<div class="address-name">
				<span>小明</span>  <span>13698282726</span>
			</div>
			<div class="address-infor">
				上海市虹口区同心路300弄100号8楼8室
			</div>
			<router-link to="/addAddress">
				<div class="more">&gt;&gt;</div>
			</router-link>
		</div>
	<div class="selected">精选特卖</div>
<!-- 已选商品列表 -->
	<div class="menus" v-for="(n,index) in showCar" :key='index'>
		<van-card
			:num=buyNum
			:tag="n.tag"
			:price="n.price"
			desc="作者"
			:thumb="n.imgUrl"  
			:title="n.name"
			:origin-price="n.originalPrice"
			>
		<div slot="footer">
			<van-button size="mini" @click="cancle(index)" class="btn-del">删除</van-button>
		</div>
		</van-card>
	</div>
	<div class="h10"></div>
	<div class="totalPrice">
		<div class="totalPrice-top">
			<span class="totalPrice-top-text">订单金额</span>
			<span class="totalPrice-top-price">￥{{total}}</span>
		</div>
		<div class="totalPrice-mid">
			<span class="totalPrice-mid-text">商品总金额</span>
			<span class="totalPrice-mid-price">￥{{sum}}</span>
		</div>
		<div class="totalPrice-bottom">
			<span class="totalPrice-bottom-text">运费</span>
			<span class="totalPrice-bottom-price">￥{{freight}}</span>
		</div>
	</div>
	<div class="pay">
		<van-button round type="danger" @click="pay" v-if="show">微信支付</van-button>
		<van-button loading round type="danger" v-if="!show"/>
	</div>
		
	</div>
</template>

<script>
	import topbar from '../topbar'
	export default{
		name:'account',
		components:{
			topbar,
		},
		created(){
			const storage=window.localStorage;
			const getId=parseInt(storage.getId);
			this.buyNum=storage.buyNum;
			this.showCar=this.shopCar.slice(getId-1,getId);
			console.log(window.localStorage)
			},
		data(){
			return {
				show:true,
				showCar:[],
				buyNum:0,
				freight:5,
			    shopCar:
			    [{
					  id:1,
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:88.00,
					  originalPrice:109.00,
					  tag:'折扣',
					},
					{
						id:2,
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:138,
					  originalPrice:159.00,
					  tag:'折扣',
					},
					{
					  id:3,
					  imgUrl:'/static/images/index7.jpg',
					  name:'中国艺术精神',
					  price:119,
					  originalPrice:188.00,
					  tag:'折扣',
					},
					{
					  id:4,
					  imgUrl:'/static/images/index8.jpg',
					  name:'中国神话传说',
					  price:209.00,
					  originalPrice:249.00,
					  tag:'折扣',
					},
					{
					  id:5,
					  imgUrl:'/static/images/index9.jpg',
					  name:'小窗幽记',
					  price:69.00,
					  originalPrice:99.00,
					  tag:'折扣',
					},
					{
					  id:6,
					  imgUrl:'/static/images/index10.jpg',
					  name:'杨万里选集',
					  price:59.00,
					  originalPrice:88.00,
					  tag:'折扣',
					},
					{
					  id:7,
					  imgUrl:'/static/images/index11.jpg',
					  name:'哲学概论',
					  price:109.00,
					  originalPrice:129.00,
					  tag:'折扣',
					},
					{
					  id:8,
					  imgUrl:'/static/images/display1.png',
					  name:'故都风物',
					  price:109.00,
					  originalPrice:129.00,
					  tag:'折扣',
					},
					{
					  id:9,
					  imgUrl:'/static/images/display2.png',
					  name:'梨园红雪录',
					  price:138.00,
					  originalPrice:159.00,
					  tag:'折扣',
					},
					{
					  id:10,
					  imgUrl:'/static/images/display3.png',
					  name:'论语新解',
					  price:118.00,
					  originalPrice:129.00,
					  tag:'折扣',
					},
					{
					  id:11,
					  imgUrl:'/static/images/display4.png',
					  name:'启功平传',
					  price:99.00,
					  originalPrice:119.00,
					  tag:'折扣',
					},
					{
					  id:12,
					  imgUrl:'/static/images/display5.png',
					  name:'山水有清音',
					  price:79.00,
					  originalPrice:99.00,
					  tag:'折扣',
					},
					
					{
					  id:13,
					  imgUrl:'/static/images/display6.png',
					  name:'世语新说',
					  price:88.00,
					  originalPrice:108.00,
					  tag:'折扣',
					},
					{
					  id:14,
					  imgUrl:'/static/images/display7.png',
					  name:'说文解字',
					  price:99.00,
					  originalPrice:108.00,
					  tag:'折扣',
					},
					{
					  id:15,
					  imgUrl:'/static/images/display8.png',
					  name:'古诗源',
					  price:66.00,
					  originalPrice:86.00,
					  tag:'折扣',
					},
					],
				}
			},
		computed:{
			sum:{
				get(){
					return this.buyNum*this.showCar[0].price;
				},
				set(){

				}
			},
			total:{
				get(){
					return this.buyNum*this.showCar[0].price+this.freight;
				},
				set(){
					
				}

			}
		},
		methods:{
			pay(){
				this.show=false
				// this.$router.push('/')
			},
		    confirm(){
		    	this.$router.push('/pay')
		    },
		    cancle(index){
				this.$dialog.confirm({
			      message: '订单取消之后不能恢复，确定要取消订单吗？'
			    }).then(() => {
				 this.showCar.splice(index,1);
				 this.sum=null;
				 this.total=null;
				}).catch(() => {
				  console.log('不删')

				});
			},
			onSubmit(){
				this.$router.push({
					path:'/account'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.page{
		margin-bottom: 50px;
	}
	.safe{
		width: 100%;
		height: 3.6rem;
		background-color: #e8eaf4;
		padding-left: 1.5rem;
		display: flex;
		align-items: center;
		img{
			width: 2.1rem;
			height: 2.1rem;
		}
		p{
			font-size: 1.2rem;
			color: #000;
		}
	}
	/*地址栏*/
	.address{
		width: 100%;
		height: 7rem;
		background-color: #f23030;
		opacity: .7;
		color: #fff;
		font-size: 1.3rem;
		padding: 0 1.2rem;
		position: relative;
		overflow: hidden;
		&-name,&-infor{
			height: 2.5rem;
			line-height: 2.5rem;
		}
		&-name{
			margin-top: .6rem;
		}
		&-infor{
			font-size: 1.1rem;
		}
		.more{
			height: 100%;
			width: 3rem;
			line-height:7rem;
			position: absolute;
			right:1.2rem;
			top:.8rem;
			margin-top: -.8rem;
			color: #fff;
		}
	}
	/*商品卡片样式*/
	.menus{
		width: 100%;
		margin-top: 1.5rem;
		}
	/*1rem高的间隔*/
	.h10{
		height: 1rem;
		background-color:#e8eaf4; 
	}
	/*精选特卖标题*/
	.selected{
		height: 3.2rem;
		width: 100%;
		padding-left: 1.5rem;
		font-size: 1.2rem;
		line-height: 3.2rem;
	}
	/*文字订单*/
	.totalPrice{
		height: 12.4rem;
		width: 100%;
		padding:0 1.4rem;
		&-top{
			height: 5rem;
			line-height:5rem;
			display: flex;
			justify-content: space-between;
			&-text{
				font-size: 1.2rem;
				color: #000;
				font-weight: 700;

			}
			&-price{
				font-size: 1.2rem;
				color:#f23030;
				font-weight: 700;
			}
		}
		&-mid{
			height: 3.4rem;
			line-height:3.4rem;
			display: flex;
			justify-content: space-between;
		}
		&-bottom{
			height: 4rem;
			line-height:4rem;
			display: flex;
			justify-content: space-between;
		}
	}
	/*支付按钮*/
	.pay{
		text-align: center;
	}
</style>