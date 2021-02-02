<template>
  <div class="quick-search">
    <label class="is-hidden" for="search">Поиск по фильтру</label>
    <input type="text" name="search" id="search" placeholder="Быстрый поиск" />
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
    border: 1px solid $color_gray6;
    color: $color_dark;
    font-size: 12px;
    line-height: 26px;

    &:placeholder {
      color: $color_gray6;
    }
  }
}
</style>
