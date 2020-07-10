<template>
  <div class="home">
    <router-view class="page"></router-view>
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
      { name: "微信", path: "/", icon: "wx-icon-liaotian" },
      { name: "通讯录", path: "/addressBook", icon: "wx-icon-tongxunlu" },
      { name: "发现", path: "/discover", icon: "wx-icon-faxian" },
      { name: "我", path: "/me", icon: "wx-icon-wode" }
    ]);
    return { navs };
  }
};
</script>
<style lang="less" scoped></style>
