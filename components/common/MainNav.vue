<template>
  <nav class="main-nav">
    <MenuLink />
  </nav>
</template>

<script>
import MenuLink from "~/components/common/MenuLink.vue";

export default {
  components: {
    MenuLink,
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
   @media (max-width: $width-mobile-max) {
     display: none;
   }
}
</style>
