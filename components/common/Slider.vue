<template>
  <div class="slider">
    <div class="thumbnails">
      <div
        v-for="(photo, index) in photos"
        :src="photo"
        :key="index"
        @click="changePhoto(index)"
        :class="{ active: activePhoto == index }"
        :style="{
          backgroundImage: 'url(' + require('~/assets/img/' + photo.img) + ')',
        }"
      ></div>
    </div>
    <div
      class="activePhoto"
      :style="{
        backgroundImage:
          'url(' + require('~/assets/img/' + photos[activePhoto].img) + ')',
      }"
    >
      <button
        type="button"
        aria-label="Предыдущая картина"
        class="previous"
        @click="previousPhoto()"
      ></button>
      <button
        type="button"
        aria-label="Следующая картина"
        class="next"
        @click="nextPhoto()"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  // props: ["name", "img"],
  data: () => {
    return {
      activePhoto: 0,
    };
  },
  mounted() {
    this.changePhoto(0);
    document.addEventListener("keydown", (event) => {
      if (event.which == 37) this.previousPhoto();
      if (event.which == 39) this.nextPhoto();
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
}
.activePhoto {
  width: 100%;
  margin-bottom: 5px;
  padding-bottom: 65%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.thumbnails {
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
</style>
