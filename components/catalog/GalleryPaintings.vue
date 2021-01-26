<template>
  <div class="gallery-paintings">
    <div class="gallery-paintings__wrapper">
      <div
        v-for="(painting, index) in paintings"
        class="gallery-paintings__item"
        :style="{
          backgroundImage: 'url(' + require('~/assets/img/' + painting) + ')',
        }"
        :key="index"
      ></div>
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
        "painting-1.jpg",
        "painting-2.jpg",
        "painting-3.jpg",
        "painting-4.jpg",
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

  &__wrapper {
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    white-space: nowrap;
  }

  &__item {
    display: inline-block;
    vertical-align: top;
    width: 300px;
    height: 250px;
    background: none no-repeat 50% 50%;
    background-size: cover;
    margin-right: 20px;
  }
}
</style>
