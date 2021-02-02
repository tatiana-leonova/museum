<template>
  <li class="input-checkbox">
    <label><input type="checkbox" />{{ item.name }}</label>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.input-checkbox {
  color: $color_dark;
}
</style>
