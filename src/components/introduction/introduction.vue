<template>
	<div>
		<topbar></topbar>
		<img src="/static/images/index10.jpg" alt="." class="bigPic">
		<div class="share">
			<div class="share-left">
				中国哲学简史
			</div>
			<div class="share-right">
				<img src="/static/images/intro1.png" alt=".">
				<p>分享</p>
			</div>
		</div>
		<div class="price">
			<p class="price-current">￥114.00</p>
			<p class="price-original">￥120.00</p>
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
							市场价 <span class="highPrice">￥130.00</span>
						</div>
						<div class="parameters-bottom">
							价格	<span>￥120.00</span>
						</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<div class="shopNav">
			<div class="shopNav-left">
				<img src="" alt=".">
				<p>首页</p>
			</div>
			<div class="shopNav-left">
				<img src="" alt=".">
				<p>客服</p>
			</div>
			<div class="shopNav-left">
				<img src="" alt=".">
				<p>购物车</p>
			</div>
			<div class="shopNav-add">
				<p>加入购物车</p>
			</div>
			<div class="shopNav-pay">
				<p>立即购买</p>
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
		data(){
			return {
				active: 2
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