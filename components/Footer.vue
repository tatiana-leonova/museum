<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <nuxt-link class="footer__nav-link" :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer__social">
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from "~/components/common/SocialLinks.vue";

export default {
  components: {
    SocialLinks,
  },

  computed: {
    navItems() {
      return this.$store.getters["navigation/navItems"];
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color_dark;
  padding: 50px 20px;

  @media (max-width: $width-mobile-max) {
    padding: 40px 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: 0 auto;
  }

  &__social {
    width: 300px;
  }

  &__nav {
    padding: 0 50px 40px 50px;
    margin: 0 auto;

    @media (max-width: $width-mobile-max) {
      padding: 0 0 20px 0;
    }
  }

  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $width-mobile-max) {
      flex-direction: column;
      text-align: center;
    }

    li {
      @media (max-width: $width-mobile-max) {
        margin-bottom: 10px;
      }
    }

    li:not(:last-child) {
      padding-right: 25px;

      @media (max-width: $width-mobile-max) {
        padding-right: 0;
      }
    }
  }

  &__nav-link {
    @include hover-focus-active;

    font-size: 14px;
    line-height: 100%;
    text-decoration: none;
    color: $color_gray5;
    transition: all 0.5s;
  }
}
</style>
