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
  p {
    @include zero-indent;
  }
}
</style>
