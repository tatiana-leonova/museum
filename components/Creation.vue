<template>
  <section class="creation container">
    <div class="creation__wrapper-title">
      <h2>творчество</h2>
      <p>
        Трудно найти другого живописца, настолько горячо влюбленного в
        провинциальную Россию: самобытную, яркую, удивляющую.
      </p>
    </div>
    <div class="creation__pre-wrapper-content">
      <p>
        Как и большинство работ автора, пейзажные полотна Кустодиева отличаются
        особой выразительностью, яркостью и насыщенностью цветовых планов. На
        картинах Кустодиева природа всегда представляет собой нечто гораздо
        большее, чем просто пейзажное изображение.
      </p>
      <img
        src="~/assets/img/creation-2.jpg"
        width="240"
        height="173"
        alt="Картина Бориса Кустодиева"
      />
    </div>
    <img
      src="~/assets/img/creation-1.jpg"
      width="920"
      height="667"
      alt="Картина Бориса Кустодиева"
    />
    <div class="creation__post-wrapper-content">
      <p>
        Особенности творчества художника Бориса Кустодиева: любил жанр
        портрета-картины, когда характер героя раскрывается через окружающий его
        пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел для
        бытовых сцен декоративности и зрелищности; с большой симпатией писал
        жизнь провинции.
      </p>
      <p>
        Даже в самые беспросветные времена полотна Кустодиева лучились
        здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся под
        солнцем купола. Полыхающие арбузы и красавицы, не уступающие арбузам ни
        интенсивностью румянца, ни гладкой округлостью форм.
      </p>
    </div>
    <div class="creation__actions">
      <SocialShare />
      <ReadMore />
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

  img:nth-child(3) {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__wrapper-title {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid $color_gray6;
    margin-bottom: 30px;
    p {
      font-size: 20px;
      color: $color_gray3;
    }
  }

  &__pre-wrapper-content {
    display: flex;
    margin-bottom: 40px;
  }

  &__post-wrapper-content {
    display: flex;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
