<template>
  <div class="filters">
    <div class="filters__accordion-item">
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.work, 'work')"
      >
        <span>{{ filterItems.work.title }}</span>
      </a>
      <div
        class="filters__accordion-content"
        ref="work"
        :style="{ height: filterItems.work.contentStyleHeight }"
      >
        <ul>
          <FilterItemWithCount
            v-for="(item, index) in filterItems.work.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div class="filters__accordion-item">
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.plot, 'plot')"
      >
        {{ filterItems.plot.title }}
      </a>
      <div
        class="filters__accordion-content"
        ref="plot"
        :style="{ height: filterItems.plot.contentStyleHeight }"
      >
        <QuickSearch class="filters__search" />
        <ul>
          <FilterItemWithCheckbox
            v-for="(item, index) in filterItems.plot.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div class="filters__accordion-item">
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.style, 'style')"
      >
        {{ filterItems.style.title }}
      </a>
      <div
        class="filters__accordion-content"
        ref="style"
        :style="{ height: filterItems.style.contentStyleHeight }"
      >
        <ul>
          <FilterItemWithCheckbox
            v-for="(item, index) in filterItems.style.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div class="filters__accordion-item">
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.technics, 'technics')"
      >
        {{ filterItems.technics.title }}
      </a>
      <div
        class="filters__accordion-content"
        ref="technics"
        :style="{ height: filterItems.technics.contentStyleHeight }"
      >
        <QuickSearch class="filters__search" />
        <ul>
          <FilterItemWithCheckbox
            v-for="(item, index) in filterItems.technics.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div class="filters__accordion-item">
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.year, 'year')"
      >
        {{ filterItems.year.title }}
      </a>
      <div
        class="filters__accordion-content"
        ref="year"
        :style="{ height: filterItems.year.contentStyleHeight }"
      >
        <Range class="filters__range" />
        <ul>
          <FilterItemWithCheckbox
            v-for="(item, index) in filterItems.year.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
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
          isOpen: true,
          contentStyleHeight: "auto",
          items: [
            {
              id: "painting",
              name: "Живопись",
              isChecked: false,
            },
            {
              id: "drawingsAndIllustrations",
              name: "Рисунки и иллюстрации",
            },
            {
              id: "theatricalAndDecorative",
              name: "Театрально-декорационное",
            },
            {
              id: "graphics",
              name: "Графика",
            },
            {
              id: "engraving",
              name: "Гравюра",
            },
            {
              id: "poster",
              name: "Плакат",
            },
            {
              id: "sculpture",
              name: "Скульптура",
            },
            {
              id: "decorativeAndApplied",
              name: "Декоративно-прикладное",
            },
          ],
        },
        plot: {
          title: "Сюжет",
          isOpen: true,
          contentStyleHeight: "auto",
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
          isOpen: true,
          contentStyleHeight: "auto",
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
          isOpen: true,
          contentStyleHeight: "auto",
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
            +{
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
          isOpen: true,
          contentStyleHeight: "auto",
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
  methods: {
    toggleItem(item, refLink) {
      item.isOpen = !item.isOpen;

      const content = this.$refs[refLink];

      if (item.isOpen) {
        // открытие
        item.contentStyleHeight = content.scrollHeight + "px";

        // по окончании анимации обнуляем стили
        setTimeout(() => {
          item.contentStyleHeight = "auto";
        }, 500); // время анимации в css
      } else {
        // закрытие
        item.contentStyleHeight = content.offsetHeight + "px";

        setTimeout(() => {
          item.contentStyleHeight = "0px";
        }, 1); // мини-задержка для рендеринга браузера
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 200px;

  &__accordion-item {
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

  &__item-title {
    display: block;
    color: $color_dark;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 20px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: 200px;
    text-align: left;
    padding-right: 15px;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      top: 12px;
      width: 10px;
      height: 2px;
      font-size: 18px;
      background-color: $color_dark;
      transition: transform 0.5s ease;
    }
  }

  &__search {
    padding-bottom: 20px;
  }

  &__range {
    padding-bottom: 20px;
  }
  &__accordion-content {
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
</style>

