<template>
  <div>
    <van-nav-bar title="意见反馈" left-text="返回" @click-left="onClickLeft"/>
    <div>
      <van-field
        v-model="content"
        rows="4"
        autosize
        label="您的反馈"
        type="textarea"
        maxlength="100"
        placeholder="请输入反馈"
        show-word-limit
      />
      <van-field
        v-model="phone"
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
        content: '',
        phone: '',
        params: {
          content: '',
          phone: '',
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
        if (this.content == '') {
          this.$toast('反馈内容不能为空');
        }
        else if (this.phone == '') {
          this.$toast('联系方式不能为空');
        }
        else{
          this.params.content = this.content;
          this.params.phone = this.phone;
          submitAction(this.params).then(res => {
            if(res.data.data == 'true') {
              this.$toast('提交成功，感谢您的反馈')
            }else {
              this.$toast('提交失败，请重试')
            }
          })
        }
        this.content = '';
        this.phone = '';
      },
    },
  }
</script>

<style scoped>

</style>
