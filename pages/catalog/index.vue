<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>
    <FirstScreen>
      <FirstBlock />
    </FirstScreen>

    <Catalog />
  </div>
</template>

<script>
import FirstScreen from "~/components/common/FirstScreen.vue";
import FirstBlock from "~/components/catalog/FirstBlock.vue";
import Catalog from "~/components/catalog/Catalog.vue";
// import Biography from "~/components/Biography.vue";
// import Creation from "~/components/Creation.vue";
// import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    FirstScreen,
    FirstBlock,
    Catalog,
    // Biography,
    // Creation,
    // MuseumsBlock,
  },
};
</script>

<style>
</style>
