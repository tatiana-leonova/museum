  <template>
  <div class="tabs-link">
    <div class="tabs-link__wrapper">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click.prevent="active = tab.id"
          :class="[active === tab.id ? 'active' : '']"
        >
          <a href="#">{{ tab.title }}</a>
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
          id: "rarity",
          title: "Раритет",
          json: "https://api.npoint.io/f4454ef4e05caa4f5b9a",
        },
        {
          id: "new",
          title: "Новые",
          json: "https://api.npoint.io/d746638a9035c662e7a2",
        },
        {
          id: "antique",
          title: "Антиквариат",
          json: "https://api.npoint.io/f4454ef4e05caa4f5b9a",
        },
        {
          id: "philately",
          title: "Филателия",
          json: "https://api.npoint.io/d746638a9035c662e7a2",
        },
      ],
      active: "rarity",
    };
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
    white-space: nowrap;
    width: 100%;

    @media (max-width: $width-mobile-max) {
      padding-left: 30px;
    }
  }

  li {
    display: inline-block;
    vertical-align: top;
    margin-right: 40px;
    padding-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: $color_gray4;
    font-size: 20px;
    font-family: $YesevaOne;
    font-weight: 400;
  }

  .active {
    border-bottom: 3px solid $color_dark;

    a {
      color: $color_dark;
    }
  }
}
</style>
