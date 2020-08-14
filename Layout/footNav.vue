<template>
  <div style="margin-top: 50px">
    <van-tabbar v-model="active" @change="onChange" style=";border-radius: 5px" active-color="#c60" inactive-color="#c2ccd0">
    <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="new-arrival" to="/BestSellers">热卖</van-tabbar-item>
    <van-tabbar-item icon="weapp-nav" to="/classification">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart" to="/shopCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="myCenter">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        active: 0,
      }
    },
    methods:{
      onChange(index) {
        this.active = index;
        console.log(this.active)
      },
    },
    created() {
      this.onChange();
    }
  }
</script>

<style scoped>
</style>
