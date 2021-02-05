<template>
  <div class="filter-chips">
    <ul>
      <li v-for="(chip, index) in filterChips" :key="index" @click="onClickRemoveChips(index)">
        <span>{{ chip }}</span>
        <span class="filter-chips__remove">+</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onClickRemoveChips(index) {
      this.$store.dispatch("catalogFilter/removeChips",
      index);
    },
  },
  computed: {
    filterChips() {
      return this.$store.getters["catalogFilter/filterChips"];
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-chips {
  max-width: 520px;

  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    position: relative;
    font-size: 12px;
    line-height: 26px;
    background-color: $color_gray5;
    border-radius: 20px;
    padding: 2px 30px 2px 20px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  &__remove {
    position: absolute;
    top: 2px;
    right: 10px;
    font-size: 14px;
    transform: rotate(45deg);
  }
}
</style>
