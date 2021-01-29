<template>
  <section class="slider-block">
    <div class="container">
      <div class="slider-block__wrapper">
        <Slider :photos="photos"></Slider>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "~/components/common/Slider.vue";
export default {
  data: () => {
    return {
      photos: [
        "painting-1.jpg",
        "painting-2.jpg",
        "painting-3.jpg",
        "painting-4.jpg",
        "painting-1.jpg",
        "painting-2.jpg",
        "painting-3.jpg",
        "painting-4.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-01-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg",
        // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg",
      ],
    };
  },
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.slider-block {
  background-color: $color-dark;

  &__wrapper {
    padding: 6px;
    background-color: #fff;
    border-radius: 8px;
    max-width: 920px;
    box-shadow: 0 5px 8px #0000007a;
  }
}
</style>
