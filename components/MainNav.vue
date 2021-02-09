<template>
  <nav
    class="main-nav"
    :class="[isMenuShow ? 'main-nav--opened' : 'main-nav--closed']"
  >
    <button
      class="main-nav__toggle nav-icon left-arrow"
      type="button"
      aria-label="Открыть меню"
      @click="toggleStateMenu"
    >
      <span class="span"></span>
    </button>
    <ul class="main-nav__list">
      <li v-for="(item, index) in navItems" :key="index">
        <nuxt-link class="main-nav__link" :to="item.link">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      isMenuShow: false,
    };
  },

  methods: {
    toggleStateMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
  },

  computed: {
    navItems() {
      return this.$store.getters["navigation/navItems"];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  &__toggle {
    display: none;
  }

  ul {
    @include no-list;

    display: flex;
    flex-wrap: wrap;

    li:not(:last-child) {
      padding-right: 20px;

      @media (max-width: $width-mobile-max) {
        padding-right: 0;
      }
    }

    li {
      @media (max-width: $width-mobile-max) {
        padding-bottom: 20px;
      }
    }
  }

  &__link {
    @include hover-focus-active;

    font-size: 14px;
    line-height: 100%;
    text-decoration: none;
    color: $color_gray5;
    transition: all 0.5s;

    @media (max-width: $width-mobile-max) {
      font-size: 24px;
      font-weight: 40px;
    }
  }
}

// мобильное меню
@media (max-width: $width-mobile-max) {
  .main-nav__toggle {
    position: absolute;
    z-index: 50;
    top: 30px;
    right: 20px;
    display: block;
    width: 24px;
    height: 16px;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .main-nav--closed .main-nav__list {
    position: absolute;
    opacity: 0;
    transition: all 0.5s;
    visibility: hidden;
  }

  .main-nav--opened .main-nav__list {
    position: fixed;
    z-index: 1000;
    top: 0;
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    text-align: center;
    padding: 100px 0;
    background-color: $color_dark;
    opacity: 1;
    transition: 0.5s;
  }

  .main-nav--opened .main-nav__toggle {
    z-index: 1001;
    top: 20px;
    right: 20px;
    display: block;
  }

  .main-nav--opened .main-nav__toggle {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 10px;
      right: 0;
      width: 23px;
      height: 2px;
      transition: 0.5s ease-in-out;
      background-color: $color_gray6;
    }

    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  .main-nav--closed .main-nav__toggle::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 2px;
    transition: 0.5s ease-in-out;
    background-color: $color_gray6;
    box-shadow: 0 7px 0 0 $color_gray6, 0 14px 0 0 $color_gray6;
  }
}
</style>
