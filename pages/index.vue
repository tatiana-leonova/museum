<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>
    <FirstScreen>
      <Promo />
    </FirstScreen>

    <Biography />
    <Creation />
  </div>
</template>

<script>
import FirstScreen from "~/components/common/FirstScreen.vue";
import Promo from "~/components/main/Promo.vue";
import Biography from "~/components/Biography.vue";
import Creation from "~/components/Creation.vue";

export default {
  components: {
    FirstScreen,
    Promo,
    Biography,
    Creation,
  },
};
</script>

<style>
</style>
