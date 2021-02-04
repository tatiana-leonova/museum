<template>
  <section class="header">
    <div class="header__wrapper">
      <MainSearch />
      <MainNav />
    </div>
  </section>
</template>

<script>
import MainNav from "~/components/common/MainNav.vue";
import MainSearch from "~/components/common/MainSearch.vue";

export default {
  components: {
    MainNav,
    MainSearch,
  },
};
</script>

<style lang="scss">
.header {
  padding-top: 20px;
  background: $color_dark;

  &__wrapper {
    @media (min-width: $width-desktop-min) {
      // width: 63%;
      padding: 0 95px;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
    }

    @media (max-width: $width-mobile-max) {
      padding: 0 20px;
    }
  }
}

.header--index {
  @media (min-width: $width-desktop-min) {
    position: absolute;
    width: 60%;
    margin-left: auto;
    top: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
