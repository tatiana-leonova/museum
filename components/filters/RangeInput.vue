<template>
  <div class="range-input">
    <input
      v-model="rangeSearchMin"
      @input="$emit('onRangeSearchInput', rangeSearchMin, rangeSearchMax)"
      type="number"
      name="min"
      placeholder="с"
    />
    <input
      v-model="rangeSearchMax"
      @input="$emit('onRangeSearchInput', rangeSearchMin, rangeSearchMax)"
      type="number"
      name="max"
      placeholder="по"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      rangeSearchMin: null,
      rangeSearchMax: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.range-input {
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;

  input {
    width: 70px;
    height: 29px;
    font-size: 14px;
    color: $color_dark;
    padding: 0 10px;
    border: 1px solid $color_gray6;
    transition: all 0.5s;

    &:placeholder {
      font-size: 14px;
      color: $color_gray6;
    }

    &:hover,
    &:focus {
      border: 1px solid $color_dark;
    }
  }
}
</style>
