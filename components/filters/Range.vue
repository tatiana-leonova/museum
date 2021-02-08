<template>
  <div class="range">
    <label>
      <input type="text" name="min" placeholder="с" />
    </label>
    <label>
      <input type="text" name="max" placeholder="по" />
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.range {
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;

  input {
    width: 70px;
    height: 29px;
    border: 1px solid $color_gray6;
    color: $color_dark;
    font-size: 14px;
    padding: 0 10px;
    transition: all 0.5s;

    &:placeholder {
      color: $color_gray6;
    }

    &:hover,
    &:focus {
      border: 1px solid $color_dark;
    }
  }
}
</style>
