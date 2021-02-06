<template>
  <div class="slider">
    <div class="slider__preview" ref="container">
      <div
        class="slider__preview-wrapper"
        :style="{ transform: `translate3d(${currentPosition}px, 0, 0)` }"
      >
        <div
          v-for="(photo, index) in photos"
          ref="previewPhoto"
          :key="index"
          @click="changePhoto(index)"
          class="slider__preview-item"
          :class="{ active: activePhoto === index }"
          :style="{
            backgroundImage:
              'url(' + require('~/assets/img/' + photo.img) + ')',
          }"
        ></div>
      </div>
    </div>
    <div class="slider__link-paintings">
      <a href="#" target="_blank">все картины <span></span></a>
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
        @click="previousActivePhoto()"
      >
        <ArrowLong />
      </button>
      <button
        type="button"
        aria-label="Следующая картина"
        class="slider__arrow slider__arrow--next"
        @click="nextActivePhoto()"
      >
        <ArrowLong />
      </button>
    </div>
    <p class="slider__active-photo-name">{{ photos[activePhoto].name }}</p>
    <p class="slider__active-photo-counter">
      <span> {{ photos.indexOf(photos[activePhoto]) + 1 }} </span> /
      {{ photos.length }}
    </p>
  </div>
</template>

<script>
import ArrowLong from "~/components/common/ArrowLong.vue";

export default {
  props: ["photos"],
  data: () => {
    return {
      windowWidth: 0,
      activePhoto: 0,
      startX: 0,
      currentIndex: 0,
      maxWidthMobile: 1023,
      marginPreviewPhoto: 20,
      isMounted: false,
    };
  },
  components: {
    ArrowLong,
  },
  mounted() {
    this.isMounted = true;
    document.addEventListener("keydown", (event) => {
      if (event.code == "ArrowLeft") this.previousActivePhoto();
      if (event.code == "ArrowRight") this.nextActivePhoto();
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
        this.nextPrewiewPhoto();
        this.startX = null;
      } else if (xDelta < -45) {
        this.previousPreviewPhoto();
        this.startX = null;
      }
    });
    this.windowWidth = window.innerWidth;
  },
  methods: {
    changePhoto(index) {
      this.activePhoto = index;
    },
    nextActivePhoto() {
      this.changePhoto(
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0
      );
    },
    previousActivePhoto() {
      this.changePhoto(
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1
      );
    },
    previousPreviewPhoto() {
      this.currentIndex -= 1;

      if (this.currentIndex < 0) {
        this.currentIndex = this.$refs.previewPhoto.length - 1;
      }
    },
    nextPrewiewPhoto() {
      this.currentIndex += 1;

      if (this.currentIndex > this.$refs.previewPhoto.length - 1) {
        this.currentIndex = 0;
      }
    },
  },
  computed: {
    currentPosition() {
      if (this.windowWidth > this.maxWidthMobile) {
        return;
      }

      if (!this.isMounted) {
        return 0;
      } else {
        let border =
          (this.$refs.container.offsetWidth -
            this.$refs.previewPhoto[0].offsetWidth) /
          2;
        let offsetPosition =
          this.currentIndex * this.marginPreviewPhoto - border;
        this.activePhoto = this.currentIndex;
        return -(
          this.$refs.previewPhoto[0].offsetWidth * this.currentIndex +
          offsetPosition
        );
      }
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

  &__active-photo-name {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: $color_gray5;
    text-align: center;
  }

  &__active-photo-counter {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: $color_gray8;
    text-align: center;

    > span {
      color: $color_gray5;
    }
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
    transition: transform 0.5s ease;
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
    opacity: 0.45;
    transition: 0.5s;

    &:hover {
      opacity: 0.8;
    }
    &.active {
      opacity: 1;
    }

    @media (max-width: $width-mobile-max) {
      width: 65vw;
      height: 50vw;
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

      span {
        display: inline-block;
        border: 1px solid $color_gray3;
        transform: rotate(-135deg);
        border-right: none;
        border-top: none;
        width: 5px;
        height: 5px;
        margin: 0 0 2px 5px;
      }
    }
  }

  &__arrow {
    border: none;
    cursor: pointer;
    background: inherit;
    transition: 0.5s;
    position: absolute;
    bottom: 20px;

    &:hover,
    &:focus {
      opacity: 0.5;
    }

    &--previous {
      left: 0;
    }

    &--next {
      right: 0;
      transform: scaleX(-1);
    }

    @media (max-width: $width-mobile-max) {
      display: none;
    }
  }
}
</style>
