<template>
  <div class="hide-text">
    <button>
      <span class="hide-text__text">скрыть текст</span>
      <svg width="121" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M120.707 8.7071C121.098 8.31657 121.098 7.68341 120.707 7.29288L114.343 0.928922C113.953 0.538398 113.319 0.538398 112.929 0.928922C112.538 1.31945 112.538 1.95261 112.929 2.34314L118.586 7.99999L112.929 13.6568C112.538 14.0474 112.538 14.6805 112.929 15.0711C113.319 15.4616 113.953 15.4616 114.343 15.0711L120.707 8.7071ZM8.74228e-08 9L120 8.99999L120 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
          fill="#202020"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hide-text {
  button {
    color: $color_dark;
    border: none;
    background-color: inherit;
    cursor: pointer;

    svg {
      transform: scale(-1);
    }
  }
  &__text {
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 40px;
    margin: 0;
    margin-bottom: -10px;
  }
}
</style>
