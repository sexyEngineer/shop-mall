<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回"  @click-left="onClickLeft"/>
    <van-tabbar v-model="active">
      <van-tabbar-item @click="sort(active)">综合</van-tabbar-item>
      <van-tabbar-item @click="sort(active)" v-if="sortJg == true">价格（由高到低）</van-tabbar-item>
      <van-tabbar-item @click="sort(active)" v-else>价格（由低到高）</van-tabbar-item>
      <van-tabbar-item @click="sort(active)">分类</van-tabbar-item>
    </van-tabbar>
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
        },
        sorts:{
          keyword: '',
          //asc --desc
          order: ''
        },
        sortJg: true,
        active: 0,
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
      },
      // 对列表进行排序
      sort(active) {
        if (active == 1 && this.sortJg == true){
          this.sorts.order = 'desc';
          this.sorts.keyword = this.params.keyword;
          this.sortJg = false;
        }else if (active ==1 && this.sortJg == false){
          this.sorts.order = 'asc';
          this.sorts.keyword = this.params.keyword;
          this.sortJg = true;
        }
        helperaction(this.sorts).then(res => {
          this.productList = res.data.keywords;
        })
      }
    }
  }
</script>

<style scoped>
.van-tabbar--fixed{
  position:relative;
}
.van-tabbar{
  height: 40px;
  background: #FFFAF0;
}
</style>
