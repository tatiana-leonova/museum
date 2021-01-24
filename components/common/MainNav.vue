<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li>
        <nuxt-link class="main-nav__link" to="/"> биография </nuxt-link>
      </li>
      <li>
        <nuxt-link class="main-nav__link" to="/"> творчество </nuxt-link>
      </li>
      <li>
        <nuxt-link class="main-nav__link" to="/catalog"> картины </nuxt-link>
      </li>
      <li>
        <nuxt-link class="main-nav__link" to="/"> музеи </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-nav {
  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
  }

  li:not(:last-child) {
    padding-right: 10px;
  }

  .main-nav__link {
    text-decoration: none;
    color: $color_gray5;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>
