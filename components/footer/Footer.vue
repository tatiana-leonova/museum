<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__main-nav">
        <MenuLink />
      </div>
      <div class="footer__social">
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>

<script>
import MenuLink from "~/components/common/MenuLink.vue";
import SocialLinks from "~/components/common/SocialLinks.vue";

export default {
  components: {
    MenuLink,
    SocialLinks,
  },
};
</script>

<style lang="scss">
footer {
  background-color: $color_dark;
  padding: 60px 20px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    width: 700px;
  }

  &__social {
    width: 300px;
  }

  &__main-nav {
    margin: 0 auto;
    width: 700px;
  }
}
</style>
