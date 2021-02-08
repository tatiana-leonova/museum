<template>
  <section class="catalog-painting">
    <h2 class="is-hidden">Каталог картин Бориса Пустадиева</h2>
    <div>
      <ToggleViewButtons
        @toggleViewPhoto="toggleViewPhoto"
        :viewDefaultPhoto="viewDefaultPhoto"
      />
      <ul>
        <CardPainting
          class="catalog-painting__card"
          :class="[isViewSmallPhoto ? 'catalog-painting__card--small' : '']"
          v-for="(card, index) in cards"
          :img="card.img"
          :name="card.name"
          :year="card.year"
          :key="index"
        />
      </ul>

      <div class="catalog-painting__no-card" v-if="cards.length === 0">
        <p class="">Сожалеем, но по вашему запросу ничего не найдено.</p>
        <p>Попробуйте изменить параметры фильтрации.</p>
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script>
import CardPainting from "~/components/catalog/CardPainting.vue";
import Pagination from "~/components/common/Pagination.vue";
import ToggleViewButtons from "~/components/common/ToggleViewButtons.vue";
export default {
  components: {
    CardPainting,
    Pagination,
    ToggleViewButtons,
  },

  data: () => {
    return {
      viewDefaultPhoto: "big",
      isViewSmallPhoto: false,
    };
  },

  methods: {
    toggleViewPhoto(id) {
      this.viewDefaultPhoto == id ? null : this.changeVariantViews(id);
    },

    changeVariantViews(id) {
      id === "small"
        ? (this.isViewSmallPhoto = true)
        : (this.isViewSmallPhoto = false);
      this.viewDefaultPhoto = id;
    },
  },

  computed: {
    cards() {
      return this.$store.getters["catalog/cards"];
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-painting {
  margin-bottom: 40px;
  @media (max-width: 660px) {
    padding: 0 5px;
  }

  ul {
    @include no-list;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: $width-desktop-min) {
      width: 645px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 0 auto;
      width: 650px;
    }
  }

  .catalog-painting__card {
    width: 280px;
    margin-bottom: 20px;

    @media (max-width: 1023px) {
      width: 43%;
      max-width: 280px;
    }
  }

  .catalog-painting__card--small {
    width: 200px;

    @media (max-width: 660px) {
      width: 120px;
    }
  }

  &__no-card {
    text-align: center;

    p {
      margin: 5px;
    }
  }
}
</style>
