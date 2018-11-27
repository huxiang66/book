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
			<div class="address-name"></div>
			<div class="address-name"></div>
		</div>
	<div class="h10"></div>
	<div class="selected">精选特卖</div>
<!-- 已选商品列表 -->
	<div class="menus" v-for="(n,index) in shopCar" :key='index'>
		<van-card
			num=11
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
			<span class="totalPrice-top-price">￥221.00</span>
		</div>
		<div class="totalPrice-mid">
			<span class="totalPrice-mid-text">商品总金额</span>
			<span class="totalPrice-mid-price">￥221.00</span>
		</div>
		<div class="totalPrice-bottom">
			<span class="totalPrice-bottom-text">运费</span>
			<span class="totalPrice-bottom-price">￥5.00</span>
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
		data(){
			return {
				show:true,
			    shopCar:[
					{
					  id:1,
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:88.00,
					  originalPrice:109.00,
					  tag:'新品'
					},
					{
						id:2,
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:138,
					  originalPrice:159.00,
					  tag:'折扣'

					},
					{
					  id:3,
					  imgUrl:'/static/images/index7.jpg',
					  name:'中国艺术精神',
					  price:119,
					  originalPrice:188.00,
					  tag:'会员'
					}
					],
				
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
				 this.booklist.splice(index,1)
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