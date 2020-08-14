<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in productMessage.gallery" :key="index">
          <img :src="item.img_url" style="width: 10rem"/>
        </van-swipe-item>
      </van-swipe>
      <div class="title"style="padding: 10px 20px">
        <p style="font-size: 14px;font-weight: bold;">{{productMessageName}}</p>
        <p style="font-size: 12px;color: #758a99">{{productMessageGoods_brief}}</p>
        <p style="color: #CC6600;font-size: 14px;">￥{{productMessageRetail_price}}</p>
      </div>
      <van-cell is-link title="请选择规格和数量" @click="show = true" />
      <van-action-sheet title="请选择" v-model="show">
        <div class="content" style="height: 8rem">
          <p style="text-align: center;font-size: 14px;font-weight: bold;">{{productMessageName}}</p>
          <p style="text-align: center;font-size: 14px;font-weight: bold;color: #CC6600">￥{{productMessageRetail_price}}</p>
          <img :src="primary_pic_urls" style="width: 3rem;margin-left: 20px"/>
          <van-stepper v-model="value" theme="round" button-size="22" disable-input style="margin: 10px 20px 0px"/>
          <van-goods-action>
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
          </van-goods-action>
        </div>
      </van-action-sheet>
    </div>
    <div class="parameter">
      <p>商品参数</p>
      <div v-for="(item,index) in productMessage.attribute" :key="index">
        <p>{{item.name}} : {{item.value}}</p>
      </div>
    </div>
    <van-divider content-position="center">商品详情</van-divider>
    <div v-html="goods_desc" class="list"></div>
    <van-divider content-position="center">常见问题</van-divider>
    <div v-for="(item,index) in issue" :key="index" class="question">
      <p style="color: #CC6600">·{{item.question}}</p>
      <p style="color: #758a99;text-indent:2em;">{{item.answer}}</p>
    </div>
    <van-divider content-position="center">商品类似推荐</van-divider>
    <van-grid :column-num="2" :gutter="10">
      <van-grid-item v-for="(item,index) in productList" :key="index" @click="lookProducts(item)" style="z-index: 0">
        <img :src="item.list_pic_url" style="width: 3rem"/>
        <span>{{item.name}}</span>
        <span style="color: #CC6600">￥{{item.retail_price}}</span>
      </van-grid-item>
    </van-grid>
    <div style="margin-bottom: 60px"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="收藏" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
  import {detailaction} from '../api/api'
  export default {
    data(){
      return{
        productMessage: '',
        productMessageName: '',
        productMessageGoods_brief: '',
        productMessageRetail_price: '',
        primary_pic_urls: '',
        goods_desc: '',
        productList: '',
        issue: '',
        show: false,
        value: '',
        params:{
          id: '',
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        }
      }
    },
    created(){
      this.params.id = this.$route.query.id;
      this.getProduct()
    },
    methods:{
      //获取商品信息详情
      getProduct(){
        detailaction(this.params).then(res => {
          this.productMessage = res.data;
          this.productMessageName = res.data.info.name;
          this.productMessageGoods_brief = res.data.info.goods_brief;
          this.productMessageRetail_price = res.data.info.retail_price;
          this.primary_pic_urls = res.data.info.primary_pic_url;
          this.goods_desc = res.data.info.goods_desc;
          this.issue = res.data.issue;
          this.productList = res.data.productList;
        })
      },
      //查看商品
      lookProducts(item){
        this.$router.push({path: '/product', query: {id: item.id}});
      },
      //返回操作
      onClickLeft(){
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped>
.parameter{
  padding: 10px 20px;
}
  .parameter p{
    font-size: 14px;
    padding: 10px;
  }
  .parameter div p{
    background: #ffffff;
    margin-top: 5px;
    padding: 5px;
  }
.list{
    width: 10rem;
}
.list >>> p{
  margin-top: -3px;
}
.list >>> p img{
    width: 10rem;
}
  .question{
    background: #ffffff;
    padding: 10px 30px;
  }
</style>
