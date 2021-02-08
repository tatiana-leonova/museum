<template>
  <section class="first-screen">
    <!-- <Header /> -->
    <slot></slot>
    <LogoAffinage class="logo" />
  </section>
</template>

<script>
import Header from "~/components/header/Header.vue";
import LogoAffinage from "~/components/common/LogoAffinage.vue";
export default {
  components: {
    Header,
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
}

.logo {
  position: absolute;
  right: 100px;
  bottom: 30px;

  @media (max-width: $width-mobile-max) {
    display: none;
  }
}
</style>
