<template>
  <button
    class="button-all-filter-items"
    :class="allItemButton.isExpanded ? 'button-all-filter-items--all' : ''"
    @click="$emit('onClickAllFilterItems')"
    type="button"
  >
    {{ allItemButton.isExpanded ? allElements : allItemButton.title }}
  </button>
</template>


<script>
export default {
  props: ["allItemButton"],
  data: () => {
    return {
      allElements: "Свернуть",
    };
  },
};
</script>

<style lang="scss" scoped>
.button-all-filter-items {
  position: relative;
  border: none;
  color: $color_dark;
  font-size: 12px;
  font-weight: 700;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  padding-left: 25px;
  transition: all 0.5s;
  @include hover-focus-active;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 3px;
    width: 10px;
    height: 2px;
    font-size: 18px;
    background-color: $color_dark;
    transition: transform 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 7px;
    width: 2px;
    height: 10px;
    font-size: 18px;
    background-color: $color_dark;
    transition: transform 0.5s ease;
  }

  &--all {
    &::after {
      content: none;
    }
  }
}
</style>
