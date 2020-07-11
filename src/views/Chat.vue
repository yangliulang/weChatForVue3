<template>
  <div class="page chat">
    liaotian
    <button @click="goToWeChat">微信</button>
    <button @click="goToMini">进入小程序</button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "Chat",
  setup() {
    const $router = useRouter();
    function goToWeChat() {
      $router.push("/");
    }
    function goToMini() {
      $router.push("/mini/10203");
    }
    return {
      goToWeChat,
      goToMini
    };
  }
};
</script>
<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: @appBgColor;
}
</style>
