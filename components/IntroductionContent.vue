<template>
  <div class="inptodaction">
    <div class="inptodaction__img"></div>
    <div class="inptodaction__wrapper-text">
      <span class="inptodaction__data">1878-1927</span>
      <h2>борис кустодиев</h2>
      <p>
        Художник, запечатлевший на&nbsp;своих ярких и&nbsp;жизнерадостных
        полотнах сцены русских будней и&nbsp;праздников. Обладал редким
        безграничным талантом, которому, в&nbsp;первую очередь, было присуще
        особое чувство и&nbsp;восприятие родной природы.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inptodaction {
  color: $color_gray5;
  @media (min-width: $width-desktop-min) {
    height: 100vh;
  }

  @media (max-width: $width-mobile-max) {
    display: flex;
    flex-direction: column;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 32%;
    height: 100vh;
    background-image: url("~assets/img/main-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right 15%;

    @media (max-width: $width-mobile-max) {
      position: relative;
      width: 100%;
      height: 40vw;
      order: 1;
      margin: 0 auto;
      background-position: bottom 10% right 15%;
    }
  }

  &__wrapper-text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 65px 20px 40px;

    @media (min-width: $width-desktop-min) {
      width: 55%;
      max-width: 900px;
      height: 100%;
      padding: 50px 95px 50px 120px;
      margin-left: 37%;
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
      margin-bottom: 10px;
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
      line-height: 110%;
    }
  }

  p {
    font-family: $Helvetica;
    font-weight: 300;
    margin-top: 0;
    line-height: 29px;
  }
}
</style>
