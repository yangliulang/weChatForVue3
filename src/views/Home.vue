<template>
  <div id="home">
    <router-view></router-view>
    <router-link to="/">微信</router-link>
    <router-link to="/addressBook">通讯录</router-link>
    <router-link to="/discover">发现</router-link>
    <router-link to="/me">我</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="less" scoped></style>
