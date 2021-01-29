<template>
  <section class="slider-block">
    <h2 class="is-hidden">Галерея картин Бориса Кустодиева</h2>
    <!-- <div class="container"> -->
    <div class="slider-block__wrapper">
      <Slider :photos="photos"></Slider>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import Slider from "~/components/common/Slider.vue";
export default {
  data: () => {
    return {
      photos: [
        {
          name: "Осень в провинции. Чаепитие",
          img: "painting-1.jpg",
        },
        {
          name: "Купец с купчихой",
          img: "painting-2.jpg",
        },
        {
          name: "Монахиня",
          img: "painting-3.jpg",
        },
        {
          name: "Портрет Степана Лукича Никольского",
          img: "painting-4.jpg",
        },
        {
          name: "На террасе",
          img: "painting-1.jpg",
        },
        {
          name: "Купец с купчихой",
          img: "painting-2.jpg",
        },
        {
          name: "Портрет артистки Т. В. Чижовой",
          img: "painting-3.jpg",
        },
        {
          name: "Трактирщик",
          img: "painting-4.jpg",
        },
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
  padding: 40px 0;

  &__wrapper {
    max-width: 920px;

    @media (max-width: $width-mobile-max) {
      max-width: 100%;
    }
  }
}
</style>
