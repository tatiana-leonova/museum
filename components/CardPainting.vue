<template>
  <li class="card-painting">
    <img
      :src="require(`~/assets/img/catalog/${img}`)"
      width="280"
      height="317"
      :alt="`Изображение картины Пустодиева ${name}`"
    />
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
.card-painting {
  margin-bottom: 20px;

  h3,
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: $color_gray2;
    text-align: center;

    @media (max-width: 768px) {
      text-align: left;
    }
  }

  h3 {
    margin: 0;
  }
}
</style>
