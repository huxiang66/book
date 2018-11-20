<template>
	<div>
		<div class="menus">
			<div class="menus-title">
				<img src="/static/images/menu1.png" alt=".">
				<span>已出库</span>
			</div>
			<div class="menus-content">
				<div class="menus-content-left">
					<img src="/static/images/index6.jpg" alt=".">
				</div>
				<div class="menus-content-mid">
					<div class="menus-content-mid-name">
						取个书名好难
					</div>					
					<div class="menus-content-mid-infor">
						最畅销吧
					</div>
					<div class="menus-content-mid-infor">
						是的最畅销吧
					</div>					
				</div>
				<div class="menus-content-right">
					<div class="menus-content-right-price">25.00</div>
					<div class="menus-content-right-num">×1</div>
				</div>
			</div>
			<div class="menus-totle">
				<div class="menus-totle-num">
					共 1 件商品
				</div>
				<div class="menus-totle-money">
					<span>合计：</span><i>￥500</i>
				</div>
			</div>
			<div class="menus-confirm">
				<div class="menus-confirm-left">
					延长收货
				</div>
				<div class="menus-confirm-right">
					确认收货
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'menus',
		data(){
			return{

			}
		}
	}
</script>

<style scoped lang="less">
	.menus{
		width: 100%;
		padding: 0 1.7rem 0 1.2rem;
		&-title{
			height: 5.5rem;
			color: #6e6e6e;
			font-size: 1.4rem;
			line-height: 5.5rem;
		}
		&-content{
			height: 9.8rem;
			background-color: #f9f9f9;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-left{
				img{
					width: 6.5rem;
					height: 6.5rem;
					border-radius: 1.2rem;
				}
			}
			&-mid{
				&-name{
					font-size: 1.4rem;
					color: #000;
					height: 2rem;
					line-height: 2rem;
				}
				&-infor{
					font-size: 1.2rem;
					color: #6e6e6e;
					height: 1.8rem;
					line-height:1.8rem;
				}
			}
			&-right{
				font-size: 1.4rem;
				color: #000;
				&-price{
					margin-bottom: 1rem;
				}
			}
		}
		&-totle{
			height: 5rem;
			width: 100%;
			line-height: 5rem;
			text-align: right;
			border-top: .1rem solid #f5f5f5;
			border-bottom: .1rem solid #f5f5f5;
			&-num{
				display: inline-block;
				font-size: 1.4rem;
				color: #6e6e6e;

			}
			&-money{
				display: inline-block;
				margin-left: 1.4rem;
				span{
					font-size: 1.4rem;
					color: #6e6e6e;
				}
				i{
					font-size: 1.6rem;
					color: #f23030;
					font-style:normal
				}
			}
		}
		&-confirm{
			height: 5rem;
			width: 100%;
			text-align: right;
			display: table;
			padding-top: 0.75rem;
			&-left,&-right{
				display: inline-block;
				width: 9rem;
				height: 3.5rem;
				margin-left: 1.9rem;
				border:.1rem solid #f23030;
				text-align: center;
				line-height: 3.5rem;
				border-radius: .4rem;
				font-size: 1.4rem;
				color: #f23030;
			}
		}
	}
	
</style>