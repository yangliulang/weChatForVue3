<template>
  <div class="page discover-page">
    <NavHeadBar
      title="我"
      :on-forward="onForward"
      forword-icon="wx-icon-shezhi"
    />
    我
  </div>
</template>
<script>
import NavHeadBar from "../components/public/NavHeadBar";
export default {
  name: "Me",
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
