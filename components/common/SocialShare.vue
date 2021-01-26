<template>
  <div class="social-share">
    <YandexShare
      :services="['vkontakte', 'twitter', 'facebook']"
      data-color-scheme="whiteblack"
      data-size="l"
      counter
    />
  </div>
</template>

<script>
import YandexShare from "@cookieseater/vue-yandex-share";
export default {
  components: {
    YandexShare,
  },
};
</script>


<style lang="scss">
.ya-share2__item {
  border: 1px solid $color_gray3;
  width: 94px;
  height: 34px;
  padding: 3px 35px !important;
  margin-left: 10px !important;

  @media (max-width: $width-mobile-max) {
    width: 84px;
    padding: 3px 30px !important;
  }
}
</style>
