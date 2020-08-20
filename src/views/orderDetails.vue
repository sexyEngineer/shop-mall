<template>
  <div>
    <van-nav-bar title="订单详情" left-text="返回"left-arrow @click-left="onClickLeft"/>
<!--    地址-->
    <van-divider content-position="left">收货地址</van-divider>
    <van-contact-card   v-if="is_default == 0" @click="show = true"/>
    <div v-else style="margin: 10px 8px;background: #ffffff;padding: 10px 15px;border-radius: 5px" @click="show = true">
      <p style="padding:2px 5px">收件人：{{name}}</p>
      <p style="padding:2px 5px">联系方式：{{mobile}}</p>
      <p style="padding:2px 5px">收货地址：{{address}}</p>
    </div>
    <van-divider content-position="left">商品列表</van-divider>
    <div v-for="(item,index) in orderDetailActionList.goodsList" :key="index">
      <van-card
        :num="item.number"
        :price="item.retail_price"
        :title="item.goods_name"
        :thumb="item.list_pic_url"
        style="background: #ffffff;margin-top: 10px"
      />
    </div>
    <van-divider content-position="left">支付方式</van-divider>
    <van-submit-bar button-text="提交订单" @submit="onSubmit" >
      <span style="margin-right: 30px;font-size: 16px;color: #cc6600;">总计：￥<span>{{allPrise}}</span></span>
    </van-submit-bar>

<!--    选择收货地址-->
    <van-action-sheet v-model="show" title="请选择收货地址" style="height: 13rem">
        <div v-for="(item,index) in list" :key="index" class="box" style="margin-top: 10px">
          <div style="float: left;width: 60px;text-align: center">
            <p>{{item.name}}</p>
            <van-tag plain type="primary" v-show="item.is_default == 1">默认地址</van-tag>
          </div>
          <div style="overflow: hidden;margin-left: 20px;padding-left: 10px">
            <div style="float: left">
              <p>{{item.mobile}}</p>
              <p>{{item.address}}{{item.address_detail}}</p>
            </div>
            <van-icon name="edit" size="25" color="#c6c6c6" style="border:1px solid #c6c6c6;border-radius: 3px;float: right" @click="editAddress(item)"/>
          </div>
        </div>
    </van-action-sheet>
  </div>
</template>

<script>
  import {orderDetailAction,getListAction,saveAction} from '../api/api'
  export default {
    data(){
      return{
        //商品信息
        orderDetailActionList: '',
        //收货地址弹出框
        show: false,
        //收货地址信息
        list: '',
        //地址收货信息
        name:'',
        mobile: '',
        address: '',
        is_default: '',
        allPrise: '',
        params: {
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
        }
      }
    },
    computed: {
    },
    created() {
      this.getAddress();
      this.getorderDetailAction();
    },
    methods: {
      //获取地址
      getAddress() {
        getListAction(this.params).then(res => {
          this.list = res.data.data;
        })
      },
      //获取订单信息详情
      getorderDetailAction() {
        orderDetailAction(this.params).then(res => {
          this.orderDetailActionList = res.data
          this.name = this.orderDetailActionList.address.name;
          this.mobile = this.orderDetailActionList.address.mobile;
          this.address = this.orderDetailActionList.address.address;
          this.is_default = this.orderDetailActionList.address.is_default;
          this.allPrise = this.orderDetailActionList.allPrise;
          console.log(this.orderDetailActionList)
        })
      },
      //返回操作
      onClickLeft(){
        this.$dialog.confirm({
          title: '确定要取消该订单？',
        }).then(()=> {
            this.$router.go(-1);
          }
        ).catch()
      },
      //订单提交
      onSubmit() {
      },
    },
  }
</script>

<style scoped>

</style>
