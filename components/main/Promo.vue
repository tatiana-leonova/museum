<template>
  <div class="promo">
    <!-- <img
      src="~/assets/img/main-img.jpg"
    /> -->
    <div class="img"></div>
    <div class="promo__wrapper">
      <span class="promo__data">1878-1927</span>
      <h2>борис кустодиев</h2>
      <p>
        Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
        русских будней и праздников. Обладал редким безграничным талантом,
        которому, в первую очередь, было присуще особое чувство и восприятие
        родной природы.
      </p>
    </div>
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
  }

  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // width: percentage(980 / 1440);
    width: 55%;
    // max-width: 640px;
    margin-left: auto;
    padding: 50px 95px 50px 95px;
  }

  &__data {
    display: block;
    position: absolute;
    top: calc(50% - 148px);
    left: 0;
    font-family: $YesevaOne;
    font-size: 64px;
    font-weight: 400;
    line-height: 91%;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    // padding-left: 50px;
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 80px;
    font-weight: 400;
    line-height: 100%;
    margin: 0;
    margin-bottom: 30px;
  }

  p {
    font-family: $Helvetica;
    font-weight: 400;
  }
}
</style>
