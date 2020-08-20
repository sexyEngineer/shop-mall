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
    <!--              <van-button size="mini" @click="jiesuan(item)" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none"></van-button>-->
                  <van-checkbox :name="item" ref="checkboxes" checked-color="#0066cc" style="position: absolute;left: 5px;top: 45px"/>
    <!--              <van-button size="mini" @click="deleteShop(item)" style="background: #CC6600;color: #ffffff;padding: 6px 6px; border-radius: 8px;border: none">删除</van-button>-->
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
        result: [],
        //总价
        // totalPrice: '',
        //显示全选全部选
        allcheck: true,
      }
    },
    components:{
      footNav,
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
      //点击结算
      jiesuan(item){

      },
      // 去结算
      onSubmit() {
        this.$router.push('/orderDetails')
      },
      //选中商品
      toggle(index,item) {
        this.$refs.checkboxes[index].toggle();
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
