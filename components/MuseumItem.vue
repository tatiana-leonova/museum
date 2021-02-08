<template>
  <li class="museum-item">
    <h3 class="museum-item__title">
      <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.99968 0C5.346 0 2.37317 2.97283 2.37317 6.62688C2.37317 7.57999 2.56825 8.49001 2.9527 9.33186C4.60951 12.9574 7.78608 16.7851 8.72041 17.8718C8.79041 17.953 8.89247 17.9998 8.99986 17.9998C9.10726 17.9998 9.20931 17.953 9.27931 17.8718C10.2133 16.7853 13.3898 12.9577 15.0472 9.33186C15.4318 8.49001 15.6267 7.57999 15.6267 6.62688C15.6264 2.97283 12.6535 0 8.99968 0ZM8.99968 10.0689C7.10173 10.0689 5.55747 8.52464 5.55747 6.62669C5.55747 4.72856 7.10173 3.1843 8.99968 3.1843C10.8976 3.1843 12.4419 4.72856 12.4419 6.62669C12.4421 8.52464 10.8978 10.0689 8.99968 10.0689Z"
          fill="#202020"
        />
      </svg>
      <a :href="link" target="_blank"> {{ title }}</a>
    </h3>
    <address>
      {{ city }} <br />
      {{ address }}
    </address>
    <a :href="'tel:' + phoneLink"> {{ phone }} </a>
  </li>
</template>

<script>
export default {
  props: ["link", "title", "city", "address", "phoneLink", "phone"],
};
</script>

<style lang="scss" scoped>
.museum-item {
  &__title {
    position: relative;
    padding-left: 30px;
    margin-top: 0;
    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: $color_dark;
      text-decoration: none;
      transition: all 0.5s;
      @include hover-focus-active;
    }

    svg {
      position: absolute;
      top: 5px;
      left: 0;
    }
  }

  address {
    color: $color_gray3;
    font-size: 14px;
    line-height: 26px;
    font-style: normal;
  }

  a[href^="tel"] {
    color: $color_gray3;
    font-size: 14px;
    line-height: 26px;
    text-decoration: none;
    transition: all 0.5s;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.5;
    }
  }
}
</style>
