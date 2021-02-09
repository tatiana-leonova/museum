<template>
  <header class="header">
    <div class="header__wrapper">
      <MainSearch class="header__main-search" />
      <MainNav />
    </div>
  </header>
</template>

<script>
import MainNav from "~/components/MainNav.vue";
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
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    padding: 35px 100px 0 100px;
  }

  &__wrapper {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
      margin-left: auto;
    }

    @media (max-width: $width-mobile-max) {
      padding: 0;
      padding-top: 10px;
    }
  }

  &__main-search {
    @media (max-width: $width-mobile-max) {
      padding-left: 15px;
    }
  }
}

.header--index {
  @media (min-width: $width-desktop-min) {
    width: 63%;
    padding: 35px 100px 0 0;
    margin-left: auto;
  }
}
</style>
