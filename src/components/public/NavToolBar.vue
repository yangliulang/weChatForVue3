<template>
  <div class="nav-bar">
    <nav v-for="nav in navs" :key="nav.path">
      <!-- 如果存在标记 -->
      <Badge
        v-if="nav.badge"
        hidden="false"
        :type="nav.badge.type"
        :value="nav.badge.value"
        class="my-badge"
      />
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
// 标记徽标组件
import Badge from "../public/Badge";
import { toRef } from "vue";
export default {
  name: "NavToolBarComp",
  components: {
    Badge
  },
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

  border-top: 0.5px solid @borderColor; /*no*/
  padding-bottom: @navToolBarPaddingBottom;
  position: sticky;
  bottom: 0;
  height: @navToolBarHeight;
  background-color: @navToolBarBgColor;

  nav {
    position: relative;
    flex-grow: 1;
    font-size: @fontSizeSmall;
    .nav-button {
      .flex(center, center, column);

      height: @navToolBarHeight;
      font-size: @fontSizeSmall;
      font-weight: bold;
      &::before {
        font-weight: normal;
        font-size: 45px;
      }
      &.actived {
        color: @green;
      }
    }
    .my-badge {
      position: absolute;
      left: 50%;
      transform: translate(20%, 3px);
      &.dot {
        transform: translate(15px, 15px);
      }
    }
  }
}
</style>
