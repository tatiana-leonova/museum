<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>

    <Header class="header--index" />
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
import Header from "~/components/header/Header.vue";
import FirstScreen from "~/components/common/FirstScreen.vue";
import Promo from "~/components/main/Promo.vue";
import Biography from "~/components/Biography.vue";
import SliderBlock from "~/components/SliderBlock.vue";
import Creation from "~/components/Creation.vue";
import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    Header,
    FirstScreen,
    Promo,
    Biography,
    SliderBlock,
    Creation,
    MuseumsBlock,
  },
  async asyncData({ app, route, params, error, store }) {
    try {
      await store.dispatch("biography/fetchBiography", {
        offset: 0,
        limit: 2,
      });
    } catch (err) {
      console.log(err);
      return error({
        statusCode: 404,
        message: "Данные не найдены или сервер не доступен",
      });
    }
  },
};
</script>

<style>
</style>
