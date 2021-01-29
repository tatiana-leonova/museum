<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>
    <FirstScreen>
      <Promo />
    </FirstScreen>

    <Biography />
    <SliderBlock />
    <Creation />
    <MuseumsBlock />
  </div>
</template>

<script>
import FirstScreen from "~/components/common/FirstScreen.vue";
import Promo from "~/components/main/Promo.vue";
import Biography from "~/components/Biography.vue";
import SliderBlock from "~/components/SliderBlock.vue";
import Creation from "~/components/Creation.vue";
import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    FirstScreen,
    Promo,
    Biography,
    SliderBlock,
    Creation,
    MuseumsBlock,
  },
};
</script>

<style>
</style>
