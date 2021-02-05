import _ from "lodash";

export const state = () => ({
  currentFilters: {
    work: [],
    plot: [],
    style: [],
    technics: [],
    year: []
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
          filterGroup: "work"
        },
        {
          id: "drawingsAndIllustrations",
          name: "Рисунки и иллюстрации",
          filterGroup: "work"
        },
        {
          id: "theatricalAndDecorative",
          name: "Театрально-декорационное",
          filterGroup: "work"
        },
        {
          id: "graphics",
          name: "Графика",
          filterGroup: "work"
        },
        {
          id: "engraving",
          name: "Гравюра",
          filterGroup: "work"
        },
        {
          id: "poster",
          name: "Плакат",
          filterGroup: "work"
        },
        {
          id: "sculpture",
          name: "Скульптура",
          filterGroup: "work"
        },
        {
          id: "decorativeAndApplied",
          name: "Декоративно-прикладное",
          filterGroup: "work"
        }
      ]
    },
    plot: {
      title: "Сюжет",
      isOpen: true,
      contentStyleHeight: "auto",
      items: [
        {
          id: "portrait",
          name: "Портрет",
          filterGroup: "plot"
        },
        {
          id: "genreScene",
          name: "Жанровая сцена",
          filterGroup: "plot"
        },
        {
          id: "scenery",
          name: "Пейзаж",
          filterGroup: "plot"
        },
        {
          id: "literaryScene",
          name: "Литературная сцена",
          filterGroup: "plot"
        },
        {
          id: "urbanLandscape",
          name: "Городской пейзаж",
          filterGroup: "plot"
        },
        {
          id: "nude",
          name: "Ню",
          filterGroup: "plot"
        },
        {
          id: "interior",
          name: "Интерьер",
          filterGroup: "plot"
        },
        {
          id: "stillLife",
          name: "Натюрморт",
          filterGroup: "plot"
        },
        {
          id: "allegoricalScene",
          name: "Аллегорическая сцена",
          filterGroup: "plot"
        },
        {
          id: "historicalScene",
          name: "Историческая сцена",
          filterGroup: "plot"
        },
        {
          id: "architecture",
          name: "Архитектура",
          filterGroup: "plot"
        },
        {
          id: "animalism",
          name: "Анимализм",
          filterGroup: "plot"
        },
        {
          id: "religiousScene",
          name: "Религиозная сцена",
          filterGroup: "plot"
        }
      ]
    },
    style: {
      title: "Стили",
      isOpen: true,
      contentStyleHeight: "auto",
      items: [
        {
          id: "realism",
          name: "Реализм",
          filterGroup: "style"
        },
        {
          id: "modern",
          name: "Модерн",
          filterGroup: "style"
        },
        {
          id: "impressionism",
          name: "Импрессионизм",
          filterGroup: "style"
        },
        {
          id: "socialistRealism",
          name: "Соцреализм",
          filterGroup: "style"
        },
        {
          id: "primitivism",
          name: "Примитивизм",
          filterGroup: "style"
        },
        {
          id: "artNouveau",
          name: "Ар Нуво",
          filterGroup: "style"
        },
        {
          id: "surrealism",
          name: "Сюрреализм",
          filterGroup: "style"
        },
        {
          id: "romanticism",
          name: "Романтизм",
          filterGroup: "style"
        }
      ]
    },
    technics: {
      title: "Техника",
      isOpen: true,
      contentStyleHeight: "auto",
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
      items: [
        {
          id: "period1",
          name: "до 1900",
          isChecked: false
        },
        {
          id: "period2",
          name: "1901-1916",
          isChecked: false
        },
        {
          id: "period3",
          name: "1917 и позже",
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

  SET_FILTER_CHECKED(state, { item, rootState }) {
    if (_.includes(state.currentFilters[item.filterGroup], item.id)) {
      _.remove(state.currentFilters[item.filterGroup], function(n) {
        return n === item.id;
      });
    } else {
      state.currentFilters[item.filterGroup].push(item.id);
    }

    if (
      state.currentFilters.work.length != 0 ||
      state.currentFilters.plot.length != 0 ||
      state.currentFilters.style.length != 0 ||
      state.currentFilters.technics.length != 0
    ) {
      rootState.catalog.cardsFilters = _.filter(
        rootState.catalog.cards,
        function(card) {
          return (
            _.includes(state.currentFilters.work, card.work) ||
            _.includes(state.currentFilters.plot, card.plot) ||
            _.includes(state.currentFilters.technics, card.technics) ||
            _.includes(state.currentFilters.style, card.style)
          );
        }
      );
    } else {
      rootState.catalog.cardsFilters = rootState.catalog.cards;
    }
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
    commit("SET_FILTER_CHECKED", { item, rootState });
  },

  chipToggle({ commit }, chip) {
    commit("CHIP_TOGGLE", chip);
  }
};

export const getters = {
  filterItems: state => state.filterItems,
  filterChips: state => state.filterChips
};
