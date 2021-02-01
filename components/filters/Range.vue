<template>
  <div class="range">
    <label class="min">c <input type="number" name="min" placeholder="с" /></label>
    <label class="max"
      >по <input type="number" name="max" placeholder="по"
    /></label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.range {
  box-sizing: content-box;

  label {
    width: 80px;
    height: 30px;
    border: 1px solid $color_gray6;
    color: $color_gray6;
  }
}
</style>
