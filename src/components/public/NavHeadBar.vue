<template>
  <div class="nav-head-bar">
    <div
      class="nav-head-left"
      :class="{ 'wx-iconfont': onBack, 'wx-icon-fanhui': onBack }"
      @click="onBack && onBack()"
    ></div>
    <div class="nav-head-title">{{ title }}</div>
    <div
      class="nav-head-right"
      :class="[
        forwordIcon && !isRightBySlot ? 'wx-iconfont' : '',
        forwordIcon && !isRightBySlot ? forwordIcon : ''
      ]"
      @click="onForward && !isRightBySlot && onForward()"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
// import { getCurrentInstance } from "vue";
export default {
  name: "NavHeadBar",
  props: {
    //导航标题
    title: String,
    // 回退事件
    onBack: Function,
    // 前进事件 当slot right 被定义不起作用
    onForward: Function,
    // 前进事件 当slot right 被定义不起作用
    forwordIcon: String
  },
  setup(props, { slots }) {
    const { right: isRightBySlot } = slots;
    return {
      isRightBySlot
    };
    // console.log(rightBySlot);
    // const $this = getCurrentInstance();
    // const onBackHandler = () => {
    //   props.onBack && props.onBack();
    // };
    // return {
    // };
    // console.log("$this", $this.ctx.$props);
  }
};
</script>
<style lang="less" scoped>
.nav-head-bar {
  position: sticky;
  top: 0;
  height: 150px;
  background-color: @navHeadBarBgColor;
  border-bottom: 0.5px solid @borderColor; /*no*/
  .flex(space-between, stretch);
  .nav-head-left,
  .nav-head-right {
    flex: 1;
    .flex(center, center);
  }
  .nav-head-left {
    &::before {
      font-size: 70px;
    }
  }
  .nav-head-title {
    text-align: center;
    width: 70%;
    flex-shrink: 0;
    .flex(center, center);
    color: @fontWeightColor;
    font-weight: bold;
    font-size: @fontSizeBig;
  }
}
</style>
