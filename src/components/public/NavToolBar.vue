<template>
  <div class="nav-bar">
    <nav v-for="nav in navs" :key="nav.path">
      <div
        class="nav-button wx-iconfont"
        :class="{ [nav.icon]: true, actived: currentRoutePath === nav.path }"
        @click="goToPath(nav.path)"
      >
        {{ nav.name }}
      </div>
    </nav>
  </div>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { toRef } from "vue";
export default {
  name: "NavToolBar",
  props: {
    navs: Array
  },
  setup() {
    // 使用路由
    const $router = useRouter();
    // 使用当前路由信息
    const $route = useRoute();
    // 当前匹配的路由路径
    const currentRoutePath = toRef($route, "path");
    //路由跳转
    const goToPath = path => {
      $router.push(path);
    };

    return {
      goToPath,
      currentRoutePath
    };
  }
};
</script>
<style lang="less" scoped>
.nav-bar {
  .flex(flex-start, stretch);
  padding-bottom: 30px;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: @navToolBarHeight;
  background-color: @navToolBarBgColor;

  nav {
    flex-grow: 1;
    font-size: @fontSizeSmall;
    .nav-button {
      .flex(center, center, column);

      height: @navToolBarHeight;
      font-size: @fontSizeSmall;
      font-weight: bold;
      &::before {
        font-size: 70px;
      }
      &.actived {
        color: @green;
      }
    }
  }
}
</style>
