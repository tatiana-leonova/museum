<template>
  <section class="museums container">
    <h2>музеи</h2>
    <ul>
      <MuseumItem
        class="museums__item"
        v-for="(museum, index) in museums"
        :link="museum.link"
        :title="museum.title"
        :address="museum.address"
        :phoneLink="museum.phoneLink"
        :phone="museum.phone"
        :key="index"
      />
    </ul>
  </section>
</template>

<script>
import MuseumItem from "~/components/MuseumItem.vue";
export default {
  components: {
    MuseumItem,
  },
  data: () => {
    return {
      museums: [
        {
          link: "https://rusmuseum.ru/",
          title: "Русский музей",
          address: "191186, Санкт-Петербург, Инженерная ул., 4",
          phoneLink: "88125954240",
          phone: "+7 (812) 595-42-40",
        },
        {
          link: "https://www.tretyakovgallery.ru/",
          title: "Третьяковская галерея",
          address: "119017, Москва, Лаврушинский переулок 10",
          phoneLink: "84959570727",
          phone: "+7 (495) 957-07-27",
        },
        {
          link: "http://mamm-mdf.ru/",
          title: "Мультимедиа Арт Музей",
          address: "105064, Москва, Гороховский переулок, 7",
          phoneLink: "84956321681",
          phone: "+7 (495) 632–16–81",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.museums {
  padding-top: 40px;
  margin-bottom: 80px;
  h2 {
    font-family: $YesevaOne;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    margin-bottom: 30px;
    color: $color_dark;
    text-align: center;
  }

  ul {
    @include no-list;
    display: flex;
    justify-content: space-between;
  }

  .museums__item:not(:nth-child(3n)) {
    border-right: 1px solid $color_gray6;
    padding-right: 3%;
    padding-bottom: 40px;
  }
}
</style>
