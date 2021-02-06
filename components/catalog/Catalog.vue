<template>
  <section class="catalog-painting">
    <h2 class="is-hidden">Каталог картин Бориса Пустадиева</h2>
    <div>
      <ToggleViewButtons @viewChange="viewChange" :showVariant="showVariant" />
      <ul>
        <CardPainting
          :class="[gridView ? 'small-photos' : '']"
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
      showVariant: "big",
      gridView: false,
    };
  },

  methods: {
    viewChange: function (id) {
      this.showVariant == id ? null : this.changeViews(id);
    },

    changeViews: function (id) {
      id === "small" ? (this.gridView = true) : (this.gridView = false);
      this.showVariant = id;
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
  ul {
    @include no-list;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 660px) {
      margin: 0 auto;
    }
  }

  // .big-photos {
  //   width: 280px;
  //   margin-bottom: 20px;

  //   @media (max-width: 660px) {
  //     width: 120px;
  //   }
  // }

  .small-photos {
    width: 200px;

    @media (max-width: 660px) {
      width: 120px;
    }
  }
}
</style>
