<template>
  <section class="first-screen">
    <Header />
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
  background: $color_dark;
  height: 100vh;
  position: relative;
}

.logo {
  position: absolute;
  bottom: 30px;
  right: 50px;


}
</style>
