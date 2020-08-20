<template>
  <div style="height: 17rem">
    <van-nav-bar title="个人中心"/>
    <div class="myCenter">
      <img src="../../assets/timg.gif"/>
      <div class="user">用户名</div>
    </div>
    <van-divider content-position="left">我的购物</van-divider>
    <van-grid :gutter="3">
      <van-grid-item icon="goods-collect-o" text="收藏夹" @click="lookCollect"/>
      <van-grid-item icon="todo-list-o" text="浏览记录" />
      <van-grid-item icon="orders-o" text="我的订单" />
      <van-grid-item icon="idcard" text="我的卡包" />
    </van-grid>
    <van-divider content-position="left">我的管理</van-divider>
    <van-grid :gutter="3">
      <van-grid-item icon="logistics" text="收货地址" @click="address"/>
    </van-grid>
    <van-divider content-position="left">联系客服</van-divider>

    <van-grid :gutter="3">
      <van-grid-item icon="comment-circle-o" text="联系客服" />
      <van-grid-item icon="question-o" text="帮助中心" />
      <van-grid-item icon="envelop-o" text="意见反馈" @click="feedback" />
    </van-grid>
  </div>
</template>

<script>
  export default {
    components:{
    },
    methods:{
      lookCollect(){
        this.$router.push('/collect')
      },
      address(){
        this.$router.push('/address')
      },
      feedback(){
        this.$router.push('/Feedback')
      }
    }
  }
</script>

<style scoped>
  .myCenter{
    background: #CC3333;
    height: 2.5rem;
    border-radius: 10px;
  }
.myCenter img{
  width: 70px;
  height: auto;
  padding: 17px;
  border-radius: 100%;
}
  .myCenter .user{
    color: white;
    font-size: 16px;
    display: inline-block;
    position: relative;
    top: -35px;
    left: 0px;
  }
  .van-grid-item{

  }
</style>
