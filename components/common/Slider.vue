<template>
  <div class="slider">
    <div class="slider__preview" ref="container">
      <div class="slider__preview-wrapper">
        <div
          class="slider__preview-item"
          v-for="(photo, index) in photos"
          ref="photo"
          :key="index"
          @click="changePhoto(index)"
          :class="{ active: slider__active - photo == index }"
          :style="{
            backgroundImage:
              'url(' + require('~/assets/img/' + photo.img) + ')',
          }"
        ></div>
      </div>
    </div>
    <div class="slider__link-paintings">
      <a href="#" target="_blank">все картины</a>
    </div>
    <div class="slider__active-photo-wrapper">
      <div
        class="slider__active-photo"
        :style="{
          backgroundImage:
            'url(' + require('~/assets/img/' + photos[activePhoto].img) + ')',
        }"
      ></div>
      <button
        type="button"
        aria-label="Предыдущая картина"
        class="slider__arrow slider__arrow--previous"
        @click="previousPhoto()"
      >
        <ArrowLong />
      </button>
      <button
        type="button"
        aria-label="Следующая картина"
        class="slider__arrow slider__arrow--next"
        @click="nextPhoto()"
      >
        <ArrowLong />
      </button>
    </div>
    <p class="slider__active-photo-name">{{ photos[activePhoto].name }}</p>
    <p class="slider__active-photo-counter">
      {{ photos.indexOf(photos[activePhoto + 1]) }} / {{ photos.length }}
    </p>
  </div>
</template>

<script>
import ArrowLong from "~/components/common/ArrowLong.vue";

export default {
  props: ["photos"],
  data: () => {
    return {
      activePhoto: 0,
      startX: 0,
    };
  },
  components: {
    ArrowLong,
  },
  mounted() {
    this.isMounted = true;
    this.changePhoto(0);
    document.addEventListener("keydown", (event) => {
      if (event.code == "ArrowLeft") this.previousPhoto();
      if (event.code == "ArrowRight") this.nextPhoto();
    });

    // swipe
    this.$refs.container.addEventListener("touchstart", (event) => {
      this.startX = (event.touches || event.originalEvent.touches)[0].clientX;
    });

    this.$refs.container.addEventListener("touchmove", (event) => {
      if (!this.startX) return;

      const xDelta =
        this.startX - (event.touches || event.originalEvent.touches)[0].clientX;

      if (xDelta > 45) {
        this.nextPhoto();
        this.startX = null;
      } else if (xDelta < -45) {
        this.previousPhoto();
        this.startX = null;
      }
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
  position: relative;

  @media (max-width: $width-mobile-max) {
    display: flex;
    flex-direction: column;
  }

  &__active-photo-wrapper {
    @media (max-width: $width-mobile-max) {
      display: none;
    }
  }

  &__active-photo-name,
  &__active-photo-counter {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: $color_gray5;
    text-align: center;
  }

  &__active-photo-name {
    @media (max-width: $width-mobile-max) {
      order: -1;
    }
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
    display: inline-block;
    vertical-align: top;
    width: 700px;
    overflow: hidden;
    margin-bottom: 40px;

    @media (max-width: $width-mobile-max) {
      width: 100%;
    }
  }

  &__preview-wrapper {
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    white-space: nowrap;
  }

  &__preview-item {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    height: 90px;
    background-size: cover;
    margin-right: 20px;
    cursor: pointer;
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

    @media (max-width: $width-mobile-max) {
      width: 65vw;
      height: 50vw;
      max-width: 390px;
      max-height: 300px;
    }
  }

  &__link-paintings {
    @media (min-width: $width-desktop-min) {
      position: absolute;
      top: 30px;
      right: 0;
    }

    @media (max-width: $width-mobile-max) {
      text-align: center;
      order: 1;
    }
    a {
      text-decoration: none;
      color: $color_gray3;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }
  }

  &__arrow {
    border: none;
    cursor: pointer;
    background: inherit;
    transition: 0.5s;
    position: absolute;

    &:hover,
    &:focus {
      opacity: 0.5;
    }

    &--previous {
      left: 0;
      bottom: 20px;
    }

    &--next {
      right: 0;
      bottom: 20px;
      transform: scaleX(-1);
    }

    @media (max-width: $width-mobile-max) {
      display: none;
    }
  }
}
</style>
