<template>
  <div>
    <van-nav-bar title="标题" left-text="返回"left-arrow @click-left="onClickLeft"/>
    <van-grid :gutter="5" :column-num="2">
      <van-grid-item v-for="(item,index) in listAction" :key="index" @click="goodsDetail(item)">
      <img :src="item.list_pic_url" style="width: 4rem"/>
        <span>{{item.name}}</span>
        <span style="color: #cc6600">￥{{item.retail_price}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import {listAction} from '../api/api'
  export default {
    data(){
      return{
        listAction:'',
        params:{
          openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        },
      }
    },
    created() {
      this.getlistAction();
    },
    methods:{
      //获取收藏列表
      getlistAction(){
        listAction(this.params).then(res => {
          this.listAction = res.data.collectGoodsList;
        })
      },
      //返回操作
      onClickLeft(){
        this.$router.go(-1)
      },
      //点击详情
      goodsDetail(item){
        if (item.id == undefined) {
          this.$router.push({path: '/product', query: {id: item}});
          return;
        }else {
          this.$router.push({path: '/product', query: {id: item.id}});
          return;
        }
      },
    }
  }
</script>

<style scoped>

</style>
