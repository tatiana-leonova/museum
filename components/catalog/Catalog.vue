<template>
  <section class="catalog container">
    <h2 class="is-hidden">Каталог картин Бориса Пустадиева</h2>
    <div>
      <ul>
        <CardPainting
          class="catalog__card"
          v-for="(card, index) in cards"
          :img="card.img"
          :name="card.name"
          :year="card.year"
          :key="index"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CardPainting from "~/components/catalog/CardPainting.vue";
export default {
  components: {
    CardPainting,
  },

  data: () => {
    return {
      cards: [
        {
          img: "painting-card-1.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "painting-card-2.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "painting-card-3.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "painting-card-4.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "painting-card-5.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "painting-card-6.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;
    width: 600px;

    @media (max-width: 768px) {
      width: 280px;
      margin: 0 auto;
    }
  }

  &__card {
    width: 280px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 120px;
    }
  }
  .card:not(:nth-child(2n)) {
    margin-right: 40px;
  }
}
</style>
