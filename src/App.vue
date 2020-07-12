<template>
  <router-view v-slot="{ Component }">
    <transition :name="_transtionPageType" @after-leave="onPageLeaved">
      <component :is="Component" ref="transtionPageRef"></component>
    </transition>
  </router-view>
</template>
<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const $store = useStore();
    const transtionPageRef = ref(null);
    const enterPageRef = ref(null);
    //使用页面过度效果 from store
    const _transtionPageType = computed(() => $store.state.transtionPageType);
    // 监听当前transition组件内的页面变化
    watch(transtionPageRef, (enterPage, leavePage) => {
      // 当离开的页面存在的时候，表示页面在切换了
      if (leavePage) {
        // 把当前正在进入的元素保存起来
        enterPageRef.value = enterPage;
        // 给当前要进入的元素添加进入时的保持样式，防止完成时 退出的元素还没有退出完毕造成动画期间得样式移除后 不覆盖问题
        enterPage.$el.classList.add("page-tranistioning");
      }
    });

    // 当退出元素的动画结束，移除进入元素的保持样式
    const onPageLeaved = () => {
      enterPageRef.value.$el.classList.remove("page-tranistioning");
    };

    return {
      transtionPageRef,
      _transtionPageType,
      onPageLeaved
    };
  }
};
</script>
<style lang="less">
html,
body,
#app {
  // perspective: 800px;
  font-size: @fontSizeLarge;
  min-height: 100vh;
  background-color: @appBgColor;
}
</style>
