<template>
	<div>
		<div class="memberInfor">
			<div class="memberInfor-left">
				<img src="/static/images/member1.png" alt=".">
				<div class="memberInfor-left-name">
					<p>Hu xiang</p>
					<p>普通会员</p>
				</div>	
			</div>
		</div>
		<div class="h12"></div>
		<div class="myMenu">
			<span>我的订单</span>
			<span>&gt;&gt;</span>
		</div>
		<div class="goods">
			<div class="goods-box" v-for="(g,index) in 4" :key="index">
				<img src="" alt=".">
				<p>先付款</p>
				<span class="stateNum">1</span>
			</div>
		</div>
		<div class="myInfor" v-for="(i,index) in 6">
			<div class="myInfor-left">
				<img src="/static/images/member3.png" alt=".">
				<span>收货人信息</span>
			</div>
			<div class="myInfor-right">
				&gt;&gt;
			</div>
		</div>
		<!-- 退出登录 -->
		<div class="myInfor exit-logon">
			<div class="myInfor-left">
				<img src="/static/images/member2.png" alt=".">
				<span>退出登录</span>
			</div>
		</div>
		<copyright></copyright>
	</div><!-- 结束 -->
</template>

<script>
	import copyright from '../copyright.vue';
	export default{
		name:'center',
		components:{
			copyright,
		},
		data(){
			return{

			}
		}
	}
</script>

<style scoped lang="less">
/*.1rem单边框*/
.border-top(){
	border-top:.1rem solid #ebebeb;
}
.border-bottom(){
	border-bottom:.1rem solid #ebebeb;
}

	.memberInfor{
		width: 100%;
		height: 8.6rem;
		background-color: #f23030;
		padding-left: 1.6rem;
		display: flex;
		align-items: center;
		&-left{
			display: flex;
			align-items: center;
			img{
				width: 4.6rem;
				height: 4.6rem;
				border: .2rem solid #f9acac;
				border-radius: 50%;
				margin-right: 1.3rem;
			}
			&-name{
				color:#fff;
				font-size: 1.2rem;
			}
		}
	}
	.h12{
		height: 1.2rem;
		background-color: #f7f7f7;
	}
	.myMenu{
		height: 6.4rem;
		width: 100%;
		color: #666666;
		font-size: 1.3rem;
		padding: 0 1.8rem 0 2.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.border-top();
		.border-bottom();
	}
	.goods{
		height: 6.8rem;
		.border-bottom();
		display: flex;
		margin-bottom: .8rem;
		justify-content: space-around;
		align-items: center;
		&-box{
			position: relative;
			img{
				width: 1.9rem;
				height: 1.6rem;
				display: block;
				margin:0 auto;
			}
			p{
				color: #666666;
				font-size: 1.2rem;
				height: 1.4rem;
				height: 1.4rem;
				margin-top: 1.9rem;
			}
		}
		.stateNum{
			display: inline-block;
			width: 1.6rem;
			height: 1.6rem;
			text-align: center;
			line-height: 1.6rem;
			color:#ff4644;
			border: .1rem solid #ff4644;
			border-radius: 50%;
			position: absolute;
			top: 0rem;
			left: 1.3rem;
		}
	}

	/*6个信息块*/
	.myInfor{
		height: 5.5rem;
		width: 100%;
		font-size: 1.3rem;
		color: #666666;
		.border-top();
		.border-bottom();
		margin-top: -.1rem;
		padding:0 1.7rem 0 2.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-left{
			display: flex;
			img{
				width: 1.5rem;
				height: 1.5rem;
			}
			span{
				align-self: center;
				margin-left: 1.2rem;
			}
		}
	}
	/*退出登录*/
	.exit-logon{
		margin-top: .8rem;
	}
</style>