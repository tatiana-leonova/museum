<template>
  <section class="creation container">
    <div class="creation__wrapper-title">
      <h2>творчество</h2>
      <p class="creation__subtitle">
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
      <img src="" alt="" />
    </div>
    <img src="" alt="" />
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
</style>
