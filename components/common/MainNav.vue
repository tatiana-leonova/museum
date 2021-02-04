<template>
  <nav
    class="main-nav"
    :class="[isMenuShow ? 'main-nav--opened' : 'main-nav--closed']"
  >
    <button
      class="main-nav__toggle"
      type="button"
      aria-label="Открыть меню"
      @click="toggleStateMenu"
    ></button>
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
    margin: 0px 5px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "+";
      width: 30px;
      height: 30px;
      top: -5px;
      right: -10px;
      color: #fff;
    }
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
    width: 24px;
    height: 16px;
    // padding: 20px 30px;

    &::after {
      position: absolute;
      content: "-";
      width: 30px;
      height: 30px;
      top: -5px;
      right: -10px;
      color: #fff;
    }
  }
}
</style>
