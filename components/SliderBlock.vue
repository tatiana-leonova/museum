<template>
  <section class="slider-block">
    <h2 class="is-hidden">Галерея картин Бориса Кустодиева</h2>
    <div class="slider-block__wrapper">
      <Slider :photos="photos"></Slider>
    </div>
  </section>
</template>

<script>
import Slider from "~/components/common/Slider.vue";
export default {
  components: {
    Slider,
  },

  data: () => {
    return {
      photos: [
        {
          name: "Осень в провинции. Чаепитие",
          img: "painting-7.jpg",
        },
        {
          name: "Купчиха за чаем",
          img: "painting-1.jpg",
        },
        {
          name: "Пасхальный обряд (Христосование)",
          img: "painting-2.jpg",
        },
        {
          name: "Сирень",
          img: "painting-3.jpg",
        },
        {
          name: "Деревенский праздник",
          img: "main-img.jpg",
        },
        {
          name: "Рождество",
          img: "painting-4.jpg",
        },
        {
          name: "Красивая осень",
          img: "painting-5.jpg",
        },
        {
          name: "Купец с купчихой",
          img: "painting-6.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-block {
  padding: 30px 0;
  background-color: $color-dark;
  margin-bottom: 80px;

  @media (max-width: $width-mobile-max) {
    padding: 40px 0 20px;
    margin-bottom: 60px;
  }

  &__wrapper {
    max-width: 920px;

    @media (min-width: $width-desktop-min) {
      margin: 0 auto;
    }

    @media (max-width: $width-mobile-max) {
      max-width: 100%;
    }
  }
}
</style>
