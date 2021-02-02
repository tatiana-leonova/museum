<template>
  <div class="filters">
    <div class="filters__block filters__block--work">
      <button class="filters__title-button">
        {{ filterItems.work.title }}
      </button>
      <ul>
        <FilterItemWithCount
          v-for="(item, index) in filterItems.work.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>

    <div class="filters__block filters__block--plot">
      <button class="filters__title-button">
        {{ filterItems.plot.title }}
      </button>
      <QuickSearch />
      <ul>
        <FilterItemWithCheckbox
          v-for="(item, index) in filterItems.plot.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>
    <div class="filters__block filters__block--style">
      <button class="filters__title-button">
        {{ filterItems.style.title }}
      </button>
      <ul>
        <FilterItemWithCheckbox
          v-for="(item, index) in filterItems.style.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>
    <div class="filters__block filters__block--technics">
      <button class="filters__title-button">
        {{ filterItems.technics.title }}
      </button>
      <QuickSearch />
      <ul>
        <FilterItemWithCheckbox
          v-for="(item, index) in filterItems.technics.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>
    <div class="filters__block filters__block--year">
      <button class="filters__title-button">
        {{ filterItems.year.title }}
      </button>
      <Range />
      <ul>
        <FilterItemWithCheckbox
          v-for="(item, index) in filterItems.year.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import FilterItemWithCount from "~/components/filters/FilterItemWithCount.vue";
import FilterItemWithCheckbox from "~/components/filters/FilterItemWithCheckbox.vue";
import QuickSearch from "~/components/filters/QuickSearch.vue";
import Range from "~/components/filters/Range.vue";

export default {
  components: {
    FilterItemWithCount,
    FilterItemWithCheckbox,
    QuickSearch,
    Range,
  },

  data: () => {
    return {
      filterItems: {
        work: {
          title: "Работы",
          items: [
            {
              id: "painting",
              name: "Живопись",
              isChecked: false,
            },
            {
              id: "drawingsAndIllustrations",
              name: "Рисунки и иллюстрации",
              isChecked: false,
            },
            {
              id: "theatricalAndDecorative",
              name: "Театрально-декорационное",
              isChecked: false,
            },
            {
              id: "graphics",
              name: "Графика",
              isChecked: false,
            },
            {
              id: "engraving",
              name: "Гравюра",
              isChecked: false,
            },
            {
              id: "poster",
              name: "Плакат",
              isChecked: false,
            },
            {
              id: "sculpture",
              name: "Скульптура",
              isChecked: false,
            },
            {
              id: "decorativeAndApplied",
              name: "Декоративно-прикладное",
              isChecked: false,
            },
          ],
        },
        plot: {
          title: "Сюжет",
          items: [
            {
              id: "portrait",
              name: "Портрет",
              isChecked: false,
            },
            {
              id: "genreScene",
              name: "Жанровая сцена",
              isChecked: false,
            },
            {
              id: "scenery",
              name: "Пейзаж",
              isChecked: false,
            },
            {
              id: "literaryScene",
              name: "Литературная сцена",
              isChecked: false,
            },
            {
              id: "urbanLandscape",
              name: "Городской пейзаж",
              isChecked: false,
            },
            {
              id: "nude",
              name: "Ню",
              isChecked: false,
            },
            {
              id: "interior",
              name: "Интерьер",
              isChecked: false,
            },
            {
              id: "stillLife",
              name: "Натюрморт",
              isChecked: false,
            },
            {
              id: "allegoricalScene",
              name: "Аллегорическая сцена",
              isChecked: false,
            },
            {
              id: "historicalScene",
              name: "Историческая сцена",
              isChecked: false,
            },
            {
              id: "architecture",
              name: "Архитектура",
              isChecked: false,
            },
            {
              id: "animalism",
              name: "Анимализм",
              isChecked: false,
            },
            {
              id: "religiousScene",
              name: "Религиозная сцена",
              isChecked: false,
            },
          ],
        },
        style: {
          title: "Стили",
          items: [
            {
              id: "realism",
              name: "Реализм",
              isChecked: false,
            },
            {
              id: "modern",
              name: "Реализм",
              isChecked: false,
            },
            {
              id: "impressionism",
              name: "Импрессионизм",
              isChecked: false,
            },
            {
              id: "socialistRealism",
              name: "Соцреализм",
              isChecked: false,
            },
            {
              id: "primitivism",
              name: "Примитивизм",
              isChecked: false,
            },
            {
              id: "artNouveau",
              name: "Ар Нуво",
              isChecked: false,
            },
            {
              id: "surrealism",
              name: "Сюрреализм",
              isChecked: false,
            },
            {
              id: "genreScene",
              name: "Романтизм",
              isChecked: false,
            },
          ],
        },
        technics: {
          title: "Техника",
          items: [
            {
              id: "oil",
              name: "Масло",
              isChecked: false,
            },
            {
              id: "watercolor",
              name: "Акварель",
              isChecked: false,
            },
            {
              id: "graphitePencil",
              name: "Графитный карандаш",
              isChecked: false,
            },
            {
              id: "gouache",
              name: "Гуашь",
              isChecked: false,
            },
            {
              id: "pastel",
              name: "Пастель",
              isChecked: false,
            },
            {
              id: "mascara",
              name: "Тушь",
              isChecked: false,
            },
            {
              id: "graphite",
              name: "Графит",
              isChecked: false,
            },
            {
              id: "colorPencil",
              name: "Цветной карандаш",
              isChecked: false,
            },
            {
              id: "coal",
              name: "Уголь",
              isChecked: false,
            },
            {
              id: "chalk",
              name: "Мел",
              isChecked: false,
            },
            {
              id: "engraving",
              name: "Гравюра",
              isChecked: false,
            },
            {
              id: "pen",
              name: "Перо",
              isChecked: false,
            },
          ],
        },
        year: {
          title: "Период",
          items: [
            {
              id: "period1",
              name: "до 1900",
              isChecked: false,
            },
            {
              id: "period2",
              name: "1901-1916",
              isChecked: false,
            },
            {
              id: "period3",
              name: "1917 и позже",
              isChecked: false,
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 200px;

  &__block {
    border-bottom: 1px solid $color_gray6;
    padding: 20px 0;
  }
  ul {
    @include no-list;
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    color: $color_gray2;
  }

  &__title-button {
    border: none;
    background-color: inherit;
    color: $color_dark;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 20px;
  }
}
</style>

