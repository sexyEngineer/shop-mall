<template>
  <div>
    <p class="shopTitle">我的购物车</p>
    <div style="margin-bottom: 100px;">
      <van-checkbox-group v-model="result" ref="checkboxesAll">
        <div class="content" v-for="(item,index) in shopList" :key="index">
              <van-card
                :num="item.number"
                :price="item.retail_price"
                :title="item.goods_name"
                :thumb="item.list_pic_url"
                @click="toggle(index,item)"
              >
                <template #footer>
                  <van-checkbox :name="item" ref="checkboxes" checked-color="#0066cc" style="position: absolute;left: 5px;top: 45px"/>
                </template>
            </van-card>
        </div>
        <van-submit-bar button-text="去结算"  @submit="onSubmit" v-if="result.length != 0">
            <van-button  @click="quanxuan" style="border: none" v-if="allcheck">全选</van-button>
          <van-button  @click="Qxquanxuan" style="border: none" v-else>取消</van-button>
            <span style="width: 3rem;margin-left: 50px;color: #cc6600">总计:￥{{totalPrice}}</span>
        </van-submit-bar>
        <van-submit-bar button-text="去结算"  @submit="onSubmit" disabled v-else>
          <van-button  @click="quanxuan" style="border: none" v-if="allcheck">全选</van-button>
          <van-button  @click="Qxquanxuan" style="border: none" v-else>取消</van-button>
          <span style="width: 3rem;margin-left: 50px;color: #cc6600">总计:￥{{totalPrice}}</span>
        </van-submit-bar>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
  import {cartList , shopCartDeleteAction,cartSubmitAction} from '../../api/api'
  export default {
    data(){
      return{
        shopList: '',
        params:{
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
          id: '',
        },
        cartParams:{
          allPrise: '',
          goodsId: '',
          openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
        },
        result: [],
        //总价
        // totalPrice: '',
        //显示全选全部选
        allcheck: true,
      }
    },
    components:{
    },
    computed:{
      totalPrice: function () {
        var total =0;
        if (this.result.length != 0) {
        for(var i = 0;i<this.result.length;i++){
          var item = this.result[i];
          total +=item.retail_price*item.number;
        }
        }
        return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
      }
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
      // 去结算
      onSubmit() {
        this.cartParams.allPrise = this.totalPrice;
        cartSubmitAction(this.cartParams).then(res => {
          if (res.data.data == true) {
            this.$router.push({path:'/orderDetails'})
          }else{
             this.$toast('购物车信息有误')
          }
        })
      },
      //选中商品
      toggle(index,item) {
        this.$refs.checkboxes[index].toggle();
        this.cartParams.goodsId = this.cartParams.goodsId.concat(item.goods_id + ',');
      },
      //全选商品
      quanxuan() {
        this.allcheck = false;
        this.$refs.checkboxesAll.toggleAll(true);
      },
      Qxquanxuan() {
        this.allcheck = true;
        this.$refs.checkboxesAll.toggleAll(false);
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
