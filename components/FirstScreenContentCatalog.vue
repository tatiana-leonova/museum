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
import GalleryPaintings from "~/components/GalleryPaintings.vue";

export default {
  components: {
    GalleryPaintings,
  },
};
</script>

<style lang="scss" scoped>
.first-block {
  @media (min-width: $width-desktop-min) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-bottom: 100px;
  }

  @media (max-width: $width-mobile-max) {
    padding-top: 92px;
  }

  h1 {
    @include zero-indent;

    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 65%;
    color: $color_gray5;
    margin-right: 40px;

    @media (max-width: 758px) {
      font-size: 40px;
      line-height: 110%;
    }
  }

  &__wrapper-title {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 70px;

    span {
      width: 240px;
      font-family: $Helvetica;
      line-height: 50px;
      font-weight: 300;
      font-size: 40px;
      color: $color_gray5;

      @media (max-width: 510px) {
        padding-top: 20px;
      }
    }

    @media (max-width: 510px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: $width-mobile-max) {
      padding-top: 30px;
      padding-bottom: 100px;

      span {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
}
</style>
