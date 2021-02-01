  <template>
  <div class="tabs-link">
    <div class="tabs-link__wrapper">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :class="{ 'is-active': show == index }"
          :key="index"
        >
          <a href="#" @click.prevent="show = index">{{ tab.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [
        {
          title: "Раритет",
          json: "https://api.npoint.io/f4454ef4e05caa4f5b9a",
        },
        {
          title: "Новые",
          json: "https://api.npoint.io/d746638a9035c662e7a2",
        },
        {
          title: "Антиквариат",
          json: "https://api.npoint.io/f4454ef4e05caa4f5b9a",
        },
        {
          title: "Филателия",
          json: "https://api.npoint.io/d746638a9035c662e7a2",
        },
      ],
      active: 0,
    };
  },
  computed: {
    active() {
      return this.tabs.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-link {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  padding-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  transition: all 0.5s;
  border-bottom: 1px solid $color_gray6;

  @media (min-width: $width-desktop-min) {
    max-width: 920px;
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
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
    padding-bottom: 10px;
    white-space: nowrap;
    width: 100%;

    @media (max-width: $width-mobile-max) {
      padding-left: 30px;
    }
  }

  li {
    display: inline-block;
    vertical-align: top;
    padding-right: 40px;

    &.show {
      color: $color_dark;
      border-bottom: 3px solid $color_dark;
    }
  }

  a {
    text-decoration: none;
    color: $color_gray4;
    font-size: 20px;
    font-family: $YesevaOne;
    font-weight: 400;
  }
}
</style>
