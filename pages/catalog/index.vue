<template>
  <div class="catalog">
    <Header class="header--catalog" />
    <FirstScreenWrapper>
      <FirstScreenContentCatalog />
    </FirstScreenWrapper>
    <TabLinks />
    <div class="catalog__inner container">
      <a
        class="catalog__filter-title-link"
        href="#"
        @click.prevent="$refs.child.ToggleFilterShow()"
        ><span>Фильтры</span>
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.28586 8.00433H.477826C.212367 8.00433 0 8.21669 0 8.48215 0 8.74761.212367 8.95998.477826 8.95998H8.28586C8.50885 10.0678 9.48928 10.9067 10.6644 10.9067 11.8395 10.9067 12.8199 10.0678 13.0429 8.95998H16.5186C16.7841 8.95998 16.9965 8.74761 16.9965 8.48215 16.9965 8.21669 16.7841 8.00433 16.5186 8.00433L13.0429 8.00433C12.8199 6.89648 11.8395 6.05763 10.6644 6.05763 9.49282 6.05763 8.50885 6.89294 8.28586 8.00433zM12.1333 8.48215C12.1333 9.29269 11.4749 9.95102 10.6644 9.95102 9.85384 9.95102 9.1955 9.29269 9.1955 8.48215 9.1955 7.67162 9.85384 7.01328 10.6644 7.01328 11.4749 7.01328 12.1333 7.67162 12.1333 8.48215zM4.2792 13.8551H.477826C.212367 13.8551 0 14.0675 0 14.333 0 14.5984.212367 14.8108.477826 14.8108H4.2792C4.50219 15.9186 5.48262 16.7575 6.65771 16.7575 7.83281 16.7575 8.81324 15.9186 9.03623 14.8108L16.5186 14.8108C16.7841 14.8108 16.9965 14.5984 16.9965 14.333 16.9965 14.0675 16.7841 13.8551 16.5186 13.8551L9.03269 13.8551C8.8097 12.7473 7.82927 11.9084 6.65417 11.9084 5.47908 11.9084 4.50219 12.7473 4.2792 13.8551zM8.12659 14.333C8.12659 15.1435 7.46825 15.8018 6.65771 15.8018 5.84718 15.8018 5.18884 15.1435 5.18884 14.333 5.18884 13.5224 5.84718 12.8641 6.65771 12.8641 7.46825 12.8641 8.12659 13.526 8.12659 14.333zM4.2792 2.18911L.477826 2.18911C.212367 2.18911 0 2.40147 0 2.66693 0 2.93239.212367 3.14476.477826 3.14476L4.2792 3.14476C4.50219 4.25261 5.48262 5.09146 6.65771 5.09146 7.83281 5.09146 8.81324 4.25261 9.03623 3.14476L16.5222 3.14476C16.7876 3.14476 17 2.93239 17 2.66693 17 2.40147 16.7876 2.18911 16.5222 2.18911L9.03269 2.18911C8.8097 1.08126 7.82927.242407 6.65417.242407 5.47908.242407 4.50219 1.07772 4.2792 2.18911zM8.12659 2.66693C8.12659 3.47747 7.46825 4.13581 6.65771 4.13581 5.84718 4.13581 5.18884 3.47747 5.18884 2.66693 5.18884 1.8564 5.84718 1.19806 6.65771 1.19806 7.46825 1.19806 8.12659 1.8564 8.12659 2.66693z"
          /></svg
      ></a>
      <CatalogFilter class="catalog__filter" ref="child" />
      <div class="catalog__wrapper-chip-painting">
        <FilterChips class="catalog__filter-chip" />
        <CatalogBlock class="catalog__painting" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import FirstScreenWrapper from "~/components/common/FirstScreenWrapper.vue";
import FirstScreenContentCatalog from "~/components/FirstScreenContentCatalog.vue";
import CatalogBlock from "~/components/CatalogBlock.vue";
import TabLinks from "~/components/common/TabLinks.vue";
import FilterChips from "~/components/filters/FilterChips.vue";
import CatalogFilter from "~/components/filters/CatalogFilter.vue";

export default {
  components: {
    Header,
    FirstScreenWrapper,
    FirstScreenContentCatalog,
    CatalogBlock,
    TabLinks,
    CatalogFilter,
    FilterChips,
  },

  async asyncData({ app, route, params, error, store }) {
    try {
      await store.dispatch("catalog/fetchTab", {
        tab: store.getters["catalog/tabMenu"].tabs[0],
      });
    } catch (err) {
      console.log(err);
      return error({
        statusCode: 404,
        message: "Картины не найдены или сервер не доступен",
      });
    }
  },
};
</script>

<style lang="scss">
.catalog {
  &__inner {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__painting {
    @media (max-width: $width-mobile-max) {
      padding-top: 40px;
    }
  }

  &__filter {
    @media (max-width: $width-mobile-max) {
      padding-top: 30px;
      margin: 0 auto;
    }

    @media (min-width: $width-desktop-min) {
      margin-right: 100px;
    }
  }

  &__filter-title-link {
    position: relative;
    display: block;
    width: 280px;
    max-width: 400px;
    font-size: 12px;
    padding: 4px 40px 4px 14px;
    color: $color_dark;
    text-decoration: none;
    border: 2px solid $color_gray5;
    margin: 0 auto;

    svg {
      position: absolute;
      top: 8px;
      right: 10px;
    }

    @media (min-width: $width-desktop-min) {
      display: none;
    }
  }

  &__wrapper-chip-painting {
    position: relative;
  }

  &__filter-chip {
    margin-bottom: 40px;
  }
}
</style>
