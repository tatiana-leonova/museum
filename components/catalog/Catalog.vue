<template>
  <section class="catalog-painting">
    <h2 class="is-hidden">Каталог картин Бориса Пустадиева</h2>
    <div>
      <div class="catalog-painting__toggle">
        <button
          class="catalog-painting__toggle-button"
          title="Большие фото"
          @click="selectedBigPhoto"
        >
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H6V6H0zM9 0H15V6H9zM0 9H6V15H0zM9 9H15V15H9z" />
          </svg>
        </button>
        <button
          class="catalog-painting__toggle-button"
          title="Компактный вид"
          @click="selectedSmallPhoto"
        >
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H2.64706V2.64706H0V0ZM0 6.17647H2.64706V8.82353H0V6.17647ZM0 12.3529H2.64706V15H0V12.3529ZM6.17647 0H8.82353V2.64706H6.17647V0ZM6.17647 6.17647H8.82353V8.82353H6.17647V6.17647ZM6.17647 12.3529H8.82353V15H6.17647V12.3529ZM12.3529 0H15V2.64706H12.3529V0ZM12.3529 6.17647H15V8.82353H12.3529V6.17647ZM12.3529 12.3529H15V15H12.3529V12.3529Z"
            />
          </svg>
        </button>
      </div>
      <ul>
        <CardPainting
          :class="[isBigPhotosSelected ? 'big-photos' : 'small-photos']"
          v-for="(card, index) in cards"
          :img="card.img"
          :name="card.name"
          :year="card.year"
          :key="index"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CardPainting from "~/components/catalog/CardPainting.vue";
export default {
  components: {
    CardPainting,
  },

  data: () => {
    return {
      isBigPhotosSelected: true,
      cards: [
        {
          img: "img1.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "img2.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "img3.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "img4.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "img5.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
        {
          img: "img6.jpg",
          name: 'Сундучник. Из серии "Русские типы"',
          year: "1920",
        },
      ],
    };
  },

  methods: {
    selectedSmallPhoto() {
      this.isBigPhotosSelected = false;
    },
    selectedBigPhoto() {
      this.isBigPhotosSelected = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-painting {
  ul {
    @include no-list;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      width: 280px;
      margin: 0 auto;
    }
  }

  &__toggle-button {
    border: none;
    background-color: inherit;
    cursor: pointer;

    &:focus {
      outline-offset: 2px;
      outline: dotted 1px $color_gray3;
    }

    svg {
      fill: $color_dark;
    }
  }

  .big-photos {
    width: 280px;
    margin-bottom: 20px;
    transition: all 0.5s ease-in;

    @media (max-width: 768px) {
      width: 120px;
    }

    &:not(:nth-child(2n)) {
      margin-right: 40px;
    }
  }

  .small-photos {
    width: 200px;
    transition: all 0.5s ease-out;

    @media (min-width: $width-desktop-min) {
      &:not(:nth-child(3n)) {
        margin-right: 10px;
      }
    }

    @media (max-width: 768px) {
      width: 120px;

      &:not(:nth-child(2n)) {
        margin-right: 40px;
      }
    }
  }
}
</style>
