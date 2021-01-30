<template>
  <dl class="biography-item">
    <dt>{{}}</dt>
    <dd>{{}}</dd>
  </dl>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
biography-item {
  @media (min-width: $width-desktop-min) {
    display: flex;
  }

  dt {
    color: $color_gray3;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    margin-top: -5px;
  }

  dd {
    @media (max-width: $width-mobile-max) {
      margin-left: 0;
    }
  }
}
</style>
