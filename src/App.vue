<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script></script>
<style lang="less">
html,
body,
#app {
  min-height: 100vh;
  background-color: @appBgColor;
}
.fade-enter-from {
  transform: translateX(100%);
}

.fade-enter-active {
  transition: all 2s ease-in;
}

.fade-leave-from {
}
.fade-leave-active {
  transition: all 2s ease-in;
}

.fade-leave-to {
  transform: translateX(-100%);
}
</style>
