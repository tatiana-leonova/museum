<template>
  <section class="biography container" id="biography">
    <div class="biography__wrapper-text">
      <h2>биография</h2>
      <p>
        Борис Кустодиев родился 7&nbsp;марта 1878 года в&nbsp;Астрахани. Отца,
        преподавателя духовной семинарии, не&nbsp;стало, когда мальчику было
        чуть больше года. Мать осталась вдовой в&nbsp;25&nbsp;лет
        и&nbsp;содержала четверых детей.
      </p>
    </div>
    <div class="biography__list">
      <dl v-for="(historicalEvent, index) of historicalEvents" :key="index">
        <dt>{{ historicalEvent.year }}</dt>
        <dd>{{ historicalEvent.text }}</dd>
      </dl>
      <div
        v-if="!isTextExpanded"
        class="biography__toggle-text"
        @click="onToggleText"
      >
        <ReadMore />
      </div>
      <div v-else class="biography__toggle-text" @click="onToggleText">
        <HideText />
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
import HideText from "~/components/common/HideText.vue";

export default {
  components: {
    SocialShare,
    ReadMore,
    HideText,
  },

  data: () => {
    return {
      isTextExpanded: false,
      historicalEventsLimit: 20,
    };
  },
  methods: {
    onToggleText() {
      if (this.isTextExpanded) {
        this.$store.dispatch("biography/hideHistoricalEvents");
      } else {
        this.$store.dispatch("biography/fetchHistoricalEvents", {
          offset: this.$store.getters["biography/historicalEvents"].length,
          limit: this.historicalEventsLimit,
        });
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
  padding-top: 60px;
  margin-bottom: 100px;
  position: relative;

  @media (max-width: $width-mobile-max) {
    margin-bottom: 60px;
  }

  &__wrapper-text {
    @media (min-width: $width-desktop-min) {
      display: flex;
      justify-content: space-between;
      padding-top: 60px;
      margin-bottom: 40px;
    }
  }

  p {
    line-height: 26px;
    margin-top: 0;

    @media (min-width: $width-desktop-min) {
      width: 530px;
    }

    @media (max-width: $width-mobile-max) {
      margin-bottom: 30px;
    }
  }

  h2 {
    font-family: $YesevaOne;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    color: $color_dark;
    margin: 0;
    margin-bottom: 30px;
  }

  &__list {
    @media (min-width: $width-desktop-min) {
      width: 615px;
      margin-left: auto;
    }
  }

  dl {
    @media (min-width: $width-desktop-min) {
      display: flex;
    }
  }

  dt {
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    color: $color_gray3;
    margin-top: -5px;
  }

  dd {
    @media (max-width: $width-mobile-max) {
      margin-left: 0;
    }
  }

  &__toggle-text {
    display: flex;
    justify-content: flex-end;
    padding-top: 40px;

    @media (max-width: $width-mobile-max) {
      justify-content: flex-start;
      padding-top: 0;
      margin-bottom: 25px;
    }
  }

  &__social-share {
    @media (min-width: $width-desktop-min) {
      position: absolute;
      bottom: 10px;
      left: 40px;
    }

    @media (max-width: $width-mobile-max) {
      width: 300px;
      margin: 0 auto;
    }
  }
}
</style>
