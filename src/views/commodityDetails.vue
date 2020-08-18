<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <div v-for="(item,index) in categoryNav" :key="index">
      <van-tab :title="item.name">
        <div class="banner">
          <p>{{item.name}}</p>
          <p style="color: #758a99">{{item.front_name}}</p>
          <img :src="item.img_url"/>
        </div>
        <van-grid :column-num="2" :gutter="3" style="margin-top: 10px">
          <van-grid-item v-for="(item,index) in goodsLists" :key="index" @click="goProduct(item)">
            <img :src="item.banner_url" style="width:4rem"/>
            <p>{{item.name}}</p>
            <p>销量：{{item.sell_volume}}</p>
            <p style="color: #CC6600">￥{{item.retail_price}}</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
      </div>
    </van-tabs>
  </div>
</template>

<script>
  import {goodsLists,categoryNav} from '../api/api'
  export default {
    data(){
      return{
        active: 0,
        goodsLists: '',
        categoryNav: '',
        params:{
          categoryId: '',
          id: '',
        }
      }
    },
    created() {
      this.params.categoryId = this.$route.query.id;
      this.params.id = this.$route.query.id;
      this.getCategoryNav();
      this.getGoodsLists();
    },
    methods:{
      //获取导航
      getCategoryNav(){
        categoryNav(this.params).then(res => {
          this.categoryNav = res.data.navData
        });
        this.params.categoryId = this.categoryNav[this.active]
        this.getGoodsLists();
      },
      //获取商品
      getGoodsLists(){
        goodsLists(this.params).then(res => {
          this.goodsLists = res.data.data
        })
      },
      //返回操作
      onClickLeft() {
        this.$router.back(-1);
      },
      goProduct(item){
        this.$router.push({path: '/product', query: {id: item.id}})
      }
    }
  }
</script>

<style scoped>
  .banner{
    margin-top: 10px;
    background: #ffffff;
  }
.banner img{
  width: 10rem;
}
  .banner p{
    text-align: center;
    padding: 5px 0px;
  }
</style>
