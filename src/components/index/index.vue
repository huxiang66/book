<template>
	<div class="wrap">
		<div class="user">
			<img src="/static/images/index1.jpg" alt=".">
			<div class="user-infor">
				<div class="user-infor-left">
					1
				</div>
				<div class="user-infor-box">
					<div class="top">
						15
					</div>
					<div class="bottom">
						全部商品
					</div>
				</div>
			<div class="line">|</div>
				<div class="user-infor-box">
					<div class="top">
						<img src="/static/images/index14.png">
					</div>
					<div class="bottom">
						会员中心
					</div>
				</div>
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
			<div class="block">
			    <el-carousel trigger="click" height="150px">
			        <el-carousel-item v-for="(n,ind) in list" :key="ind">
			       		<img :src="n" alt=".">
			       		<h2>{{ind}}</h2>
			     	</el-carousel-item>
			    </el-carousel>
			 </div>
		</div>
		<div class="h10"> </div>
		<div class="title">
			<h3>畅销热卖</h3>
		</div>
		<div class="hot">
			<div class="hot-box" v-for="(h,hindex) in hot">
				<div class="hot-box-top">
					<img :src="h.imgUrl" alt=".">
					<p>{{h.name}}</p>
				</div>
				<div class="hot-box-price">
					￥{{h.price}}
				</div>
			</div>
		</div>
		<div class="h10"> </div>
		<div class="recommend-btn">
			<button>新书推荐</button>
			<button>好书推荐</button>
		</div>
		<div class="recommend">
			<div class="recommend-box" v-for="(r,index) in 4">
				<img src="/static/images/index9.jpg" alt=".">
				<h4>小窗幽记</h4>
				<p>￥98</p>
			</div>
		</div>
	<div class="h10"> </div>
		<div class="title">
			<h3>经典旧书</h3>
			<span>&gt;&gt;</span>
		</div>

		<div class="recommend">
			<div class="recommend-box" v-for="(r,index) in 4">
				<img src="/static/images/index9.jpg" alt=".">
				<h4>小窗幽记</h4>
				<p>￥98</p>
			</div>
		</div>
		<div class="h10"> </div>
		<div class="tabBar">
			<div class="tabBar-box">主页</div><span>|</span>
			<div class="tabBar-box">会员中心</div><span>|</span>
			<div class="tabBar-box">电脑版</div>
		</div>
		<div class="copyRight">
			<p>&copy;2018  MADE BY HuXiang</p>
			<p>版权所有：三家软件有限公司</p>
		</div>
		<ul class="nav">
			<li>
				<img src="/static/images/index13.png" class="icon-home">
			</li>
			<li>产品展示</li>
			<li>会员登录</li>
			<li>会员注册</li>
			<li>会员中心</li>
		</ul>
	</div><!-- end -->

</template>

<script>
	export default{
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
					  imgUrl:'/static/images/index6.jpg',
					  name:'中国晚清史(上下卷)',
					  price:209.00
					},
					{
					  imgUrl:'/static/images/index7.jpg',
					  name:'中国艺术精神',
					  price:118.00
					},
					{
					  imgUrl:'/static/images/index8.jpg',
					  name:'中国神话传说',
					  price:99.00
					}]
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
	.title{
		.title();
	}
	.hot{
		margin-top: 3rem;
		overflow-x: auto;
		height: 21.4rem;
		display: flex;
		justify-content: space-around;

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
		a{
			color: #666666;
			display: inline-block;
			font-size: 1.3rem;
			width: 9.8rem;
			height: 3.5rem;
			text-align: center;
			line-height: 3.5rem;
			&:link{
				text-decoration:none;
			}
		}
	}
	/**/
	a.router-link-active{
		color: #fff;
		background-color: #f23030;
		border-radius: 3.5rem;
	}
	.recommend{
		width: 100%;
		padding-left: 1.7rem;
		margin-top: 5.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
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
	.tabBar{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		padding: 0 10rem;
		display: flex;
		justify-content: space-between;
		&-box{
			font-size: 1.2rem;
			color: #323232;
		}
		span{
				
				font-size: 1.7rem;
				color: #f0f0f0;
			}
	}
	.copyRight{
		padding: 0 2rem;
		border-top: .1rem solid #f0f0f0;
		p{
			color:#999999;
			font-size: 1.2rem;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			margin-bottom: 1.2rem;
		}
	}
	.nav{
		width: 100%;
		height: 5.6rem;
		line-height: 5.6rem;
		display: flex;
		justify-content: space-around;
		li{
			border:.1rem solid #ebebeb;
			flex: 1;
			text-align: center;
			margin-right: -.1rem;
			font-size: 1.2rem;
			color: #666666;
		}
		.icon-home{
			margin-top: 1.2rem;
		}
	}
</style>