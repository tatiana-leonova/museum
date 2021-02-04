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
  data: () => {
    return {
      isMenuShow: false,
    };
  },

  methods: {
    toggleStateMenu() {
      console.log("toggleStateMenu");
      this.isMenuShow = !this.isMenuShow;
    },
  },

  computed: {
    menuItems() {
      return this.$store.getters["menu/menuItems"];
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
      padding-right: 10px;

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
    text-decoration: none;
    color: $color_gray5;
    font-size: 14px;
    line-height: 100%;

    @media (max-width: $width-mobile-max) {
      font-size: 24px;
      font-weight: 40px;
    }
  }

  main-nav__toggle {
    display: none;
  }
}

// мобильное меню
@media (max-width: $width-mobile-max) {
  .main-nav__toggle {
    display: block;
    width: 24px;
    height: 16px;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    z-index: 50;
    outline: none;
  }

  .main-nav--closed .main-nav__list {
    display: none;
  }

  .main-nav--opened .main-nav__list {
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    flex-direction: column;
    text-align: center;
    padding: 100px 0;
    background-color: $color_dark;
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
      background-color: #ffffff;
    }

    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:active::before,
    &:active::after {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .main-nav--closed .main-nav__toggle::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 2px;
    background-color: #ffffff;
    box-shadow: 0 7px 0 0 #ffffff, 0 14px 0 0 #ffffff;
  }

  .main-nav--closed .main-nav__toggle:active::before {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 0 0 rgba(255, 255, 255, 0.3),
      0 14px 0 0 rgba(255, 255, 255, 0.3);
  }
}
</style>
