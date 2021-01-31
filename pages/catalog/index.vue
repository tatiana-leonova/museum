<template>
  <div>
    <Header class="header--catalog" />
    <FirstScreen>
      <FirstBlock />
    </FirstScreen>
    <TabLinks />
    <Catalog />
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import FirstScreen from "~/components/common/FirstScreen.vue";
import FirstBlock from "~/components/catalog/FirstBlock.vue";
import Catalog from "~/components/catalog/Catalog.vue";
import TabLinks from "~/components/common/TabLinks.vue";
// import Biography from "~/components/Biography.vue";
// import Creation from "~/components/Creation.vue";
// import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    Header,
    FirstScreen,
    FirstBlock,
    Catalog,
    TabLinks,
    // Creation,
    // MuseumsBlock,
  },
};
</script>

<style>
.header--catalog {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
}
</style>
