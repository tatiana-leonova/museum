  <template>
  <div class="tabs-link">
    <div class="tabs-link__wrapper">
      <ul>
        <li
          v-for="(tab, index) in tabMenu.tabs"
          :key="index"
          @click.prevent="onTabClick(tab)"
          :class="[tabMenu.active === tab.id ? 'active' : '']"
        >
          <a href="#">{{ tab.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onTabClick(tab) {
      this.$store.dispatch("catalog/changeTabActive", {
        tab: tab,
      });
    },
  },
  computed: {
    tabMenu() {
      return this.$store.getters["catalog/tabMenu"];
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-link {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  padding-top: 30px;
  overflow: hidden;
  transition: all 0.5s;
  border-bottom: 1px solid $color_gray6;
  margin-bottom: 30px;

  @media (min-width: $width-desktop-min) {
    display: block;
    max-width: 920px;
    padding-top: 60px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  &__wrapper {
    padding: 0 0 20px;
    margin: 0 0 -20px;
    overflow: hidden;
    overflow-x: auto;
  }

  ul {
    @include no-list;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    width: 100%;

    @media (max-width: $width-mobile-max) {
      padding-left: 30px;
    }
  }

  li {
    display: inline-block;
    vertical-align: top;
    padding-bottom: 5px;
    margin-right: 40px;
  }

  a {
    font-size: 20px;
    font-family: $YesevaOne;
    font-weight: 400;
    text-decoration: none;
    color: $color_gray4;
    transition: all 0.5s;

    @media (max-width: 600px) {
      font-size: 14px;
    }

    &:hover,
    &:focus {
      color: $color_dark;
    }

    &:active {
      opacity: 0.5;
    }
  }

  .active {
    border-bottom: 3px solid $color_dark;

    a {
      color: $color_dark;
    }
  }
}
</style>
