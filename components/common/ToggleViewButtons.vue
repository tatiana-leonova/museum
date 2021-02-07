<template>
  <div class="toggle-view">
    <button
      class="toggle-view__button"
      title="Большие фото"
      @click="$emit('toggleViewPhoto', ViewPhoto.big)"
      :class="[viewDefaultPhoto === ViewPhoto.big ? 'active-view' : '']"
    >
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H6V6H0zM9 0H15V6H9zM0 9H6V15H0zM9 9H15V15H9z" />
      </svg>
    </button>
    <button
      class="toggle-view__button"
      title="Компактный вид"
      @click="$emit('toggleViewPhoto', ViewPhoto.small)"
      :class="[viewDefaultPhoto === ViewPhoto.small ? 'active-view' : '']"
    >
      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H2.64706V2.64706H0V0ZM0 6.17647H2.64706V8.82353H0V6.17647ZM0 12.3529H2.64706V15H0V12.3529ZM6.17647 0H8.82353V2.64706H6.17647V0ZM6.17647 6.17647H8.82353V8.82353H6.17647V6.17647ZM6.17647 12.3529H8.82353V15H6.17647V12.3529ZM12.3529 0H15V2.64706H12.3529V0ZM12.3529 6.17647H15V8.82353H12.3529V6.17647ZM12.3529 12.3529H15V15H12.3529V12.3529Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["viewDefaultPhoto"],

  data: () => {
    return {
      ViewPhoto: {
        big: "big",
        small: "small",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.toggle-view {
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: $width-mobile-max) {
    display: none;
  }

  &__button {
    border: none;
    background-color: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    svg {
      fill: $color_gray3;
    }
  }

  .active-view {
    svg {
      fill: $color_dark;
    }
  }
}
</style>
