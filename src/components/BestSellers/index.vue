<template>
  <div>
    <van-grid :column-num="1" :border="false">
      <van-grid-item v-for="(item,index) in bestSellersList" :key="index">
        <img :src="item.scene_pic_url" style="width: 9.7rem"/>
        <span style="font-size: 14px;display: inline-block;margin-top: 5px">{{item.title}}</span>
        <span style="font-size: 12px;color: #758a99;text-align: center">{{item.subtitle}}</span>
        <span style="color: #CC6600">￥{{item.price_info}}起</span>
      </van-grid-item>
    </van-grid>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from "../../../Layout/footNav";
  import {BestSellersApi} from '../../api/api'
  export default {
    data(){
      return{
        bestSellersList: [],
        params:{
          page:1,
          count: 5,
        }
      }
    },
    components:{
      footNav,
    },
    methods:{
      //获取商品信息
      getBestSellers(){
        BestSellersApi(this.params).then(res =>{
          this.bestSellersList = res.data.data
        })
      }
    },
    created() {
      this.getBestSellers();
    }
  }
</script>

<style scoped>

</style>
