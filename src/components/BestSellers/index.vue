<template>
  <div>
    <van-grid :column-num="1" :border="false">
      <van-grid-item v-for="(item,index) in bestSellersList" :key="index">
        <img :src="item.scene_pic_url" style="width: 9rem"/>
        <span style="font-size: 14px;display: inline-block;margin-top: 5px">{{item.title}}</span>
        <span style="font-size: 12px;color: #758a99;text-align: center">{{item.subtitle}}</span>
        <span style="color: #CC6600">￥{{item.price_info}}起</span>
      </van-grid-item>
    </van-grid>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from "../../Layout/footNav";
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
          //利用concat方法来将数据组合，使得老数据不被覆盖
          this.bestSellersList = this.bestSellersList.concat( res.data.data)
        })
      }
    },
    created() {
      this.getBestSellers();
    },
    mounted() {
      this.getBestSellers(this.params.page);
      // 注册scroll事件并监听
      window.addEventListener('scroll', () => {
        // console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // console.info('文档高度' + document.body.offsetHeight)
        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
            this.getBestSellers(this.params.page += 1)
        }
      })

    }
  }
</script>

<style scoped>
</style>
