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
      id: "work",
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
      id: "plot",
      title: "Сюжет",
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
      id: "style",
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
      id: "technics",
      title: "Техника",
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
      id: "year",
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
  SET_FILTER_GROUP_VISIBILITY(state, filterGroupId) {
    state.filterItems[filterGroupId].isOpen = !state.filterItems[filterGroupId]
      .isOpen;
  },
  SET_FILTER_ITEM_CONTENT_HEIGHT(state, { filterGroupId, heightItem }) {
    state.filterItems[filterGroupId].contentStyleHeight = heightItem;
  },

  TOGGLE_FILTER_ITEM(state, { item }) {
    item.isChecked = !item.isChecked;
    if (_.includes(state.currentFilters[item.filterGroup], item.id)) {
      // если повторное нажатие - удаляем поле из текущего фильттра
      _.remove(state.currentFilters[item.filterGroup], id => {
        return id === item.id;
      });
    } else {
      state.currentFilters[item.filterGroup].push(item.id);
    }
  },

  TOGGLE_FILTER_BY_YEAR(state, { item }) {
    item.isChecked = !item.isChecked;

    const filterByChecked = _.filter(state.filterItems.year.items, item => {
      return item.isChecked;
    });

    if (filterByChecked.length > 0) {
      // устанавливаем значения первого элемента для дальнейшего сравнения
      state.currentFilterByYear.minValue = filterByChecked[0].minValue;
      state.currentFilterByYear.maxValue = filterByChecked[0].maxValue;
      // поиск минимального и максимального значений
      _.forEach(filterByChecked, item => {
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
    // фильтрация по периодам
    let filterPictures = _.filter(rootState.catalog.pictureCards, picture => {
      return (
        picture.year <= state.currentFilterByYear.maxValue &&
        picture.year >= state.currentFilterByYear.minValue
      );
    });

    // фильтрация по Work
    if (state.currentFilters.work.length != 0) {
      filterPictures = _.filter(filterPictures, picture => {
        return _.includes(state.currentFilters.work, picture.work);
      });
    }
    // фильтрация по plot
    if (state.currentFilters.plot.length != 0) {
      filterPictures = _.filter(filterPictures, picture => {
        return _.includes(state.currentFilters.plot, picture.plot);
      });
    }
    // фильтрация по style
    if (state.currentFilters.style.length != 0) {
      filterPictures = _.filter(filterPictures, picture => {
        return _.includes(state.currentFilters.style, picture.style);
      });
    }
    // фильтрация по technics
    if (state.currentFilters.technics.length != 0) {
      filterPictures = _.filter(filterPictures, picture => {
        return _.includes(state.currentFilters.technics, picture.technics);
      });
    }

    rootState.catalog.cardsFilters = filterPictures;
  },

  SET_PAGE_COUNT(state, { rootState }) {
    rootState.catalog.pageCount = Math.ceil(
      rootState.catalog.cardsFilters.length / rootState.catalog.cardsOnPage
    );
  },

  CHIP_TOGGLE(state, chip) {
    if (
      _.some(state.filterChips, filterChip => {
        return filterChip.name === chip.name;
      })
    ) {
      // удаление чипса при повторном нажатии, если такой уже есть
      const chipIndex = state.filterChips.map(item => item.id).indexOf(chip.id);
      state.filterChips.splice(chipIndex, 1);
    } else {
      // добавление чипса в массив
      state.filterChips.push(chip);
    }
  },

  CHANGE_INPUT_SEARCH_VALUE(state, { id, inputValue }) {
    state.filterItems[id].searchQuery = inputValue;
  },

  CHANGE_ALL_ITEMS_BUTTON_EXSPANDED(state, allItemButton) {
    allItemButton.isExpanded = !allItemButton.isExpanded;
  },

  SET_PERIOD_BY_USER_INPUT(state, { minValue, maxValue }) {
    _.forEach(state.filterItems.year.items, period => {
      // убираем чекнутые периоды, если такие есть
      period.isChecked = false;
      // убираем периоды, если они были чекнуты из массива чипсов
      state.filterChips = _.filter(state.filterChips, chip => {
        return chip.name !== period.name;
      });
    });
    state.currentFilterByYear.minValue = minValue === null ? 0 : minValue;
    state.currentFilterByYear.maxValue =
      maxValue === null ? Infinity : maxValue;
  }
};

export const actions = {
  setFilterGroupVisibility({ commit }, filterGroupId) {
    commit("SET_FILTER_GROUP_VISIBILITY", filterGroupId);
  },

  setFilterItemContentHeight({ commit }, { filterGroupId, heightItem }) {
    commit("SET_FILTER_ITEM_CONTENT_HEIGHT", {
      filterGroupId,
      heightItem
    });
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
    commit("CHANGE_INPUT_SEARCH_VALUE", { id, inputValue });
  },

  changeAllItemsButtonExspanded({ commit }, allItemButton) {
    commit("CHANGE_ALL_ITEMS_BUTTON_EXSPANDED", allItemButton);
  },

  setPeriodByUserInput({ commit, rootState }, { minValue, maxValue }) {
    commit("SET_PERIOD_BY_USER_INPUT", { minValue, maxValue });
    commit("SET_FILTER_CHECKED", { rootState });
    commit("SET_PAGE_COUNT", { rootState });
  }
};

export const getters = {
  filterItems: state => state.filterItems,
  filterChips: state => state.filterChips
};
