<template>
	<div>
		<div class="search">
			<img src="/static/images/back.png" alt="." class="search-back" @click="back">
			<van-field v-model="value" placeholder="请输入..." />
			<img src="/static/images/search2.png" alt="." class="search-go" @click="popup">
		</div>
		<div class="history">
			<p class="history-title">历史搜索...</p>
			<div class="history-content">
				<div class="history-content-box" v-for="(n,index) in 11" :key="index">
					12
				</div>
			</div>
		</div>
		<div class="history-delete">
			<van-button size="large">清空历史记录</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'search',
		data(){
			return {
				value:null,
			}
		},
		methods:{
			onSearch:()=>{},

			back:function(){
				 this.$router.go(-1);
			},
			popup(){
				if(this.value!=null){
					this.$router.push('/index')
				}
				else{
					this.$dialog.alert({
				      	message: '输入点啥...'
				    });
				}
				
			}
		}
	}
	
</script>

<style scoped lang="less">
	.search{
		margin-top: 1rem;
		height: 3.9rem;
		width: 100%;
		padding: 0 1.5rem 0 1.1rem;
		border-top:.1rem solid #bfbfbf;
		border-bottom:.1rem solid #bfbfbf;
		display: flex;
		align-items: center;
		&-back{
			width: 1.7rem;
			height: 1.7rem;
		}
		&-go{
			width: 2rem;
			height: 2rem;
		}
	}
	.history{
		width: 100%;
		margin-top: 1.4rem;
		padding-left: 1.9rem;
		border-top: .1rem solid #dddddd;
		&-title{
			font-size: 1.2rem;
			color: #333333;
			height: 1.2rem;
			line-height: 1.2rem;
			margin-top: 2rem;
			margin-bottom:1.5rem;
		}
		&-content{
			width: 100%;
			&-box{
				width: 3.9rem;
				height: 3.2rem;
				border:.1rem solid #dddddd;
				margin-bottom: 1rem;
				text-align: center;
				line-height: 3.2rem;
				margin-left: .9rem;
				display: inline-block;
			}
		}
		
	}
	.history-delete{
			width: 29rem;
			margin:0 auto;
			margin-top: 1.7rem;
		}

</style>