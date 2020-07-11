<template>
  <div class="page chat">
    <NavHeadBar title="马建增" :on-back="goToWeChat" />

    <button @click="goToMini">进入小程序</button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import NavHeadBar from "../components/public/NavHeadBar";
export default {
  name: "Chat",
  components: { NavHeadBar },
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
