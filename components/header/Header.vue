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

  @media (min-width: $width-desktop-min) {
    padding: 35px 100px 0 100px;
  }

  &__wrapper {
    @media (min-width: $width-desktop-min) {
      // padding: 15px 100px 0 0;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
    }

    @media (max-width: $width-mobile-max) {
      padding: 0;
      padding-top: 10px;
      padding-left: 15px;
      // padding-left: ;
    }
  }
}

.header--index {
  @media (min-width: $width-desktop-min) {
    padding: 35px 100px 0 0;
    position: absolute;
    width: 63%;
    margin-left: auto;
    padding-left: 0;
    top: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
