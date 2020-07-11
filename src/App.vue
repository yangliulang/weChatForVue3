<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" ref="transtionPage"></component>
    </transition>
  </router-view>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const transtionPage = ref(null);
    watch(transtionPage, (enterPage, leavePage) => {
      // 当离开的页面存在的时候，表示页面在切换了
      if (leavePage) {
        enterPage.$el.style.position = "absolute";
        enterPage.$el.style.width = "100vw";
      }
    });
    return {
      transtionPage
    };
  }
};
</script>
<style lang="less">
html,
body,
#app {
  // perspective: 800px;
  min-height: 100vh;
  background-color: @appBgColor;
}
</style>
