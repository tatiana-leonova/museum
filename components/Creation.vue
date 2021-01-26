<template>
  <section class="creation container">
    <div class="creation__wrapper-title">
      <h2>творчество</h2>
      <p>
        Трудно найти другого живописца, настолько горячо влюбленного в
        провинциальную Россию: самобытную, яркую, удивляющую.
      </p>
    </div>
    <div>
      <div class="creation__pre-wrapper-content">
        <p>
          Как и большинство работ автора, пейзажные полотна Кустодиева
          отличаются особой выразительностью, яркостью и насыщенностью цветовых
          планов. На картинах Кустодиева природа всегда представляет собой нечто
          гораздо большее, чем просто пейзажное изображение.
        </p>
        <div class="creation__wrapper-image creation__wrapper-image--1">
          <img
            src="~/assets/img/creation-2.jpg"
            width="240"
            height="173"
            alt="Картина Бориса Кустодиева"
          />
        </div>
      </div>
      <div class="creation__wrapper-image creation__wrapper-image--2">
        <img
          src="~/assets/img/creation-1.jpg"
          width="920"
          height="667"
          alt="Картина Бориса Кустодиева"
        />
      </div>
      <div class="creation__post-wrapper-content">
        <p>
          Особенности творчества художника Бориса Кустодиева: любил жанр
          портрета-картины, когда характер героя раскрывается через окружающий
          его пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел
          для бытовых сцен декоративности и зрелищности; с большой симпатией
          писал жизнь провинции.
        </p>
        <p>
          Даже в самые беспросветные времена полотна Кустодиева лучились
          здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся
          под солнцем купола. Полыхающие арбузы и красавицы, не уступающие
          арбузам ни интенсивностью румянца, ни гладкой округлостью форм.
        </p>
      </div>
      <div class="creation__read-more">
        <ReadMore />
      </div>
    </div>
    <div class="creation__social-share">
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
.creation {
  border-bottom: 1px solid $color_gray6;
  padding-bottom: 100px;
  position: relative;

  h2 {
    font-family: $YesevaOne;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    margin-bottom: 30px;
    color: $color_dark;
    margin-right: 165px;
    margin-right: 60px;
  }

  &__wrapper-image--1 {
    img {
      @media (min-width: $width-desktop-min) {
        max-width: 240px;
      }

      @media (max-width: $width-mobile-max) {
        width: 100%;
        max-width: 920px;
      }
    }
  }

  img:nth-child(3) {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__wrapper-title {
    padding-bottom: 30px;
    border-bottom: 1px solid $color_gray6;
    margin-bottom: 30px;

    @media (min-width: $width-desktop-min) {
      display: flex;
      align-items: center;
    }

    p {
      font-size: 20px;
      line-height: 30px;
      color: $color_gray3;
    }
  }

  &__pre-wrapper-content {
    margin-bottom: 40px;

    @media (min-width: $width-desktop-min) {
      display: flex;
    }
  }

  &__post-wrapper-content {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
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
