<template>
  <div class="promo">
    <!-- <div> -->
    <div class="img"></div>
    <div class="promo__wrapper-text">
      <span class="promo__data">1878-1927</span>
      <h2>борис кустодиев</h2>
      <p>
        Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
        русских будней и праздников. Обладал редким безграничным талантом,
        которому, в первую очередь, было присуще особое чувство и восприятие
        родной природы.
      </p>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.promo {
  color: $color_gray5;
  // height: 100%;
  height: calc(100vh - 46px);

  @media (max-width: $width-mobile-max) {
    display: flex;
    flex-direction: column;
  }

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 460px;
    background-image: url("~assets/img/main-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right 15%;
    // width: 460px;
    width: 40%;
    height: 100vh;

    @media (max-width: $width-mobile-max) {
      position: relative;
      width: 320px;
      height: 125px;
      margin: 0 auto;
      order: 1;
    }
  }

  &__wrapper-text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // width: percentage(980 / 1440);
    // max-width: 640px;
    padding: 50px 95px 50px 95px;

    @media (min-width: $width-desktop-min) {
      margin-left: auto;
      width: 55%;
      height: 100%;
    }
  }

  &__data {
    display: block;
    font-family: $YesevaOne;
    font-size: 64px;
    font-weight: 400;
    line-height: 91%;

    @media (min-width: $width-desktop-min) {
      position: absolute;
      top: calc(50% - 148px);
      left: 0;
      writing-mode: tb-rl;
      transform: rotate(180deg);
    }

    @media (max-width: $width-mobile-max) {
      font-size: 20px;
    }
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 100%;
    margin: 0;
    margin-bottom: 30px;

    @media (max-width: $width-mobile-max) {
      font-size: 40px;
      ine-height: 110%;
    }
  }

  p {
    font-family: $Helvetica;
    font-weight: 400;
  }
}
</style>
