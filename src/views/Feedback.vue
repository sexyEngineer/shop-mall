<template>
  <div>
    <van-nav-bar title="意见反馈" left-text="返回" @click-left="onClickLeft"/>
    <div>
      <van-field
        v-model="message"
        rows="4"
        autosize
        label="您的反馈"
        type="textarea"
        maxlength="100"
        placeholder="请输入反馈"
        show-word-limit
      />
      <van-field
        v-model="tel"
        rows="1"
        autosize
        label="联系方式"
        type="textarea"
        placeholder="邮箱/手机号/微信号"
      />
      <van-button type="danger" style="width: 9rem;margin: 2rem 0.5rem 0rem" :round="true" @click="submit">提交反馈</van-button>
    </div>
  </div>
</template>

<script>
  import {submitAction} from '../api/api'
  export default {
    data(){
      return{
        message: '',
        tel: '',
        params: {
          message: '',
          tel: '',
          openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
          name: '何玉硕'
        },
      }
    },
    created() {

    },
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      },
      submit() {
        if (this.message == '') {
          this.$toast('反馈内容不能为空');
        }
        else if (this.tel == '') {
          this.$toast('联系方式不能为空');
        }
        else{
          this.params.message = this.message;
          this.params.tel = this.tel;
          submitAction(this.params).then(res => {

          })
        }
        this.message = '';
        this.tel = '';
      },
    },
  }
</script>

<style scoped>

</style>
