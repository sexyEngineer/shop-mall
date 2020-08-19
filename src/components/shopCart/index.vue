<template>
  <div>
    <p class="shopTitle">我的购物车</p>
    <div style="margin-bottom: 100px;">
    <div class="content" v-for="(item,index) in shopList" :key="index">
          <van-card
            :num="item.number"
            :price="item.retail_price"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
          >
            <template #footer>
              <van-button size="mini" @click="jiesuan(item)" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none">结算</van-button>
              <van-button size="mini" @click="deleteShop(item)" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none">删除</van-button>
            </template>
        </van-card>
    </div>
    </div>
    <van-submit-bar button-text="去结算"  @submit="onSubmit">
        <van-checkbox>全选</van-checkbox>
        <span style="width: 3rem;margin-left: 50px">总计:{{totalPrice}}</span>
    </van-submit-bar>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from "../../Layout/footNav";
  import {cartList , shopCartDeleteAction} from '../../api/api'
  export default {
    data(){
      return{
        shopList: '',
        params:{
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
          id: '',
        },
        //总价
        totalPrice: '',
      }
    },
    components:{
      footNav,
    },
    computed:{

    },
    methods:{
      //查询购物车
      getCartList() {
        cartList(this.params).then(res => {
          this.shopList = res.data.data
        })
      },
      //删除商品
      deleteShop(item) {
        this.params.id = item.id
        this.$dialog.confirm({
          title: '从购物删除商品',
          // message: '弹窗内容',
        })
          .then(() => {
            this.$toast('商品删除成功')
            shopCartDeleteAction(this.params);
            this.getCartList();
          })
          .catch(() => {
            this.$toast('删除操作已取消')
          });
      },
      //点击结算
      jiesuan(item){
      },
      // 去结算
      onSubmit() {
        this.$router.push('/orderDetails')
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
    margin: 5px 0px 5px;
  }
</style>
