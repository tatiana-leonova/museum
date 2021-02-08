<template>
  <div class="quick-search">
    <input
      @input="$emit('on-search')"
      type="text"
      placeholder="Быстрый поиск"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quick-search {
  input {
    width: 200px;
    height: 29px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 26px;
    color: $color_dark;
    border: 1px solid $color_gray6;

    &:placeholder {
      color: $color_gray6;
    }
  }
}
</style>
