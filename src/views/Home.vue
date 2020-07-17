<template>
  <div class="page home-page">
    <router-view></router-view>
    <!-- 导航工具栏 -->
    <NavToolBar :navs="navs" />
  </div>
</template>

<script>
import NavToolBar from "../components/public/NavToolBar";
import { reactive } from "vue";
export default {
  name: "Home",
  components: { NavToolBar },
  setup() {
    // 导航栏项目
    const navs = reactive([
      {
        name: "微信",
        path: "/",
        icon: "wx-icon-liaotian",
        badge: { type: "number", value: 9, max: 100 }
      },
      {
        name: "通讯录",
        path: "/addressBook",
        icon: "wx-icon-tongxunlu"
        // badge: { type: "dot" }
      },
      {
        name: "发现",
        path: "/discover",
        icon: "wx-icon-faxian",
        badge: { type: "dot" }
      },
      { name: "我", path: "/me", icon: "wx-icon-wode" }
    ]);
    return { navs };
  }
};
</script>
