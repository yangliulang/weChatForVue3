<template>
  <router-view v-slot="{ Component }">
    <transition
      :name="_transtionPageType"
      @after-leave="onPageLeaved"
      @before-enter="onPageEnter"
    >
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
      // 当退出完成后 移除景深#app
      document.querySelector("#app").classList.remove("perspective");
    };
    // 当退出元素的动画结束，移除进入元素的保持样式
    const onPageEnter = () => {
      console.log(
        "_transtionPageType",
        _transtionPageType.value.startsWith("fade")
      );
      // 如果压面过度动画是fade+slide
      // 我们需要给#app增加一个景深属性
      if (_transtionPageType.value.startsWith("fade")) {
        document.querySelector("#app").classList.add("perspective");
      }
    };

    return {
      transtionPageRef,
      _transtionPageType,
      onPageLeaved,
      onPageEnter
    };
  }
};
</script>
<style lang="less">
html,
body,
#app {
  font-size: @fontSizeLarge;
  min-height: 100vh;
  background-color: @appBgColor;
  &.perspective {
    perspective: 800px;
    background-color: #666;
  }
}
</style>
