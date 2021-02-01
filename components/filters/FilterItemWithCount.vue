<template>
  <li>
    <p>{{ item }}</p>
    <span class="count">число</span>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
</style>
