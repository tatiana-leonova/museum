<template>
  <li
    class="filter-items-count"
    :class="[item.isChecked ? 'filter-items-count--active' : '']"
    @click="$emit('on-checked')"
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
  margin-bottom: 5px;
  transition: all 0.5s;
  text-align: left;

  p {
    @include zero-indent;
  }

  &__name {
    padding-right: 10px;
    text-align: left;
  }

  &__number {
    color: $color_gray3;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -12px;
    font-size: 14px;
    color: $color_dark;
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
