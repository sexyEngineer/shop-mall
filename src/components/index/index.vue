<template>
  <div>
    <top-nav></top-nav>
    <van-swipe class="my-swipe" indicator-dots="true" :autoplay="3000">
      <van-swipe-item v-for="(item,index) in homeProducts_banner" :key="index">
        <img :src="item.image_url"/>
      </van-swipe-item>
    </van-swipe>
    <div class="channel">
      <van-grid :border="false" :column-num="5">
        <van-grid-item v-for="(item,index) in homeProducts_bannerList" :key="index" @click="getcommodityDetails(item)">
          <van-image :src="item.icon_url"/>
          <span>{{item.name}}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div style="margin-top: 15px">
      <router-link to="/" class="ppzg">品牌制造商直供</router-link>
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in homeProducts_zg" :key="index">
          <van-image :src="item.new_pic_url"/>
          <span style="position: absolute;top: 20px;left: 15px;color: #CC6600">
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}起</p>
          </span>
        </van-grid-item>
      </van-grid>
    </div>
    <div>
    <div class="newsShop">
      <p style="color: #758a99;font-size: 14px;">新品首发</p>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="height: 30px;margin-top: 5px">查看全部</van-button>
    </div>
      <div class="list">
        <ul style="background: #ffffff;">
            <li @click="goodsDetail(item.id)" v-for="(item, index) in homeProducts_goods" :key="index">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p class="price">￥{{item.retail_price}}</p>
            </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="newsShop">
        <p style="color: #758a99;font-size: 14px;">人气推荐·好物精选</p>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="height: 30px;margin-top: 5px">查看全部</van-button>
      </div>
      <div class="list">
        <ul style="background: #ffffff">
          <li @click="goodsDetail(item)" v-for="(item, index) in homeProducts_hotGoods" :key="index">
            <img :src="item.list_pic_url">
            <p>{{item.name}}</p>
            <p>{{item.goods_brief}}</p>
            <p class="price">￥{{item.retail_price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-for="(item,index) in homeProducts_newCategoryList" :key="index">
      <div style="text-align: center;padding: 20px 0px 10px;">
        <p style="color: #758a99;font-size: 14px;">{{item.name}}好物</p>
      </div>
      <van-grid :border="true" :column-num="2" >
        <van-grid-item v-for="(item, index) in item.goodsList" :key="index" @click="goodsDetail(item)">
          <van-image :src="item.list_pic_url"/>
          <span>
            <p>{{item.name}}</p>
          </span>
        </van-grid-item>
        <van-grid-item>
          <span @click="getcommodityDetails(item)">
            <span style="font-size: 16px;color: #758a99">查看更多</span>
            <img src="../../assets/rightbig.png" style="width: 14px"/>
          </span>
        </van-grid-item>
      </van-grid>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import {Homepageproducts} from '../../api/api'
  import topNav from "../../Layout/topNav";
  import footNav from "../../Layout/footNav";
  export default {
    data(){
      return{
        homeProducts_banner: '',
        homeProducts_bannerList: '',
        homeProducts_zg: '',
        homeProducts_goods: '',
        homeProducts_hotGoods: '',
        homeProducts_newCategoryList: '',
      }
    },
    components:{
      topNav,
      footNav,
    },
    mounted() {
      this.getceshi();
    },
    methods: {
      //获取商品信息
      getceshi() {
        Homepageproducts().then(res => {
          this.homeProducts_banner = res.data.banner;
          this.homeProducts_bannerList = res.data.channel;
          this.homeProducts_zg = res.data.brandList;
          this.homeProducts_goods = res.data.newGoods;
          this.homeProducts_hotGoods = res.data.hotGoods;
          this.homeProducts_newCategoryList = res.data.newCategoryList;
        })
      },
        //点击详情
        goodsDetail(item){
        if (item.id == undefined) {
          this.$router.push({path: '/product', query: {id: item}});
          return;
        }else {
          this.$router.push({path: '/product', query: {id: item.id}});
          return;
        }
        },
        // 获取商品分类
        getcommodityDetails(item){
          this.$router.push({path:'/commodityDetails',query:{id:item.id}})
        }
      }
  }
</script>

<style scoped>
  .price{
    color: #CC6600;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    background-color: #CC6600;
  }
  .my-swipe{
    border-radius: 10px;
  }
  img{
    width: 10rem;
    height: auto;
  }
  .ppzg{
    display: block;
    color: #CC6600;
    background: #ffffff;
    text-align: center;
    font-size: 14px;
    padding: 15px 0px;
  }
  .newsShop{
    height: 2rem;
    text-align: center;
    padding-top: 20px;
  }
  .list img{
    width: 4rem;
  }
  .list{
    height: 5.5rem;
  }
  .list ul{
    width:10rem;
    height: auto;
    float: left;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  .list ul::-webkit-scrollbar {
    display: none;
  }
  .list li{
    margin-left: 25px;
    width: 4rem;
    height: auto;
    position: relative;
    display: inline-block;
  }
</style>
