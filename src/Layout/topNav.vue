<template>
    <div>
      <van-search show-action label="请输入" placeholder="要搜索的内容" @focus="onblur">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <van-popup v-model="show" position="left" :style="{ width: '80%', height:'100%' }" >
        <van-search show-action placeholder="要搜索的内容" v-model="params.keyword" @input="onSearchs" @focus="searchHints" @blur="hidden">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
        <div v-if="searchHint">
          <div v-for="(item,index) in searchList" :key="index" >
            <p>{{item.name}}</p>
          </div>
        </div>
        <div v-else>
          <div v-show="history.length != 0">
            <p style="padding: 10px 5px">
              <span>历史记录</span>
              <van-icon name="delete" style="float: right;margin-right: 10px" @click="clearHistory"/>
            </p>
            <van-tag plain type="primary" v-for="(items,index) in history" :key="index" style="margin: 5px 10px" @click="searchShop(items)">{{items.keyword}}</van-tag>
          </div>
          <div style="margin-top: 10px;padding: 10px 5px">
            <p>热门推荐</p>
            <van-tag plain type="primary" v-for="(items,index) in indexactions" :key="index" style="margin: 5px 10px" @click="searchShop(items)">{{items.keyword}}</van-tag>
          </div>
        </div>
      </van-popup>
    </div>
</template>

<script>
  import {helperaction, indexactions, clearhistoryAction, shopCartDeleteAction} from '../api/api'
    export default {
        data() {
            return {
              opens: false,
              //是否显示搜索推荐
              show: false,
              //是否显示搜索提示
              searchHint: false,
              params:{
                keyword: '',
                openId: '',
              },
              searchList: '',
              //热门推荐
              indexactions: '',
              //历史记录
              history: '',
            }
        },
        methods: {
          onblur(){
            this.show = true;
            this.indexAction();
          },
          //是否显示搜索提示
          searchHints(){
            this.searchHint = true;
          },
          hidden(){
            this.searchHint = false;
          },
          //搜索商品提示
          onSearchs(){
            helperaction(this.params).then(res=> {
              this.searchList = res.data.keywords
            })
            if (this.params.keyword == null) {
              this.searchList == [];
            }
          },
          //搜索商品
          onSearch(){
            this.show = true;
            this.$router.push({path: '/productList',query:{keywords: this.params.keyword}})
          },
          searchShop(items) {
            this.params.keyword = items.keyword;
            this.onSearch();
          },
          //获取历史和热门推荐数据
          indexAction(){
            indexactions(this.params).then(res => {
              this.indexactions = res.data.hotKeywordList;
              this.history = res.data.historyData;
            })
          },
          //清楚历史记录
          clearHistory() {
            this.$dialog.confirm({
              title: '是否清空搜索记录',
            }).then(() => {
                this.$toast('历史记录已清空')
                clearhistoryAction(this.params);
                this.indexAction();
              }).catch(() => {
                this.$toast('删除操作已取消')
              });
          }
        },
      created() {
      }

    }
</script>

<style scoped>
  .van-search{
    padding: 5px 3px;
  }
</style>
