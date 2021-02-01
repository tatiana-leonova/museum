<template>
  <div class="filters">
    <div class="filters__work">
      <button>Заголовок</button>
      <FilterItemWithCount />
    </div>

    <div class="filters__flot">
      <button>Заголовок</button>
      <QuickSearch />
      <FilterItemWithCheckbox />
    </div>
    <div class="filters__style">
      <button>Заголовок</button>
      <FilterItemWithCheckbox />
    </div>
    <div class="filters__technics">
      <button>Заголовок</button>
      <QuickSearch />
      <FilterItemWithCheckbox />
    </div>
    <div class="filters__year">
      <button>Заголовок</button>
      <Range />
      <FilterItemWithCheckbox />
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

