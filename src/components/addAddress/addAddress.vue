<template>
	<div>
		<topbar></topbar>
		<van-address-edit
		 :area-list="areaList"
		  show-postal
		  show-delete
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  @save="onSave"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
	import topbar from '../topbar'

	export default {
		name:'addAddress',
		components:{
			topbar,
		},
  data() {
    return {
    	areaList:[1,2],
      searchResult: []
    }
  },

  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
      this.router.go(-1)
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style scoped lang="less"></style>