import _ from "lodash";

export const state = () => ({
  currentFilters: {
    work: [],
    plot: [],
    style: [],
    technics: []
  },

  currentFilterByYear: {
    minValue: 0,
    maxValue: Infinity
  },

  filterChips: [],

  filterItems: {
    work: {
      title: "Работы",
      isOpen: true,
      contentStyleHeight: "auto",
      items: [
        {
          id: "painting",
          name: "Живопись",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "drawingsAndIllustrations",
          name: "Рисунки и иллюстрации",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "theatricalAndDecorative",
          name: "Театрально-декорационное",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "graphics",
          name: "Графика",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "engraving",
          name: "Гравюра",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "poster",
          name: "Плакат",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "sculpture",
          name: "Скульптура",
          filterGroup: "work",
          isChecked: false,
          count: 0
        },
        {
          id: "decorativeAndApplied",
          name: "Декоративно-прикладное",
          filterGroup: "work",
          isChecked: false,
          count: 0
        }
      ]
    },
    plot: {
      title: "Сюжет",
      id: "plot",
      isOpen: true,
      contentStyleHeight: "auto",
      searchQuery: "",
      allItemButton: {
        title: "Все сюжеты",
        defaultCountValue: 7,
        isExpanded: false
      },
      items: [
        {
          id: "portrait",
          name: "Портрет",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "genreScene",
          name: "Жанровая сцена",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "scenery",
          name: "Пейзаж",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "literaryScene",
          name: "Литературная сцена",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "urbanLandscape",
          name: "Городской пейзаж",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "nude",
          name: "Ню",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "interior",
          name: "Интерьер",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "stillLife",
          name: "Натюрморт",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "allegoricalScene",
          name: "Аллегорическая сцена",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "historicalScene",
          name: "Историческая сцена",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "architecture",
          name: "Архитектура",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "animalism",
          name: "Анимализм",
          filterGroup: "plot",
          isChecked: false
        },
        {
          id: "religiousScene",
          name: "Религиозная сцена",
          filterGroup: "plot",
          isChecked: false
        }
      ]
    },
    style: {
      title: "Стили",
      isOpen: true,
      contentStyleHeight: "auto",
      allItemButton: {
        title: "Все стили",
        defaultCountValue: 7,
        isExpanded: false
      },
      items: [
        {
          id: "realism",
          name: "Реализм",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "modern",
          name: "Модерн",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "impressionism",
          name: "Импрессионизм",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "socialistRealism",
          name: "Соцреализм",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "primitivism",
          name: "Примитивизм",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "artNouveau",
          name: "Ар Нуво",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "surrealism",
          name: "Сюрреализм",
          filterGroup: "style",
          isChecked: false
        },
        {
          id: "romanticism",
          name: "Романтизм",
          filterGroup: "style",
          isChecked: false
        }
      ]
    },
    technics: {
      title: "Техника",
      id: "technics",
      isOpen: true,
      contentStyleHeight: "auto",
      searchQuery: "",
      allItemButton: {
        title: "Вся техника",
        defaultCountValue: 7,
        isExpanded: false
      },
      allItemButton: {
        title: "Вся техника",
        defaultCountValue: 7,
        isExpanded: false
      },
      items: [
        {
          id: "oil",
          name: "Масло",
          filterGroup: "technics"
        },
        {
          id: "watercolor",
          name: "Акварель",
          filterGroup: "technics"
        },
        {
          id: "graphitePencil",
          name: "Графитный карандаш",
          filterGroup: "technics"
        },
        {
          id: "gouache",
          name: "Гуашь",
          filterGroup: "technics"
        },
        {
          id: "pastel",
          name: "Пастель",
          filterGroup: "technics"
        },
        {
          id: "mascara",
          name: "Тушь",
          filterGroup: "technics"
        },
        {
          id: "graphite",
          name: "Графит",
          filterGroup: "technics"
        },
        {
          id: "colorPencil",
          name: "Цветной карандаш",
          filterGroup: "technics"
        },
        {
          id: "coal",
          name: "Уголь",
          filterGroup: "technics"
        },
        {
          id: "chalk",
          name: "Мел",
          filterGroup: "technics"
        },
        {
          id: "engraving",
          name: "Гравюра",
          filterGroup: "technics"
        },
        {
          id: "pen",
          name: "Перо",
          filterGroup: "technics"
        }
      ]
    },
    year: {
      title: "Период",
      isOpen: true,
      contentStyleHeight: "auto",
      allItemButton: {
        title: "Все периоды",
        defaultCountValue: 7,
        isExpanded: false
      },
      items: [
        {
          id: "period1",
          name: "до 1900",
          filterGroup: "year",
          minValue: 0,
          maxValue: 1900,
          isChecked: false
        },
        {
          id: "period2",
          name: "1901-1916",
          filterGroup: "year",
          minValue: 1901,
          maxValue: 1916,
          isChecked: false
        },
        {
          id: "period3",
          name: "1917 и позже",
          filterGroup: "year",
          minValue: 1917,
          maxValue: Infinity,
          isChecked: false
        }
      ]
    }
  }
});

