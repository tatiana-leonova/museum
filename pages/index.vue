<template>
  <div>
    <h1>Художник Борис Кустодиев</h1>
    <FirstScreen>
      <FirstScreenText/>
    </FirstScreen>
  </div>
</template>

<script>
import FirstScreen from "~/components/common/FirstScreen.vue";
import FirstScreenText from "~/components/main/FirstScreenText.vue";

export default {
  components: {
    FirstScreen,
    FirstScreenText,
  },
};
</script>

<style>
</style>
