<template>
  <div class="page wechat-page">
    微信
    <button @click="gotoLiaoTian">聊天</button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "WeChatPage",
  setup() {
    const $router = useRouter();
    function gotoLiaoTian() {
      $router.push("/chat");
    }
    return {
      gotoLiaoTian
    };
  }
};
</script>
<style lang="less" scoped>
.wechat-page {
  background-color: #fff;
}
</style>