export const mutations = {
  TOGGLE_FILTER_ITEM_COLLAPSING(state, refLink) {
    state.filterItems[refLink].isOpen = !state.filterItems[refLink].isOpen;
  },
  SET_CONTENT_STYLE_HEIGHT_ITEM(state, { refLink, heightItem }) {
    state.filterItems[refLink].contentStyleHeight = heightItem;
  },

  TOGGLE_FILTER_ITEM(state, { item }) {
    item.isChecked = !item.isChecked;
    if (_.includes(state.currentFilters[item.filterGroup], item.id)) {
      _.remove(state.currentFilters[item.filterGroup], function(id) {
        return id === item.id;
      });
    } else {
      state.currentFilters[item.filterGroup].push(item.id);
    }
  },

  TOGGLE_FILTER_BY_YEAR(state, { item }) {
    item.isChecked = !item.isChecked;

    const filterByChecked = _.filter(state.filterItems.year.items, function(
      item
    ) {
      return item.isChecked;
    });

    if (filterByChecked.length > 0) {
      state.currentFilterByYear.minValue = filterByChecked[0].minValue;
      state.currentFilterByYear.maxValue = filterByChecked[0].maxValue;

      _.forEach(filterByChecked, function(item) {
        if (state.currentFilterByYear.minValue > item.minValue) {
          state.currentFilterByYear.minValue = item.minValue;
        }
        if (state.currentFilterByYear.maxValue < item.maxValue) {
          state.currentFilterByYear.maxValue = item.maxValue;
        }
      });
    } else {
      state.currentFilterByYear.minValue = 0;
      state.currentFilterByYear.maxValue = Infinity;
    }
  },

  SET_FILTER_CHECKED(state, { rootState }) {
    let filter = _.filter(rootState.catalog.cards, function(card) {
      return (
        card.year <= state.currentFilterByYear.maxValue &&
        card.year >= state.currentFilterByYear.minValue
      );
    });
    if (state.currentFilters.work.length != 0) {
      filter = _.filter(filter, function(card) {
        return _.includes(state.currentFilters.work, card.work);
      });
    }
    if (state.currentFilters.plot.length != 0) {
      filter = _.filter(filter, function(card) {
        return _.includes(state.currentFilters.plot, card.plot);
      });
    }
    if (state.currentFilters.style.length != 0) {
      filter = _.filter(filter, function(card) {
        return _.includes(state.currentFilters.style, card.style);
      });
    }
    if (state.currentFilters.technics.length != 0) {
      filter = _.filter(filter, function(card) {
        return _.includes(state.currentFilters.technics, card.technics);
      });
    }

    rootState.catalog.cardsFilters = filter;
  },

  SET_PAGE_COUNT(state, { rootState }) {
    rootState.catalog.pageCount = Math.ceil(
      rootState.catalog.cardsFilters.length / rootState.catalog.cardsOnPage
    );
  },

  CHIP_TOGGLE(state, chip) {
    if (
      _.some(state.filterChips, function(n) {
        return n.name === chip.name;
      })
    ) {
      const i = state.filterChips.map(item => item.id).indexOf(chip.id);
      state.filterChips.splice(i, 1);
    } else {
      state.filterChips.push(chip);
    }
  },

  CHANGE_INPUT_SEARCH_VALUE(state, { id, inputValue }) {
    state.filterItems[id].searchQuery = inputValue;
  },

  CHANGE_ALL_ITEMS_BUTTON_EXSPANDED(state, allItemButton) {
    allItemButton.isExpanded = !allItemButton.isExpanded;
  }
};

export const actions = {
  toggleFilterItemCollapsing({ commit }, refLink) {
    commit("TOGGLE_FILTER_ITEM_COLLAPSING", refLink);
  },

  setContentStyleHeightItem({ commit }, { refLink, heightItem }) {
    commit("SET_CONTENT_STYLE_HEIGHT_ITEM", { refLink, heightItem });
  },

  setFilterChecked({ commit, rootState }, item) {
    if (item.filterGroup === "year") {
      commit("TOGGLE_FILTER_BY_YEAR", { item });
    } else {
      commit("TOGGLE_FILTER_ITEM", { item });
    }
    commit("SET_FILTER_CHECKED", { rootState });
    commit("SET_PAGE_COUNT", { rootState });
  },

  chipToggle({ commit }, chip) {
    commit("CHIP_TOGGLE", chip);
  },

  changeInputSearchValue({ commit }, { id, inputValue }) {
    commit("CHANGE_INPUT_SEARCH_VALUE", (state, { id, inputValue }));
  },

  changeAllItemsButtonExspanded({ commit }, allItemButton) {
    commit("CHANGE_ALL_ITEMS_BUTTON_EXSPANDED", (state, allItemButton));
  }
};

export const getters = {
  filterItems: state => state.filterItems,
  filterChips: state => state.filterChips
};
