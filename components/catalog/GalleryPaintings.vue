<template>
  <div class="gallery-paintings">
    <div class="gallery-paintings__wrapper">
      <ul>
        <li
          v-for="(painting, index) in paintings"
          class="gallery-paintings__item"
          :style="{
            backgroundImage: 'url(' + require('~/assets/img/' + painting) + ')',
          }"
          :key="index"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      paintings: [
        "painting-1.jpg",
        "painting-2.jpg",
        "painting-3.jpg",
        "painting-4.jpg",
        "painting-5.jpg",
        "painting-6.jpg",
        "painting-7.jpg",
        "main-img.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery-paintings {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s;
  @media (max-width: $width-mobile-max) {
    margin-bottom: 40px;
  }

  &__wrapper {
    padding: 0 0 20px;
    margin: 0 0 -20px;
    overflow: hidden;
    overflow-x: auto;
  }

  ul {
    @include no-list;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    width: 100%;
  }

  &__item {
    display: inline-block;
    vertical-align: top;
    width: 360px;
    height: 258px;
    background: none no-repeat 50% 50%;
    background-size: cover;
    margin-right: 20px;

    @media (max-width: $width-mobile-max) {
      width: 192px;
      height: 160px;
    }
  }
}
</style>
