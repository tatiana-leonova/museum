<template>
  <div class="first-block">
    <div class="first-block__wrapper-title">
      <h1>картины</h1>
      <span>бориса кустодиева</span>
    </div>
    <GalleryPaintings />
  </div>
</template>

<script>
import GalleryPaintings from "~/components/catalog/GalleryPaintings.vue";

export default {
  components: {
    GalleryPaintings,
  },
};
</script>

<style lang="scss" scoped>
.first-block {
  h1 {
    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 91%;
    color: $color_gray5;
    @include zero-indent;
    margin-right: 40px;
  }

  &__wrapper-title {
    display: flex;
    justify-content: center;
    padding-top: 50px;

    span {
      font-family: $Helvetica;
      color: $color_gray5;
      font-size: 40px;
      line-height: 50px;
      font-weight: 300;
      width: 240px;
    }
  }
}
</style>
