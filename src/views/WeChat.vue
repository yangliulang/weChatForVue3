<template>
  <div class="page wechat-page">
    <!-- 这里需要注意@绑定的事件 在组件内部无法通过$listeners 获取了 -->
    <NavHeadBar
      title="微信(90)"
      :on-forward="onForward"
      forword-icon="wx-icon-shezhi"
    >
      <!-- 在模板上使用v-slot -->
      <!-- <template v-slot:right>
        <div>custom</div>
      </template> -->
    </NavHeadBar>

    <button @click="gotoLiaoTian">聊天</button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import NavHeadBar from "../components/public/NavHeadBar";
export default {
  name: "WeChatPage",
  components: {
    NavHeadBar
  },
  setup() {
    const $router = useRouter();
    function gotoLiaoTian() {
      $router.push("/chat/10001");
    }

    function onForward() {
      alert(10);
    }
    return {
      gotoLiaoTian,

      onForward
    };
  }
};
</script>
<style lang="less" scoped>
.wechat-page {
  background-color: #fff;
}
</style>
