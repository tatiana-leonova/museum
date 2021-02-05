<template>
  <li
    class="filter-items-count"
    :class="[isFilterSelected ? 'filter-items-count--active' : '']"
    @click="
      $emit('on-checked');
      onClick();
    "
  >
    <p>{{ item.name }}</p>
    <p class="count">{{}}</p>
  </li>
</template>

<script>
export default {
  props: ["item"],
  data: () => {
    return {
      isFilterSelected: false,
    };
  },

  methods: {
    onClick() {
      console.log("onClick");
      this.isFilterSelected = !this.isFilterSelected;
    },
  },
};
</script>

<style lang="scss">
.filter-items-count {
  display: flex;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  p {
    @include zero-indent;
  }

  &::before {
    position: absolute;
    content: "";
    top: -2px;
    left: -12px;
    font-size: 16px;
    color: $color_dark;
    font-size: 14px;
  }

  &:hover {
    &::before {
      content: "+";
    }
  }

  &--active {
    &::before {
      content: "+";
      transform: rotate(45deg);
    }
  }
}
</style>
