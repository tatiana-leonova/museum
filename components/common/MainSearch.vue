<template>
  <div class="main-search">
    <form action="/catalog/" method="get" v-show="formVisibility">
      <input type="text" ref="search" placeholder="Введите название картины" />
    </form>
    <button
      class="main-search__search-button"
      @click="toggleSearchForm"
      type="button"
      aria-label="Поиск по сайту"
    >
      <svg
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.87498 12.825C10.6502 12.825 12.9 10.5752 12.9 7.79996C12.9 5.02473 10.6502 2.77496 7.87498 2.77496C5.09974 2.77496 2.84998 5.02473 2.84998 7.79996C2.84998 10.5752 5.09974 12.825 7.87498 12.825Z"
          stroke="#F5F5F5"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
        <path
          d="M11.475 11.475L16.2 16.2"
          stroke="#F5F5F5"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      formVisibility: false,
    };
  },
  methods: {
    toggleSearchForm() {
      this.formVisibility = !this.formVisibility;
      setTimeout((x) => {
        this.$nextTick(() => this.$refs.search.focus());
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-search {
  position: relative;
  display: flex;

  &__search-button {
    @include hover-focus-active;

    border: none;
    background-color: inherit;
    cursor: pointer;
    transition: all 0.5s;
  }

  form {
    transition: all 0.5s;

    input {
      width: 200px;
      height: 30px;
      color: $color_gray5;
      background-color: inherit;
      border: none;
      border-bottom: 1px solid $color_gray5;
      outline: none;

      &::placeholder {
        font-size: 14px;
        line-height: 100%;
        color: $color_gray5;
      }
    }
  }
}
</style>
