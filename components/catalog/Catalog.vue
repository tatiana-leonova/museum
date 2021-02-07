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
          class="big-photos"
          :class="[isViewSmallPhoto ? 'small-photos' : '']"
          v-for="(card, index) in cards"
          :img="card.img"
          :name="card.name"
          :year="card.year"
          :key="index"
        />
      </ul>
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
  @media (max-width: 660px) {
    padding: 0 5px;
  }

  ul {
    @include no-list;
    display: flex;
    // justify-content: space-around;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1023px) {
      margin: 0 auto;
    }
  }

  .big-photos {
    width: 280px;
    margin-bottom: 20px;

    // @media (max-width: 1023px) {
    //   width: 45%;
    // }

    @media (max-width: 1023px) {
      // width: 120px;
      width: 43%;
      max-width: 280px;
    }
  }

  .small-photos {
    width: 200px;

    @media (max-width: 660px) {
      width: 120px;
    }
  }
}
</style>
