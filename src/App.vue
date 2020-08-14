<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   // 调用API从本地缓存中获取数
  //   let userInfo = {
  //     openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
  //     nickName: "何玉硕",
  //     gender: 1,
  //     language: "zh_CN",
  //     city: "Changping",
  //     province: "Beijing",
  //     country: "China",
  //     avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132",
  //     watermark: { timestamp: 1535513485, appid: "wx601ce71bde7b9add" }
  //   };
  // }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
#app{
  background:#BBFFFF;
  height: auto;
}
</style>
