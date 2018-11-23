<template>
	<div class="page">
		<topbar></topbar>
		<div class="menus" v-for="(n,index) in list" :key='index'>
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
		<van-submit-bar
		  :price="3050"
		  button-text="提交订单"
		  @submit="onSubmit"
			/>
	</div>
</template>

<script>
	import topbar from '../topbar'
	export default{
		name:'menus',
		components:{
			topbar,
		},
		data(){
			return{
				list:[
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
					},
					{
						id:4,
					  imgUrl:'/static/images/index8.jpg',
					  name:'中国神话传说',
					  price:209.00,
					  originalPrice:249.00,
					  tag:'划算'

					},
					{
					  id:5,
					  imgUrl:'/static/images/index9.jpg',
					  name:'小窗幽记',
					  price:69.00,
					  originalPrice:99.00,
					  tag:'5折'

					},
					{
					  id:6,
					  imgUrl:'/static/images/index10.jpg',
					  name:'杨万里选集',
					  price:59.00,
					  originalPrice:88.00,
					  tag:'好货'
					},]
			}
		},
		methods:{
			cancle(index){
				this.$dialog.confirm({
			      message: '订单取消之后不能恢复，确定要取消订单吗？'
			    }).then(() => {
				 this.list.splice(index,1)
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

<style lang="less">
	.page{
		padding-bottom: 50px;
	}
	.menus{
		width: 100%;
		margin-top: 1.5rem;
		}
	.van-card{
		height: 10rem;
		font-size: 1.4rem;
		padding-left: 11.5rem;
		&__thumb{
			height: 8.8rem;
			width: 5.4rem;
			img{
				width: 100%;
				height: 100%
			}
		}
		&__title{
			height: 2rem;
			font-size: 1.3rem;
			line-height: 1.5rem;

		}
		&__desc{
			font-size: 1.1rem;
			max-height: 2rem;
			line-height: 2rem;
		}
		&__right{
			line-height: 2rem;
			font-size: 1.3rem;
		}
		&__num{
			font-size: 1.1rem;
		}
	}
	
	.van-button--mini{
		color: #f23030;
		border:1px solid #f23030;
		width: 4.7rem;
		height: 2rem;
		line-height: 2rem;
	}
	.btn-del{
			font-size: 1.2rem;
		}
</style>