<template>
  <div class="page chat">
    liaotian
    <button @click="goToWeChat">微信</button>
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
    return {
      goToWeChat
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
