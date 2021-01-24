<template>
  <div class="first-screen-text">
    <!-- <img
      src="~/assets/img/main-img.jpg"
    /> -->
    <div class="img"></div>
    <div class="first-screen-text__wrapper">
      <span class="first-screen-text__data">1878-1927</span>
      <div>
        <h2>борис кустодиев</h2>
        <p>
          Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
          русских будней и праздников. Обладал редким безграничным талантом,
          которому, в первую очередь, было присуще особое чувство и восприятие
          родной природы.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.first-screen-text {
  color: $color_gray5;
  // position: relative;
  // background-image: url('~assets/img/main-img.jpg');
  // background-repeat: no-repeat;

  // img {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 460px;
  // }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 460px;
    background-image: url("~assets/img/main-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right 15%;
    width: 460px;
    height: 100vh;
  }

  &__wrapper {
    display: flex;
    width: percentage(980 / 1440);
    margin-left: auto;
    padding: 0 95px;
  }

  &__data {
    display: block;
    font-family: $YesevaOne;
    font-size: 64px;
    font-weight: 400;
    line-height: 91%;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    padding-left: 50px;
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 100%;
  }

  p {
    font-family: $Helvetica;
    font-weight: 400;
  }
}
</style>
