<template>
  <div>
    <h1 class="is-hidden">Художник Борис Кустодиев</h1>

    <Header class="header--index" />
    <FirstScreenWrapper>
      <IntroductionContent />
    </FirstScreenWrapper>

    <BiographyBlock />
    <SliderBlock />
    <CreationBlock />
    <MuseumsBlock />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import FirstScreenWrapper from "~/components/common/FirstScreenWrapper.vue";
import IntroductionContent from "~/components/IntroductionContent.vue";
import BiographyBlock from "~/components/BiographyBlock.vue";
import SliderBlock from "~/components/SliderBlock.vue";
import CreationBlock from "~/components/CreationBlock.vue";
import MuseumsBlock from "~/components/MuseumsBlock.vue";

export default {
  components: {
    Header,
    FirstScreenWrapper,
    IntroductionContent,
    BiographyBlock,
    SliderBlock,
    CreationBlock,
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
