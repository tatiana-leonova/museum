<template>
  <section class="header">
    <div class="header__wrapper">
    <SearchItem />
    <MainNav />
    </div>
  </section>
</template>

<script>
import MainNav from "~/components/common/MainNav.vue";
import SearchItem from "~/components/common/SearchItem.vue";

export default {
  components: {
    MainNav,
    SearchItem,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 20px;
  background: $color_dark;

  &__wrapper {
    width: 63%;
    padding: 0 95px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
  }
}
</style>
