<template>
  <div class="slider">
    <div class="slider__preview">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        @click="changePhoto(index)"
        :class="{ active: slider__active - photo == index }"
        :style="{
          backgroundImage: 'url(' + require('~/assets/img/' + photo.img) + ')',
        }"
      ></div>
    </div>
    <div class="slider__active-photo-wrapper">
      <div
        class="slider__active-photo"
        :style="{
          backgroundImage:
            'url(' + require('~/assets/img/' + photos[activePhoto].img) + ')',
        }"
      ></div>
      <p class="slider__active-photo-name">{{ photos[activePhoto].name }}</p>
      <p class="slider__active-photo-counter">
        {{ photos.indexOf(photos[activePhoto + 1]) }} / {{ photos.length }}
      </p>
      <button
        type="button"
        aria-label="Предыдущая картина"
        class="slider__arrow-previous"
        @click="previousPhoto()"
      ></button>
      <button
        type="button"
        aria-label="Следующая картина"
        class="slider__arrow-next"
        @click="nextPhoto()"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  data: () => {
    return {
      activePhoto: 0,
    };
  },
  mounted() {
    this.changePhoto(0);
    document.addEventListener("keydown", (event) => {
      if (event.code == "ArrowLeft") this.previousPhoto();
      if (event.code == "ArrowRight") this.nextPhoto();
    });
  },
  methods: {
    changePhoto(index) {
      this.activePhoto = index;
    },
    nextPhoto() {
      this.changePhoto(
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0
      );
    },
    previousPhoto() {
      this.changePhoto(
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  background-color: $color-dark;

  &__active-photo-name,
  &__active-photo-counter {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: $color_gray5;
    text-align: center;
  }

  &__active-photo {
    width: 100%;
    height: 530px;
    margin-bottom: 5px;
    padding-bottom: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  &__preview {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 5px;

    div {
      width: 100%;
      border: 2px solid #fff;
      outline: 2px solid #fff;
      cursor: pointer;
      padding-bottom: 65%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 1;

      &:hover {
        opacity: 0.6;
      }
      &.active {
        outline-color: #000;
        opacity: 1;
      }
    }
  }
}
</style>
