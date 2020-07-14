<template>
  <div class="page discover-page">
    <NavHeadBar
      title="发现"
      :on-forward="onForward"
      forword-icon="wx-icon-shezhi"
    />
    发现
  </div>
</template>
<script>
import NavHeadBar from "../components/public/NavHeadBar";
export default {
  name: "Discover",
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
