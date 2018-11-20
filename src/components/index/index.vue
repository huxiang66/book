<template>
	<div class="wrap">
		<div class="user">
			<img src="/static/images/index1.jpg" alt=".">
			<div class="user-infor">
				<div class="user-infor-left">
					1
				</div>
				<router-link to="/store">
				<div class="user-infor-box">
					<div class="top">
						15
					</div>
					<div class="bottom">
						全部商品
					</div>
				</div>
				</router-link>
			<div class="line">|</div>
			<router-link to="/center">
				<div class="user-infor-box">
					<div class="top">
						<img src="/static/images/index14.png">
					</div>
					<div class="bottom">
						会员中心
					</div>
				</div>
			</router-link>
			<div class="line">|</div>
				<div class="user-infor-box">
					<div class="top">
						<img src="/static/images/index15.png">
					</div>
					<div class="bottom">
						我的订单
					</div>
				</div>
			</div>
			<div class="user-pic">
				<img src="/static/images/index2.png" alt=".">
			</div>
		</div>
		<div class="swiper">
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(n,lindex) in list" :key="lindex">
			  	<img :src="n" alt=".">
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="h10"> </div>
		<div class="title">
			<h3>畅销热卖</h3>
		</div>
		<div class="hot">
			<div class="hot-box" v-for="(h,hindex) in hot" :key="hindex">
				<router-link to="/introduction">
				<div class="hot-box-top">
					<img :src="h.imgUrl" alt=".">
					<p>{{h.name}}</p>
				</div>
				</router-link>
				<div class="hot-box-price">
					￥{{h.price}}
				</div>
			</div>
		</div>
		<div class="h10"></div>
		<div class="recommend-btn">
			<van-tabs type="card">
			  <van-tab title="新书推荐">
			  	<div class="recommend" v-for="n in 2">
					<div class="recommend-box" v-for="(r,rindex) in 2" :key="rindex">
						<img src="/static/images/index9.jpg" alt=".">
						<h4>小窗幽记</h4>
						<p>￥98</p>
					</div>
				</div>
			  </van-tab>
			  <van-tab title="好书推荐">
			  	<div class="recommend" v-for="n in 2">
					<div class="recommend-box" v-for="(r,rindex) in 2" :key="rindex">
						<img src="/static/images/index10.jpg" alt=".">
						<h4>注试试是</h4>
						<p>￥98</p>
					</div>
				</div>
			  </van-tab>
			</van-tabs>
		</div>
		
	<div class="h10"></div>
		<div class="title">
			<h3>经典旧书</h3>
			<router-link to="/store">
				<span>&gt;&gt;</span>
			</router-link>
		</div>
		<div class="recommend" v-for="n in 2">
			<div class="recommend-box" v-for="(r,rindex) in 2" :key="rindex">
				<img src="/static/images/index9.jpg" alt=".">
				<h4>小窗幽记</h4>
				<p>￥98</p>
			</div>
		</div>
		<div class="h10"></div>
		<copyright></copyright>
	</div><!-- end -->

</template>

<script>
	import copyright from '../copyright.vue';
	export default{
		components:{
			copyright,
		},
		name:'index',
		
		data(){
			return{
				list:['/static/images/index3.png','/static/images/index4.png'],

				hot:[{
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:114.00
					},
					{
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:114.00
					},
					{
					  imgUrl:'/static/images/index5.jpg',
					  name:'中国哲学简史',
					  price:114.00
					},
					{
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:209.00
					},
					{
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:209.00
					},
					
					]
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../../common/less/mix.less';
	.h10{width: 100%; height: 1rem;background-color: #fbfbfb;}
	/*标题混合*/
	.title{
		.title();
	}
	.user{
		position: relative;
		img{
		width: 100%;
		height: 11.3rem;
			}
		&-infor{
		width: 100%;
		height: 5.2rem;
		display: flex;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		font-size: 1.2rem;
		color: #999999;
		&-left{
			flex: 0 0 13rem;
		}
		&-box{
			.top{
				height: 1.9rem;
				line-height: 1.9rem;
				font-size: 1.5rem;
				img{
				width: 1.4rem;
				height: 1.4rem;
				}
			}
			
			.bottom{
				line-height: 1.2rem;
				margin-top: .7rem;
			}
		}
		.line{
			height: 1.8rem;
			color: #999999;
		}
	}
		&-pic img{
				width: 7.8rem;
				height: 7.8rem;
				border: .2rem solid #cec3b9;
				border-radius: .3rem;
				position: absolute;
				left: 3rem;
				bottom: 1.2rem;
			}
	}
	.swiper{
		img{
			width: 100%;
			height: 15.5rem;
		}
	}
	/*畅销推荐*/
	.hot{
		width: 100%;
		margin-top: 3rem;
		padding-left: 0rem;
		height: 21.4rem;
		overflow-x: auto;
		display: flex;
		&-box{
			flex: 0 0 13.8rem;
			margin-right: 1rem;
			height: 21rem;
			border:.1rem solid #dddddd;
			border-radius: .4rem;
			padding: 0 .7rem 0 1.3rem;
			&-top{
				img{
					width: 6.2rem;
					height: 9.7rem;
					display: block;
					margin:0 auto;
					margin-top: 2rem;
					margin-bottom:2.5rem;
				}
				p{
					font-size: 1.2rem;
					height: 2rem;
					line-height: 2rem;
				}
			}
			&-price{
				width: 100%;
				height: 4.2rem;
				line-height: 4.2rem;
				font-size: 1.4rem;
				border-top: .1rem dashed #dddddd;
				color: #f23030;
			}
		}
	}
	
	.recommend{
		width: 100%;
		padding-left: 1.7rem;
		display: flex;
		margin-top: 5rem;
		justify-content: space-between;
		&-box{
			width: 16.6rem;
			margin-bottom: 5rem;
			img{
				width: 8.8rem;
				height: 12rem;
				display: block;
				margin:0 auto;
				margin-bottom: 4rem;
			}
			h4{
				font-size: 1.3rem;
				text-indent: 0rem;
			}
			p{
				font-size: 1.2rem;
				color: #f23030;
				text-indent: 0rem;
			}
		}
	}
	
</style>