<template>
  <section class="error-404">
    <div class="error-404__wrapper container">
      <h1>404</h1>
      <p>страница не найдена</p>

      <nuxt-link class="error-404__link-home" to="/"
        >вернуться на главную</nuxt-link
      >
    </div>
  </section>
</template>

<style  lang="scss" scoped>
.error-404 {
  background-color: $color_dark;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-family: $YesevaOne;
    font-size: 25vw;
    font-weight: 400;
    line-height: 100%;
    color: $color_gray5;
    text-align: center;
    margin: 20px 0;
  }

  p {
    color: $color_gray5;
    text-align: center;
    margin-bottom: 30px;
  }

  &__link-home {
    text-decoration: none;
    color: $color_gray5;
    text-align: center;
    border: 2px solid $color_gray5;
    padding: 10px;
    width: 250px;
    border-radius: 60px;
    margin: 0 auto;
  }
}
</style>
