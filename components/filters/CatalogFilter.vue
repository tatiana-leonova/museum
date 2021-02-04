<template>
  <div class="filters">
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
            @on-checked="onChecked('plot', item)"
            v-for="(item, index) in filterItems.plot.items"
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
            @on-checked="onChecked('style', item)"
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
            @on-checked="onChecked('technics', item)"
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
  methods: {
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

    onChecked(refLink, item) {
      this.$store.dispatch("catalogFilter/setFilterChecked", {
        refLink,
        item,
      });
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

  &__accordion-item {
    padding-top: 30px;

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
    border-bottom: 1px solid $color_gray6;

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
    overflow-y: hidden;
    transition: height 0.5s ease;
  }
}
</style>

