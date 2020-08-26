<template>
  <div class="page chat-page">
    <NavHeadBar
      title="一只帅蚂蚁"
      :on-back="goToWeChat"
      :on-forward="onForword"
      forword-icon="wx-icon-pengyouquan"
    />

    <p @click="goToMini" class="chat-item">进入小程序</p>
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
      $router.push("/applet/10203");
    }
    function onForword() {
      alert(0);
      $router.push("/applet/10203");
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
.chat-page {
  // min-height: 100vh;
  background-color: gainsboro !important;
  .chat-item {
    height: 10vh;
    background-color: forestgreen;
    display: flex;
    padding: 0 10vw;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    &::after {
      content: ">";
    }
  }
}
</style>
