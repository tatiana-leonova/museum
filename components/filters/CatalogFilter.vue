<template>
  <div
    class="filters"
    :class="[isFiltersShow ? 'filters--show' : 'filters--hide']"
  >
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
        <QuickSearch class="filters__search" />
        <ul>
          <FilterItemWithCheckbox
            @on-checked="onChecked(item)"
            v-for="(item, index) in filterBySearch(
              filterItems.plot.items,
              filterItems.plot.searchQuery
            )"
            :item="item"
            :key="index"
          />
        </ul>
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
        <QuickSearch class="filters__search" />
        <ul>
          <FilterItemWithCheckbox
            @on-checked="onChecked(item)"
            v-for="(item, index) in filterItems.technics.items"
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

export default {
  components: {
    FilterItemWithCount,
    FilterItemWithCheckbox,
    QuickSearch,
    Range,
  },

  data: () => {
    return {
      isFiltersShow: false,
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

    filterBySearch(items, query) {
      return items.filter(function (item) {
        return item.name.includes(query);
      });
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
    min-width: 280px;
    max-width: 100%;

    // &--show {
    //   display: block;
    //   opacity: 1;
    //   transition: 0.5s;
    // }

    &--hide {
      display: none;
      // visibility: hidden;
      // position: absolite;
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

