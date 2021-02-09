<template>
  <section class="first-screen">
    <slot></slot>
    <LogoAffinage class="first-screen__logo" />
  </section>
</template>

<script>
import LogoAffinage from "~/components/common/LogoAffinage.vue";
export default {
  components: {
    LogoAffinage,
  },
};
</script>

<style lang="scss" scoped>
.first-screen {
  position: relative;
  background: $color_dark;

  @media (min-width: $width-desktop-min) {
    height: 100vh;
  }

  &__logo {
    position: absolute;
    right: 100px;
    bottom: 30px;

    @media (max-width: $width-mobile-max) {
      display: none;
    }
  }
}
</style>
