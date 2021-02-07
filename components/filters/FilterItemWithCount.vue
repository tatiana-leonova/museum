<template>
  <li
    class="filter-items-count"
    :class="[item.isChecked ? 'filter-items-count--active' : '']"
    @click="
      $emit('on-checked');
    "
  >
    <p class="filter-items-count__name">{{ item.name }}</p>
    <p class="filter-items-count__number">{{ item.count }}</p>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss">
.filter-items-count {
  display: flex;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;

  p {
    @include zero-indent;
  }

  &__name {
    padding-right: 10px;
  }

  &__number {
    color: $color_gray3;
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
