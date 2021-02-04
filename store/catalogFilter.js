import _ from "lodash";

export const state = () => ({
  currentFilters: {
    work: [],
    plot: [],
    style: [],
    technics: [],
    year: []
  },
  filterItems: {
    work: {
      title: "Работы",
      isOpen: true,
      contentStyleHeight: "auto",
      items: [
        {
          id: "painting",
          name: "Живопись",
          isChecked: false
        },
        {
          id: "drawingsAndIllustrations",
          name: "Рисунки и иллюстрации",
          isChecked: false
        },
        {
          id: "theatricalAndDecorative",
          name: "Театрально-декорационное",
          isChecked: false
        },
        {
          id: "graphics",
          name: "Графика",
          isChecked: false
        },
        {
          id: "engraving",
          name: "Гравюра",
          isChecked: false
        },
        {
          id: "poster",
          name: "Плакат",
          isChecked: false
        },
        {
          id: "sculpture",
          name: "Скульптура",
          isChecked: false
        },
        {
          id: "decorativeAndApplied",
          name: "Декоративно-прикладное",
          isChecked: false
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
          isChecked: false
        },
        {
          id: "genreScene",
          name: "Жанровая сцена",
          isChecked: false
        },
        {
          id: "scenery",
          name: "Пейзаж",
          isChecked: false
        },
        {
          id: "literaryScene",
          name: "Литературная сцена",
          isChecked: false
        },
        {
          id: "urbanLandscape",
          name: "Городской пейзаж",
          isChecked: false
        },
        {
          id: "nude",
          name: "Ню",
          isChecked: false
        },
        {
          id: "interior",
          name: "Интерьер",
          isChecked: false
        },
        {
          id: "stillLife",
          name: "Натюрморт",
          isChecked: false
        },
        {
          id: "allegoricalScene",
          name: "Аллегорическая сцена",
          isChecked: false
        },
        {
          id: "historicalScene",
          name: "Историческая сцена",
          isChecked: false
        },
        {
          id: "architecture",
          name: "Архитектура",
          isChecked: false
        },
        {
          id: "animalism",
          name: "Анимализм",
          isChecked: false
        },
        {
          id: "religiousScene",
          name: "Религиозная сцена",
          isChecked: false
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
          isChecked: false
        },
        {
          id: "modern",
          name: "Модерн",
          isChecked: false
        },
        {
          id: "impressionism",
          name: "Импрессионизм",
          isChecked: false
        },
        {
          id: "socialistRealism",
          name: "Соцреализм",
          isChecked: false
        },
        {
          id: "primitivism",
          name: "Примитивизм",
          isChecked: false
        },
        {
          id: "artNouveau",
          name: "Ар Нуво",
          isChecked: false
        },
        {
          id: "surrealism",
          name: "Сюрреализм",
          isChecked: false
        },
        {
          id: "romanticism",
          name: "Романтизм",
          isChecked: false
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
          isChecked: false
        },
        {
          id: "watercolor",
          name: "Акварель",
          isChecked: false
        },
        {
          id: "graphitePencil",
          name: "Графитный карандаш",
          isChecked: false
        },
        {
          id: "gouache",
          name: "Гуашь",
          isChecked: false
        },
        {
          id: "pastel",
          name: "Пастель",
          isChecked: false
        },
        {
          id: "mascara",
          name: "Тушь",
          isChecked: false
        },
        {
          id: "graphite",
          name: "Графит",
          isChecked: false
        },
        {
          id: "colorPencil",
          name: "Цветной карандаш",
          isChecked: false
        },
        {
          id: "coal",
          name: "Уголь",
          isChecked: false
        },
        {
          id: "chalk",
          name: "Мел",
          isChecked: false
        },
        +{
          id: "engraving",
          name: "Гравюра",
          isChecked: false
        },
        {
          id: "pen",
          name: "Перо",
          isChecked: false
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

  SET_FILTER_CHECKED(state, { refLink, item, rootState }) {

    if (_.includes(state.currentFilters[refLink], item.id)) {
      _.remove(state.currentFilters[refLink], function(n) {
        return n === item.id;
      });
    } else {
      state.currentFilters[refLink].push(item.id);
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
            _.includes(state.currentFilters.plot, card.plot) ||
            _.includes(state.currentFilters.technics, card.technics) ||
            _.includes(state.currentFilters.style, card.style)
          );
        }
      );
    } else {
      rootState.catalog.cardsFilters = rootState.catalog.cards;
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

  setFilterChecked({ commit, rootState }, { refLink, item }) {
    commit("SET_FILTER_CHECKED", { refLink, item, rootState });
  }
};

export const getters = {
  filterItems: state => state.filterItems
};
