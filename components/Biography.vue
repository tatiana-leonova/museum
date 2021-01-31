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
      <dl v-for="(historicalEvent, index) of historicalEvents" :key="index">
        <dt>{{ historicalEvent.year }}</dt>
        <dd>{{ historicalEvent.text }}</dd>
      </dl>
      <div class="biography__read-more" @click="onReadMore">
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

  data: () => {
    return {
      isTextExpanded: false,
    };
  },
  methods: {
    onReadMore() {
      if (!this.isTextExpanded) {
        this.$store.dispatch("biography/fetchBiography", {
          offset: this.$store.getters["biography/historicalEvents"].length,
          limit: 20,
        });
      } else {
        this.$store.dispatch("biography/hideText");
      }
      this.isTextExpanded = !this.isTextExpanded;
    },
  },
  computed: {
    historicalEvents() {
      return this.$store.getters["biography/historicalEvents"];
    },
  },
};
</script>

<style lang="scss" scoped>
.biography {
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;

  &__wrapper-text {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
      padding-top: 100px;
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
