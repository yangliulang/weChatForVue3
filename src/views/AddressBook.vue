<template>
  <div class="page">
    <NavHeadBar
      title="通讯录"
      :on-forward="onForward"
      forword-icon="wx-icon-shezhi"
    />
    通讯录
  </div>
</template>
<script>
import NavHeadBar from "../components/public/NavHeadBar";
export default {
  name: "AddressBook",
  components: {
    NavHeadBar
  },
  setup() {
    const onForward = () => {};

    return {
      onForward
    };
  }
};
</script>
<style lang="less" scoped>
.page {
}
</style>
