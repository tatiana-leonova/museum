<template>
  <li class="filter-items-count">
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
    &::after {
      position: absolute;
      content: "+";
      top: -2px;
      left: -10px;
      font-size: 14px;
    }
  }
}
</style>
