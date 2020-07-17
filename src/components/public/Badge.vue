<template>
  <span
    class="badge"
    :class="{ dot: type === 'dot', 'badge-one': isNumberOne }"
    >{{ value }}</span
  >
</template>
<script>
import { computed } from "vue";
export default {
  name: "Badge",
  props: {
    value: [Number, String],
    // hidden: Boolean,
    type: String,
    max: Number
  },
  setup(props) {
    const isNumberOne = computed(() => {
      const number = typeof props.value === "number" ? props.value + "" : false;
      return number && number.length === 1 && true;
    });

    return {
      isNumberOne
    };
  }
};
</script>
<style lang="less" scoped>
.badge {
  background-color: red;
  .flex(center, center);
  padding: 0 10px;
  height: 36px;
  min-width: 36px;
  border-radius: 18px;
  color: white;
  &.dot {
    padding: 0;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  &.badge-one {
    padding: 0;
  }
}
</style>
