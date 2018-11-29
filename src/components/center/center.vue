<template>
	<div>
		<!-- 个人信息头 -->
		<div class="memberInfor">
			<div class="memberInfor-left">
				<img src="/static/images/member1.png" alt="." v-if="userImg==null">
				<img :src="userImg" alt="." v-else>

				<router-link to="/login">
				<div class="memberInfor-left-name"  v-if="username==null">
					<p>未登录</p>
				</div>
				</router-link>	
				<div class="memberInfor-left-name">
					<p>{{username}}</p>
					<p>{{level}}</p>
				</div>
					
			</div>
		</div>
		<div class="h12"></div>
		<!-- 我的订单 -->
		<div class="myMenu" @click="mymenu">
			<span>我的订单</span>
			<span>&gt;&gt;</span>
		</div>
		<!-- 待付款，待发货 -->
		<div class="goods">
			<div class="goods-box" v-for="(n,index) in obligation" :key="index" >
				<img :src="n.img" alt=".">
				<p>{{n.title}}</p>
				<span class="stateNum" v-if="n.stateNum>0">{{n.stateNum}}</span>
			</div>
		</div>
		<!-- 收货人的信息 -->
		<div class="myInfor" v-for="(i,index) in infor"  @click="showMore">
			<div class="myInfor-left">
				<img :src="i.img" alt=".">
				<span>{{i.classify}}</span>
			</div>
			<div class="myInfor-right">
				&gt;&gt;
			</div>
		</div>
		<!-- 退出登录 -->
		<div class="myInfor exit-logon" @click="signOut">
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
				username:'',
				level:'',
				userImg:'',
				obligation:
					[{
						img:'/static/images/member2.png',
						title:'待付款',
						stateNum:''
					},
					{
						img:'/static/images/member9.png',
						title:'待发货',
						stateNum:1
					},
					{
						img:'/static/images/member10.png',
						title:'待收货',
						stateNum:''
					},
					{
						img:'/static/images/member11.png',
						title:'已收货',
						stateNum:3
					}],
				infor:
					[ {
						img:'/static/images/member3.png',
						classify:'收货人信息'
					},
					{
						img:'/static/images/member4.png',
						classify:'我的收藏'
					},
					{
						img:'/static/images/member5.png',
						classify:'我的优惠券'
					},
					{
						img:'/static/images/member6.png',
						classify:'最新公告'
					},	
					{
						img:'/static/images/member7.png',
						classify:'个人资料'
					},
					{
						img:'/static/images/member8.png',
						classify:'修改密码'
					}],


			}
		},
		mounted(){
			this.username=localStorage.username;
			this.level=localStorage.level;
			this.userImg=localStorage.userImg;
		},
		methods:{
			signOut(){
				if(localStorage.username!=null){
					this.$dialog.confirm({
				    title: '退出登录',
			        message: '您要退出登录了吗？'
			    }).then(() => {
			    	localStorage.clear();
				    // this.$router.go(0);
				    location.reload()
				}).catch(() => {
				  
				});
			}else{
				this.$toast('未登录');
			}
				
				
			},
			mymenu(){
				if(localStorage.buyNum==null){
					this.$toast('暂无商品');
					return false
				}
				if(this.username!=null){
					this.$router.push('/account')
				}else{
					this.$router.push('/login')
				}
			},
			showMore(e){
				this.$toast('no more!');
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
			width: 1.2rem;
			height: 1.2rem;
			text-align: center;
			line-height: 1.2rem;
			color:#ff4644;
			border: .1rem solid #ff4644;
			background-color: #fff;
			border-radius: 50%;
			position: absolute;
			top: 0rem;
			left: 1.8rem;
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