<template>
  <li class="filter-items-count" @click="$emit('on-checked')">
    <p>{{ item.name }}</p>
    <p class="count">{{}}</p>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.filter-items-count {
  display: flex;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  p {
    @include zero-indent;
  }

  &:hover {
    &::before {
      z-index: 10000;
      position: absolute;
      content: "+";
      top: -2px;
      left: -12px;
      font-size: 16px;
      color: $color_dark;
      font-size: 14px;
    }
  }
}
</style>
