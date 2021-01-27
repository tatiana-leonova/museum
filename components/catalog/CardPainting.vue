<template>
  <li class="card">
    <img :src="require(`~/assets/img/catalog/${img}`)" />
    <!-- <img :src="`~/assets/img/catalog/${link}`" /> -->
    <h3>{{ name }}</h3>
    <span>{{ year }}</span>
  </li>
</template>

<script>
export default {
  props: ["img", "name", "year"],
};
</script>

<style lang="scss" scoped>
.card {
  h3, span {
    display: block;
    font-size: 14px;
    line-height: 20px;
    color: $color_gray2;
    font-weight: 400;
    text-align: center;
  }

   h3 {
     margin: 0;
   }
}
</style>
