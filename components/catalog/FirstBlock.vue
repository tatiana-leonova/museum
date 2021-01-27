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
  @media (min-width: $width-desktop-min) {
    height: calc(100vh - 46px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
  }

  @media (max-width: $width-mobile-max) {
  padding-top: 92px;
  }

  h1 {
    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 65%;
    color: $color_gray5;
    @include zero-indent;
    margin-right: 40px;

    @media (max-width: 758px) {
      font-size: 40px;
      line-height: 110%;
    }
  }

  &__wrapper-title {
    display: flex;
    justify-content: center;
    padding-bottom: 60px;

    span {
      font-family: $Helvetica;
      color: $color_gray5;
      font-size: 40px;
      line-height: 50px;
      font-weight: 300;
      width: 240px;
    }

    @media (max-width: 510px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: $width-mobile-max) {
      margin-bottom: 100px;

      span {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
}
</style>
