<template>
  <div class="range">
    <input
      v-model="rangeSearchMin"
      @input="$emit('onRangeSearchInput', rangeSearchMin, rangeSearchMax)"
      type="text"
      name="min"
      placeholder="с"
    />
    <input
      v-model="rangeSearchMax"
      @input="$emit('onRangeSearchInput', rangeSearchMin, rangeSearchMax)"
      type="text"
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
