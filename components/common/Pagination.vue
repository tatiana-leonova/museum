<template>
  <div class="pagination">
    <ul v-if="pageCount > 1">
      <li v-for="(page, index) in pageCount" :key="index">
        <a
          href="#"
          @click.prevent="onPaginationClick(index)"
          :class="[currentPage === index ? 'active' : '']"
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
    flex-wrap: wrap;
    font-weight: normal;
    justify-content: center;
    padding: 20px;
  }

  li {
    a {
      text-decoration: none;
      font-size: 18px;
      color: $color_gray3;
      padding: 0 5px;
    }
  }

  .active {
    color: $color_dark;
  }
}
</style>
