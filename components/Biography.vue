<template>
  <section class="biography container">
    <div class="biography__wrapper-text">
      <h2>биография</h2>
      <p>
        Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца,
        преподавателя духовной семинарии, не стало, когда мальчику было чуть
        больше года. Мать осталась вдовой в 25 лет и содержала четверых детей.
      </p>
    </div>
    <div class="biography__list">
      <dl>
        <dt>1887</dt>
        <dd>
          Борис сначала учился в церковно-приходской школе, потом в гимназии.
          Когда ему было девять лет, в город привезли выставку
          художников-передвижников. Мальчика настолько впечатлила живопись, что
          он твердо решил научиться рисовать так же искусно. Мать нашла деньги,
          чтобы Борис смог брать уроки у известного в Астрахани художника Павла
          Власова.
        </dd>
      </dl>
      <dl>
        <dt>1896</dt>
        <dd>
          Окончив семинарию, в 1896 году Кустодиев отправился учиться в Москву,
          но в художественную школу его не приняли: Борису уже исполнилось 18 и
          он был слишком взрослым. Тогда Кустодиев поехал в Петербург, где подал
          документы в Высшее художественное училище при Академии художеств.
        </dd>
      </dl>
      <div class="biography__read-more">
        <ReadMore />
      </div>
    </div>
    <div class="biography__social-share">
      <SocialShare />
    </div>
  </section>
</template>

<script>
import SocialShare from "~/components/common/SocialShare.vue";
import ReadMore from "~/components/common/ReadMore.vue";

export default {
  components: {
    SocialShare,
    ReadMore,
  },
};
</script>

<style lang="scss" scoped>
.biography {
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  &__wrapper-text {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
    }
  }

  p {
    margin-top: 0;
    @media (min-width: $width-desktop-min) {
      width: 565px;
    }
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    margin-bottom: 30px;
    color: $color_dark;
    margin-right: 150px;
  }

  &__list {
    @media (min-width: $width-desktop-min) {
      width: 650px;
      margin-left: auto;
    }
  }

  dl {
    @media (min-width: $width-desktop-min) {
      display: flex;
    }
  }

  dt {
    color: $color_gray3;
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    margin-top: -5px;
  }

  dd {
    @media (max-width: $width-mobile-max) {
      margin-left: 0;
    }
  }

  &__read-more {
    display: flex;
    justify-content: flex-end;

    @media (max-width: $width-mobile-max) {
      justify-content: flex-start;
    }
  }

  &__social-share {
    @media (min-width: $width-desktop-min) {
      position: absolute;
      bottom: 110px;
      left: 0;
    }

    @media (max-width: $width-mobile-max) {
      margin: 0 auto;
      width: 300px;
    }
  }
}
</style>
