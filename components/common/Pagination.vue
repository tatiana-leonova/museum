<template>
  <div class="pagination">
    <ul>
      <li v-for="(page, index) in pageCount" :key="index">{{ index + 1 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pageCount() {
      return this.$store.getters["catalog/pageCount"];
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
    padding: 20px;
  }

  li {
    font-size: 18px;
    color: $color_gray3;
    padding: 0 5px;
  }
}
</style>
