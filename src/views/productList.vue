<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回"  @click-left="onClickLeft"/>
    <van-empty image="search" description="描述文字" v-show="productList.length == 0"/>
    <van-grid :column-num="2" :gutter="5">
      <van-grid-item v-for="(item,index) in productList" :key="index" @click="product(item)">
        <img :src="item.list_pic_url" style="width: 4rem"/>
        <p style="text-align: center">{{item.name}}</p>
        <p style="color: #cc6600">￥{{item.retail_price}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import {helperaction} from '../api/api'
  export default {
    data(){
      return{
        productList: '',
        params:{
          keyword:'',
          openId: ''
        }
      }
    },
    created() {
      this.params.keyword = this.$route.query.keywords;
      this.getProductList();
    },
    methods:{
      //获取商品列表
      getProductList(){
        helperaction(this.params).then(res => {
          this.productList = res.data.keywords;
        })
      },
      //返回上一级操作
      onClickLeft() {
        this.$router.go(-1);
      },
      // 查看详情
      product(item) {
        this.$router.push({path:'/product',query:{id:item.id}})
      }
    }
  }
</script>

<style scoped>

</style>
