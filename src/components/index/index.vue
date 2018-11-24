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
						{{allGoods}}
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
			<router-link to="/account">
				<div class="user-infor-box">
					<div class="top">
						<img src="/static/images/index15.png">
					</div>
					<div class="bottom">
						我的订单
					</div>
				</div>
			</router-link>
			</div>
			<div class="user-pic">
				<img src="/static/images/member1.png" alt="." v-if="userImg==null">
				<img :src="userImg" alt="." v-else>
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
			<div class="hot-box"
			   v-for="(h,hindex) in hot"
			  :key="hindex"
			   @click="toDetails"
			   >
				<router-link :to="{path:'/introduction',query:{id:h.id}}">
				<div class="hot-box-top">
					<img :src="h.imgUrl" alt=".">
					<p>{{h.name}}</p>
				</div>
				<div class="hot-box-price">
					￥{{h.price}}
				</div>
				</router-link>
			</div>
		</div>
		<div class="h10"></div>
		<div class="recommend-btn">
			<van-tabs type="card">
			  <van-tab title="新书推荐">
			  	<div class="recommend">
					<div class="recommend-box"
					    v-for="(r,rindex) in newBooks"
					    :key="rindex">
					    <router-link :to="{path:'/introduction',query:{id:r.id}}">
						<img :src="r.imgUrl" alt=".">
						<h4>{{r.name}}</h4>
						<p>￥{{r.price}}</p>
						</router-link>	
					</div>
				</div>
			  </van-tab>
			  <van-tab title="好书推荐">
			  	<div class="recommend">
					<div class="recommend-box" v-for="(r,rindex) in wellBooks" :key="rindex">
						<router-link :to="{path:'/introduction',query:{id:r.id}}">
						<img :src="r.imgUrl" alt=".">
						<h4>{{r.name}}</h4>
						<p>￥{{r.price}}</p>
						</router-link>
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
		<div class="recommend">
			<div class="recommend-box" v-for="(r,rindex) in wellBooks" :key="rindex">
				<router-link :to="{path:'/introduction',query:{id:r.id}}">
					<img :src="r.imgUrl" alt=".">
					<h4>{{r.name}}</h4>
					<p>￥{{r.price}}</p>
				</router-link>
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
		mounted(){
			this.userImg=window.localStorage.userImg;
		},
		data(){
			return{
				userImg:'',
				allGoods:'15',
				list:['/static/images/index3.png','/static/images/index4.png'],

				hot:[{
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
					],
				newBooks:[{
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
					  imgUrl:'/static/images/index12.jpg',
					  name:'中国文化传说',
					  price:112.00,
					  originalPrice:138.00

					}
					],
				wellBooks:[{
					  id:9,
					  imgUrl:'/static/images/index7.jpg',
					  name:'说文解字',
					  price:128.00,
					  originalPrice:158.00

					},
					{
					  id:10,
					  imgUrl:'/static/images/index8.jpg',
					  name:'唐诗别载集',
					  price:150.00,
					  originalPrice:188.00

					},
					{
					  id:11,
					  imgUrl:'/static/images/index9.jpg',
					  name:'小窗幽记',
					  price:69.00,
					  originalPrice:99.00

					},
					{
					  id:12,
					  imgUrl:'/static/images/index10.jpg',
					  name:'杨万里选集',
					  price:59.00,
					  originalPrice:88.00

					},
					]

			}
		},
		methods:{
			toDetails(){
				// this.$router.push({
				// 	path:'/introduction/:id'
				// })
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
		margin-top: 5rem;
		&-box{
			width: 40%;
			margin-bottom: 5rem;
			display: inline-block;
			margin-left: 2.4rem;
			img{
				width: 66%;
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