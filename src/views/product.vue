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
          <van-stepper v-model="number" theme="round" button-size="22" disable-input style="margin: 10px 20px 0px"/>
          <van-goods-action>
            <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
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
    <div style="position: fixed;top: 6rem;right: 12px">
      <van-icon name="back-top" color="#FF4500" size="30" v-if="btnFlag"  @click="backTop()"/>
    </div>
    <div style="margin-bottom: 60px"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="收藏" @click="cancelCollect"  v-if="collect"/>
      <van-goods-action-icon icon="star-o" text="收藏" @click="addCollect" v-else/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
  import {detailaction , addcollect , addCart} from '../api/api'
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
        number: 1,
        issue: '',
        show: false,
        collect: false,
        value: '',
        params:{
          id: '',
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
          goodsId: '',
        },
        btnFlag:false,
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
      //商品收藏
      addCollect(){
        this.params.goodsId = this.params.id;
        addcollect(this.params).then(res => {
          if (res.data.data == 'success') {
            this.$toast('收藏成功')
            this.collect = true;
          }else{
            this.$toast('收藏失败，请重试')
          }
        })
      },
      //取消收藏
      cancelCollect(){
        this.params.goodsId = this.params.id;
        addcollect(this.params).then(res => {
          if (res.data.code == 0) {
            this.$toast('取消收藏成功')
            this.collect = false;
          }else{
            this.$toast('取消收藏失败，请重试')
          }
        })
      },
      //加入购物车
      addCart(){
        this.params.goodsId = this.params.id;
        this.params.number = this.number;
        addCart(this.params).then(res => {
          if(res.data.data == 'success') {
            this.$toast('加入购物车成功')
          }else {
            this.$toast('加入购物车失败，请重试')
          }
        })
      },
      //查看商品
      lookProducts(item){
        this.$router.push({path: '/product', query: {id: item.id}});
        this.backTop();
      },
      //返回操作
      onClickLeft(){
        this.$router.back(-1)
      },
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      backTop() {
        let that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if(that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

      // 为了计算距离顶部的高度，当高度大于200显示回顶部图标，小于200则隐藏
      scrollToTop() {
        let that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if(that.scrollTop >200) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },

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
