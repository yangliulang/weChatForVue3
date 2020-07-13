<template>
  <div class="page chat">
    <NavHeadBar
      title="一只帅蚂蚁"
      :on-back="goToWeChat"
      :on-forword="onForword"
      forword-icon="wx-icon-pengyouquan"
    />

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
    function onForword() {
      $router.push("/mini/10203");
    }
    return {
      goToWeChat,
      goToMini,
      onForword
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
