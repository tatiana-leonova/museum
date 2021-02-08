<template>
  <div class="pagination">
    <ul v-if="pageCount > 1">
      <li v-for="(page, index) in pageCount" :key="index">
        <a
          href="#"
          @click.prevent="onPaginationClick(index)"
          :class="[currentPage === index ? 'pagination--active' : '']"
        >
          {{ index + 1 }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onPaginationClick(index) {
      this.$store.dispatch("catalog/changePage", {
        index: index,
      });
    },
  },
  computed: {
    pageCount() {
      return this.$store.getters["catalog/pageCount"];
    },
    currentPage() {
      return this.$store.getters["catalog/currentPage"];
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  ul {
    @include no-list;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    font-weight: normal;
  }

  li {
    a {
      padding: 0 5px;
      font-size: 18px;
      text-decoration: none;
      color: $color_gray3;
      transition: all 0.5s;

      &:hover,
      &:focus {
        color: $color_dark;
      }
    }
  }

  .pagination--active {
    color: $color_dark;
  }
}
</style>
