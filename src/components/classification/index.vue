<template>
  <div>
    <top-nav></top-nav>
    <div class="leftNav">
      <van-sidebar v-model="activeKey" @change="choseName">
        <div v-for="(item,index) in indexactionList" :key="index">
            <van-sidebar-item :title="item.name"/>
        </div>
      </van-sidebar>
    </div>
    <div class="content">
      <div>
        <img :src="indexactionContent.banner_url" style="height: 3rem;width: 7rem"/>
      </div>
      <p style="text-align: center">——{{indexactionContent.name}}分类——</p>
      <van-grid :column-num="2" :gutter="10" :border="false">
        <van-grid-item v-for="(item,index) in indexactionContentList" :key="index" @click="getDetails(item)">
          <img :src="item.wap_banner_url" style="width: 2rem"/>
          <span>{{item.name}}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from "../../../Layout/footNav";
  import topNav from "../../../Layout/topNav";
  import {indexaction , currentaction} from '../../api/api'
  export default {
    data(){
      return{
        activeKey: 0,
        indexactionList: '',
        indexactionContent: '',
        indexactionContentList: '',
        params:{
          id: 1005000,
        },
        choseClick: false,
      }
    },
    components:{
      footNav,
      topNav
    },
    methods:{
      //获取信息
      getindexaction(){
        indexaction().then(res => {
          this.indexactionList = res.data.categoryList
        })
      },
      //点击详情信息
      getDetails(item){
        this.$router.push({path: '/commodityDetails', query: {id: item.id}});
      },
      //选择列表
      choseName(index){
        this.choseClick = true;
        this.params.id = this.indexactionList[index].id
        currentaction(this.params).then(res => {
          this.indexactionContent = res.data.data.currentOne;
          this.indexactionContentList = res.data.data.currentOne.subList;
        })
      },
      //获取点击信息
      getContent(){
        if(this.choseClick == false) {
          currentaction(this.params).then(res => {
            this.indexactionContent = res.data.data.currentOne;
            this.indexactionContentList = res.data.data.currentOne.subList;
          })
        }
      }
    },
    created() {
      this.getindexaction();
      this.getContent();
    }
  }
</script>

<style scoped>
  .van-sidebar-item--select::before{
    height: 24px;
  }
  .van-sidebar-item{
    padding: 15px 12px;
    background: #ffffff;
  }
  .van-sidebar-item--select{
    background: #BBFFFF;
    font-size: 16px;
  }
  .leftNav{
    float: left;
  }
  .content{
    overflow: hidden;
    padding: 10px 15px;
    background: #ffffff;
  }
</style>
