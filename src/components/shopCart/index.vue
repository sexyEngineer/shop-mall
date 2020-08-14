<template>
  <div style="height: 17rem">
    <p class="shopTitle">我的购物车</p>
    <div class="content" v-for="(item,index) in shopList" :key="index">
          <van-card
            :num="item.number"
            :price="item.retail_price"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
          >
            <template #footer>
              <van-button size="mini" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none">结算</van-button>
              <van-button size="mini" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none">删除</van-button>
            </template>
        </van-card>
    </div>
    <van-submit-bar :price="3050" button-text="去结算"  @submit="onSubmit">
        <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from "../../../Layout/footNav";
  import {cartList} from '../../api/api'
  export default {
    data(){
      return{
        shopList: '',
        params:{
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        }
      }
    },
    components:{
      footNav,
    },
    methods:{
      getCartList() {
        cartList(this.params).then(res => {
          this.shopList = res.data.data
        })
      },
      onSubmit() {
        this.$router.push('/orderDetails')
        console.log('跳转成功')
      }
    },
    created() {
      this.getCartList();
    }
  }
</script>

<style scoped>
.shopTitle{
  text-align: center;
  background: #CC6600;
  font-size: 16px;
  padding: 10px 0px 15px;
  color: #ffffff;
}
.van-submit-bar{
  position: fixed;
  bottom: 50px;
  left: 0;
}
.van-card{
  background: #ffffff;
  border-radius: 10px;
}
  .content{
    padding: 0px 10px;
    margin-top: 10px;
  }
</style>
