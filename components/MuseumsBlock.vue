<template>
  <section class="museums" id="museums">
    <h2>музеи</h2>
    <div>
      <Map />
    </div>
    <ul>
      <MuseumItem
        class="museums__item"
        v-for="(museum, index) in museums"
        :link="museum.link"
        :title="museum.title"
        :city="museum.city"
        :address="museum.address"
        :phoneLink="museum.phoneLink"
        :phone="museum.phone"
        :key="index"
      />
    </ul>
  </section>
</template>

<script>
import Map from "~/components/common/Map.vue";
import MuseumItem from "~/components/MuseumItem.vue";

export default {
  components: {
    Map,
    MuseumItem,
  },
  data: () => {
    return {
      museums: [
        {
          link: "https://rusmuseum.ru/",
          title: "Русский музей",
          city: "191186, Санкт-Петербург,",
          address: "Инженерная ул., 4",

          phoneLink: "88125954240",
          phone: "+7 (812) 595-42-40",
        },
        {
          link: "https://www.tretyakovgallery.ru/",
          title: "Третьяковская галерея",
          city: "119017, Москва,",
          address: " Лаврушинский переулок 10",
          phoneLink: "84959570727",
          phone: "+7 (495) 957-07-27",
        },
        {
          link: "http://mamm-mdf.ru/",
          title: "Мультимедиа Арт Музей",
          city: "105064, Москва,",
          address: " Гороховский переулок, 7",
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
  margin-bottom: 100px;

  @media (max-width: $width-mobile-max) {
    padding-top: 70px;
    margin-bottom: 70px;
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    color: $color_dark;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }

  ul {
    @include no-list;

    @media (max-width: $width-mobile-max) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: $width-desktop-min) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 890px;
      margin: 0 auto;
    }
  }

  .museums__item {
    @media (max-width: $width-mobile-max) {
      width: 100%;
      max-width: 1023px;
      padding: 30px 20px;
    }
  }

  .museums__item:not(:nth-child(3n)) {
    @media (min-width: $width-desktop-min) {
      padding-right: 90px;
      padding-bottom: 40px;
      border-right: 1px solid $color_gray6;
    }
  }

  .museums__item:not(:last-child) {
    @media (max-width: $width-mobile-max) {
      border-bottom: 1px solid $color_gray6;
    }
  }
}
</style>
