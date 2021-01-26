<template>
  <ul class="menu">
    <li>
      <nuxt-link class="menu__link" to="/"> биография </nuxt-link>
    </li>
    <li>
      <nuxt-link class="menu__link" to="/"> творчество </nuxt-link>
    </li>
    <li>
      <nuxt-link class="menu__link" to="/catalog"> картины </nuxt-link>
    </li>
    <li>
      <nuxt-link class="menu__link" to="/"> музеи </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  @include no-list;
  display: flex;
  flex-wrap: wrap;
}

li:not(:last-child) {
  padding-right: 10px;
}

.menu__link {
  text-decoration: none;
  color: $color_gray5;
  font-size: 14px;
  line-height: 100%;
}
</style>
