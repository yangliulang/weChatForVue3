<template>
  <div class="page wechat-page">
    <!-- 这里需要注意@绑定的事件 在组件内部无法通过$listeners 获取了 -->
    <NavHeadBar
      title="微信(90)"
      :on-forward="onForward"
      forword-icon="wx-icon-shezhi"
    >
    </NavHeadBar>

    <p @click="gotoLiaoTian" class="chat-item">和我聊一聊吧</p>
    {{ state.env }}
  </div>
</template>
<script>
// 使用路由
import { useRouter } from "vue-router";
// 页头的导航组件
import NavHeadBar from "../components/public/NavHeadBar";
import { reactive } from "vue";
export default {
  name: "WeChatPage",
  components: {
    NavHeadBar
  },
  setup() {
    const $router = useRouter();
    const state = reactive({
      env: process.env.BASE_URL
    });
    function gotoLiaoTian() {
      $router.push("/chat/10001");
    }

    function onForward() {
      alert(10);
    }
    return {
      gotoLiaoTian,
      onForward,
      state
    };
  }
};
</script>
<style lang="less" scoped>
.wechat-page {
  background-color: #fff !important;
  .chat-item {
    height: 10vh;
    background-color: tan;
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
