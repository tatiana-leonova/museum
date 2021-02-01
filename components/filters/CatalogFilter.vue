<template>
  <div class="filters">
    <div class="filters__work">
      <button>{{ filterItems.work.title }}</button>
      <ul>
        <FilterItemWithCount
          v-for="(item, index) in filterItems.work.items"
          :item="item"
          :key="index"
        />
      </ul>
    </div>

    <div class="filters__plot">
      <button>{{ filterItems.plot.title }}</button>
      <QuickSearch />
      <FilterItemWithCheckbox
        v-for="(item, index) in filterItems.plot.items"
        :item="item"
        :key="index"
      />
    </div>
    <div class="filters__style">
      <button>{{ filterItems.style.title }}</button>
      <FilterItemWithCheckbox
        v-for="(item, index) in filterItems.style.items"
        :item="item"
        :key="index"
      />
    </div>
    <div class="filters__technics">
      <button>{{ filterItems.technics.title }}</button>
      <QuickSearch />
      <FilterItemWithCheckbox
        v-for="(item, index) in filterItems.technics.items"
        :item="item"
        :key="index"
      />
    </div>
    <div class="filters__year">
      <button>{{ filterItems.year.title }}</button>
      <Range />
      <FilterItemWithCheckbox
        v-for="(item, index) in filterItems.year.items"
        :item="item"
        :key="index"
      />
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
          items: {
            painting: "Живопись",
            drawingsAndIllustrations: "Рисунки и иллюстрации",
            theatricalAndDecorative: "Театрально-декорационное",
            graphics: "Графика",
            engraving: "Гравюра",
            poster: "Плакат",
            sculpture: "Скульптура",
            decorativeAndApplied: "Декоративно-прикладное",
          },
        },
        plot: {
          title: "Сюжет",
          items: {
            portrait: "Портрет",
            genreScene: "Жанровая сцена",
            scenery: "Пейзаж",
            literaryScene: "Литературная сцена",
            urbanLandscape: "Городской пейзаж",
            nude: "Ню",
            interior: "Интерьер",
            stillLife: "Натюрморт",
            allegoricalScene: "Аллегорическая сцена",
            historicalScene: "Историческая сцена",
            architecture: "Архитектура",
            animalism: "Анимализм",
            religiousScene: "Религиозная сцена",
          },
        },
        style: {
          title: "Стили",
          items: {
            realism: "Реализм",
            modern: "Модерн",
            impressionism: "Импрессионизм",
            socialistRealism: "Соцреализм",
            primitivism: "Примитивизм",
            artNouveau: "Ар Нуво",
            surrealism: "Сюрреализм",
            romanticism: "Романтизм",
          },
        },
        technics: {
          title: "Техника",
          items: {
            oil: "Масло",
            watercolor: "Акварель",
            graphitePencil: "Графитный карандаш",
            gouache: "Гуашь",
            pastel: "Пастель",
            mascara: "Тушь",
            graphite: "Графит",
            colorPencil: "Цветной карандаш",
            coal: "Уголь",
            chalk: "Мел",
            Гравюра: "engraving",
            Перо: "pen",
          },
        },
        year: {
          title: "Период",
          items: {
            1: "до 1900",
            2: "1901-1916",
            3: "1917 и позже",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

