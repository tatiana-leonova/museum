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
            painting: {
              name: "Живопись",
              isChecked: false,
            },
            drawingsAndIllustrations: {
              name: "Рисунки и иллюстрации",
              isChecked: false,
            },
            theatricalAndDecorative: {
              name: "Театрально-декорационное",
              isChecked: false,
            },
            graphics: {
              name: "Графика",
              isChecked: false,
            },
            engraving: {
              name: "Гравюра",
              isChecked: false,
            },
            poster: {
              name: "Плакат",
              isChecked: false,
            },
            sculpture: {
              name: "Скульптура",
              isChecked: false,
            },
            decorativeAndApplied: {
              name: "Декоративно-прикладное",
              isChecked: false,
            },
          },
        },
        plot: {
          title: "Сюжет",
          items: {
            portrait: {
              name: "Портрет",
              isChecked: false,
            },
            genreScene: {
              name: "Жанровая сцена",
              isChecked: false,
            },
            scenery: {
              name: "Пейзаж",
              isChecked: false,
            },
            literaryScene: {
              name: "Литературная сцена",
              isChecked: false,
            },
            urbanLandscape: {
              name: "Городской пейзаж",
              isChecked: false,
            },
            nude: {
              name: "Ню",
              isChecked: false,
            },
            interior: {
              name: "Интерьер",
              isChecked: false,
            },
            stillLife: {
              name: "Натюрморт",
              isChecked: false,
            },
            allegoricalScene: {
              name: "Аллегорическая сцена",
              isChecked: false,
            },
            historicalScene: {
              name: "Историческая сцена",
              isChecked: false,
            },
            architecture: {
              name: "Архитектура",
              isChecked: false,
            },
            animalism: {
              name: "Анимализм",
              isChecked: false,
            },
            religiousScene: {
              name: "Религиозная сцена",
              isChecked: false,
            },
          },
        },
        style: {
          title: "Стили",
          items: {
            realism: {
              name: "Реализм",
              isChecked: false,
            },
            modern: {
              name: "Реализм",
              isChecked: false,
            },
            impressionism: {
              name: "Импрессионизм",
              isChecked: false,
            },
            socialistRealism: {
              name: "Соцреализм",
              isChecked: false,
            },
            primitivism: {
              name: "Примитивизм",
              isChecked: false,
            },
            artNouveau: {
              name: "Ар Нуво",
              isChecked: false,
            },
            surrealism: {
              name: "Сюрреализм",
              isChecked: false,
            },
            romanticism: {
              name: "Романтизм",
              isChecked: false,
            },
          },
        },
        technics: {
          title: "Техника",
          items: {
            oil: {
              name: "Масло",
              isChecked: false,
            },
            watercolor: {
              name: "Акварель",
              isChecked: false,
            },
            graphitePencil: {
              name: "Графитный карандаш",
              isChecked: false,
            },
            gouache: {
              name: "Гуашь",
              isChecked: false,
            },
            pastel: {
              name: "Пастель",
              isChecked: false,
            },
            mascara: {
              name: "Тушь",
              isChecked: false,
            },
            graphite: {
              name: "Графит",
              isChecked: false,
            },
            colorPencil: {
              name: "Цветной карандаш",
              isChecked: false,
            },
            coal: {
              name: "Уголь",
              isChecked: false,
            },
            chalk: {
              name: "Мел",
              isChecked: false,
            },
            engraving: {
              name: "Гравюра",
              isChecked: false,
            },
            pen: {
              name: "Перо",
              isChecked: false,
            },
          },
        },
        year: {
          title: "Период",
          items: {
            period1: {
              name: "до 1900",
              isChecked: false,
            },
            period2: {
              name: "1901-1916",
              isChecked: false,
            },
            period3: {
              name: "1917 и позже",
              isChecked: false,
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

