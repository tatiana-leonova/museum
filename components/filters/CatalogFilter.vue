<template>
  <div class="filters" :class="[!isFiltersShow ? 'filters--hide' : '']">
    <div
      class="filters__accordion-item"
      :class="{ 'is-open': filterItems.work.isOpen }"
    >
      <a
        class="filters__item-title"
        href="#"
        @click.prevent="toggleItem(filterItems.work, 'work')"
      >
        <span>{{ filterItems.work.title }}</span>
      </a>
      <div
        class="filters__accordion-content"
        :class="{ 'is-visible': filterItems.work.isOpen }"
        ref="work"
        :style="{ height: filterItems.work.contentStyleHeight }"
      >
        <ul>
          <FilterItemWithCount
            @on-checked="onChecked(item)"
            v-for="(item, index) in filterItems.work.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div
      class="filters__accordion-item"
      :class="{ 'is-open': filterItems.plot.isOpen }"
    >
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
        <div class="filters__search">
          <input
            @input="
              onQuickSearchInput(filterItems.plot.id, quickSearchInputValue)
            "
            v-model="quickSearchInputValue"
            type="text"
            placeholder="Быстрый поиск"
          />
        </div>
        <ul>
          <FilterItemWithCheckbox
            @on-checked="onChecked(item)"
            v-for="(item, index) in getItemsCount(
              filterItems.plot.items,
              filterItems.plot.searchQuery,
              filterItems.plot.allItemButton
            )"
            :item="item"
            :key="index"
          />
        </ul>
        <AllFilterItemsButton
          @onClickAllFilterItems="
            onClickAllFilterItems(filterItems.plot.allItemButton)
          "
          :allItemButton="filterItems.plot.allItemButton"
        />
      </div>
    </div>

    <div
      class="filters__accordion-item"
      :class="{ 'is-open': filterItems.style.isOpen }"
    >
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
            @on-checked="onChecked(item)"
            v-for="(item, index) in filterItems.style.items"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div
      class="filters__accordion-item"
      :class="{ 'is-open': filterItems.technics.isOpen }"
    >
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
        <div class="filters__search">
          <input
            @input="
              onQuickSearchInput(filterItems.technics.id, quickSearchInputValue)
            "
            v-model="quickSearchInputValue"
            type="text"
            placeholder="Быстрый поиск"
          />
        </div>
        <ul>
          <FilterItemWithCheckbox
            @on-checked="onChecked(item)"
            v-for="(item, index) in getItemsCount(
              filterItems.technics.items,
              filterItems.technics.searchQuery,
              filterItems.technics.allItemButton
            )"
            :item="item"
            :key="index"
          />
        </ul>
      </div>
    </div>

    <div
      class="filters__accordion-item"
      :class="{ 'is-open': filterItems.year.isOpen }"
    >
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
        <ul class="no-border">
          <FilterItemWithCheckbox
            @on-checked="onChecked(item)"
            v-for="(item, index) in filterItems.year.items"
            :item="item"
            :key="index"
            v-bind:disabled="!item.isChecked"
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
import AllFilterItemsButton from "~/components/filters/AllFilterItemsButton.vue";

export default {
  components: {
    FilterItemWithCount,
    FilterItemWithCheckbox,
    QuickSearch,
    Range,
    AllFilterItemsButton,
  },

  data: () => {
    return {
      isFiltersShow: false,
      quickSearchInputValue: null,
    };
  },
  methods: {
    ToggleFilterShow() {
      this.isFiltersShow = !this.isFiltersShow;
    },

    toggleItem(item, refLink) {
      const dispatchHeight = (refLink, heightItem) => {
        this.$store.dispatch("catalogFilter/setContentStyleHeightItem", {
          refLink,
          heightItem,
        });
      };

      this.$store.dispatch("catalogFilter/toggleFilterItemCollapsing", refLink);

      const content = this.$refs[refLink];

      if (item.isOpen) {
        dispatchHeight(refLink, content.scrollHeight + "px");
        setTimeout(() => {
          dispatchHeight(refLink, "auto");
          item.contentStyleHeight = "auto";
        }, 500);
      } else {
        dispatchHeight(refLink, content.offsetHeight + "px");

        setTimeout(() => {
          dispatchHeight(refLink, "0px");
        }, 1);
      }
    },

    onQuickSearchInput(id, inputValue) {
      setTimeout(() => {
        this.$store.dispatch("catalogFilter/changeInputSearchValue", {
          id,
          inputValue,
        });
      }, 800);
    },

    getItemsCount(items, query, allItemButton) {
      let filteredItems = this.filterByQuery(items, query);
      if (
        !allItemButton.isExpanded &&
        filteredItems.length >= allItemButton.defaultCountValue
      ) {
        filteredItems = filteredItems.slice(0, allItemButton.defaultCountValue);
      }
      return filteredItems;
    },

    filterByQuery(items, query) {
      return items.filter(function (item) {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    },

    onClickAllFilterItems(allItemButton) {
      this.$store.dispatch(
        "catalogFilter/changeAllItemsButtonExspanded",
        allItemButton
      );
    },

    onChecked(item) {
      this.$store.dispatch("catalogFilter/chipToggle", item);
      this.$store.dispatch("catalogFilter/setFilterChecked", item);
    },
  },

  computed: {
    filterItems() {
      return this.$store.getters["catalogFilter/filterItems"];
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 200px;

  @media (max-width: $width-mobile-max) {
    &--hide {
      display: none;
    }
  }

  &__accordion-item {
    margin-bottom: 20px;

    &.is-open {
      .filters__item-title {
        &::after {
          content: none;
        }
      }
    }
  }

  ul {
    @include no-list;
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    color: $color_gray2;
    padding-bottom: 20px;
    border-bottom: px solid $color_gray6;

    &.no-border {
      border-bottom: 0;
    }
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

    &::before {
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

    &::after {
      position: absolute;
      content: "";
      right: 4px;
      top: 8px;
      width: 2px;
      height: 10px;
      font-size: 18px;
      background-color: $color_dark;
      transition: transform 0.5s ease;
    }
  }

  &__search {
    padding-bottom: 20px;

    input {
      width: 200px;
      height: 29px;
      padding: 0 10px;
      border: 1px solid $color_gray6;
      color: $color_dark;
      font-size: 12px;
      line-height: 26px;

      &:placeholder {
        color: $color_gray6;
      }
    }
  }

  &__range {
    padding-bottom: 20px;
  }

  &__accordion-content {
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .is-visible {
    overflow: visible;
  }
}
</style>

