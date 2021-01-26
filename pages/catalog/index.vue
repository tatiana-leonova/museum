<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>
    <FirstScreen>
      <FirstBlock />
    </FirstScreen>

  </div>
</template>

<script>
import FirstScreen from "~/components/common/FirstScreen.vue";
import FirstBlock from "~/components/catalog/FirstBlock.vue";
// import Biography from "~/components/Biography.vue";
// import Creation from "~/components/Creation.vue";
// import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    FirstScreen,
    FirstBlock,
    // Biography,
    // Creation,
    // MuseumsBlock,
  },
};
</script>

<style>
</style>
