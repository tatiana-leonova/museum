<template>
  <nav class="main-nav">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <nuxt-link class="main-nav__link" :to="item.link">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return this.$store.getters["menu/menuItems"];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  @media (max-width: $width-mobile-max) {
    display: none;
  }

  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $width-mobile-max) {
      flex-direction: column;
      text-align: center;
    }

    li:not(:last-child) {
      padding-right: 10px;

      @media (max-width: $width-mobile-max) {
        padding-right: 0;
      }
    }
  }

  &__link {
    text-decoration: none;
    color: $color_gray5;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>
