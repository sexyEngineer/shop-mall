<template>
    <div>
      <van-search show-action label="请输入" placeholder="要搜索的内容">
        <template #action>
          <div @click="onSearch">搜索</div>
          <div @click="onCancel" v-if="opens">取消</div>
        </template>
      </van-search>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              opens: false,
            }
        },
        methods: {
          onSearch(){
            console.log('搜索事件')
          },
          onCancel(){
            console.log('取消搜索')
          }
        },

    }
</script>

<style scoped>
  .van-search{
    padding: 5px 3px;
  }
</style>
