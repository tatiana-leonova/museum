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

  input {
    color: 1px solid $color_gray3;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
}
</style>
