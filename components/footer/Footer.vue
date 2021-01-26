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

<style lang="scss" scoped>
.footer {
  background-color: $color_dark;
  padding: 60px 20px;

  @media (max-width: $width-mobile-max) {
    padding: 40px 20px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
  }

  &__social {
    width: 300px;
  }

  &__main-nav {
    margin: 0 auto;
    padding: 0 50px 40px 50px;

    @media (max-width: $width-mobile-max) {
      padding-bottom: 40px;
      padding: 0 0 40px 0;
    }
  }
}
</style>
