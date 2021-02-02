<template>
  <li class="input-checkbox">
    <input type="checkbox" :id="item.id" />
    <label :for="item.id">{{ item.name }}</label>
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
    cursor: pointer;
  }
}
</style>
