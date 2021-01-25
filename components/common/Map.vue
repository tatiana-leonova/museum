<template>
  <div class="map" id="mymap" widht="100%"></div>
</template>

<script>
export default {
  head: {
    script: [
      {
        hid: "stripe",
        src:
          "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abefc6162c6acaafecf2ce2f957bf186f75e9bd083ff364a8b4378cb394d3a0a8&amp;&amp;height=514&amp;id=mymap&amp;lang=ru_RU&amp;scroll=true",
        defer: true,
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.map {
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>

