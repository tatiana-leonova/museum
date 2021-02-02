<template>
  <div class="catalog">
    <Header class="header--catalog" />
    <FirstScreen>
      <FirstBlock />
    </FirstScreen>
    <TabLinks />
    <div class="catalog__wrapper container">
      <CatalogFilter class="catalog__filter" />
      <div class="catalog__display-catalog">
        <Catalog />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import FirstScreen from "~/components/common/FirstScreen.vue";
import FirstBlock from "~/components/catalog/FirstBlock.vue";
import Catalog from "~/components/catalog/Catalog.vue";
import TabLinks from "~/components/common/TabLinks.vue";
import CatalogFilter from "~/components/filters/CatalogFilter.vue";
// import Creation from "~/components/Creation.vue";
// import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    Header,
    FirstScreen,
    FirstBlock,
    Catalog,
    TabLinks,
    CatalogFilter,
    // Creation,
    // MuseumsBlock,
  },
};
</script>

<style lang="scss">
.header--catalog {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
}

.catalog {
  &__wrapper {
    display: flex;
  }

  &__filter {
    margin-right: 120px;
  }
}
</style>
