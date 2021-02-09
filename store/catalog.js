import _ from "lodash";

export const state = () => ({
  tabMenu: {
    tabs: [
      {
        id: "rarity",
        title: "Раритет",
        json: "https://api.npoint.io/f4454ef4e05caa4f5b9a"
      },
      {
        id: "new",
        title: "Новые",
        json: "https://api.npoint.io/d746638a9035c662e7a2"
      },
      {
        id: "antique",
        title: "Антиквариат",
        json: "https://api.npoint.io/c4576445337f86113117"
      },
      {
        id: "philately",
        title: "Филателия",
        json: "https://api.npoint.io/906f50a1a731682e28fa"
      }
    ],
    active: "rarity"
  },
  pageCount: 0,
  cardsOnPage: 10,
  currentPage: 0,
  pictureCards: [],
  cardsFilters: []
});

export const mutations = {
  SET_TAB_PICTURES(state, pictures) {
    state.pictureCards = pictures;
    state.cardsFilters = pictures;
    state.pageCount = Math.ceil(state.pictureCards.length / state.cardsOnPage); // количество страниц для пагинации
  },

  SET_ACTIVE_TAB(state, { tabId, pictures }) {
    state.tabMenu.active = tabId;
    state.pictureCards = pictures;
    state.cardsFilters = pictures;
  },

  // смена страниц для пагинации
  SET_CURRENT_PAGE(state, index) {
    state.currentPage = index;
  },

  // подсчет количества картин по элементам фильтра Работы
  SET_WORKS_COUNT(state, { pictures, rootState }) {
    _.forEach(rootState.catalogFilter.filterItems.work.items, item => {
      item.count = _.filter(pictures, picture => {
        return picture.work === item.id;
      }).length;
    });
  }
};

export const actions = {
  async fetchTab({ commit, rootState }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_TAB_PICTURES", response.pictures);
    commit("SET_WORKS_COUNT", {
      pictures: response.pictures,
      rootState: rootState
    });
  },

  async changeActiveTab({ commit, rootState }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_ACTIVE_TAB", { tabId: tab.id, pictures: response.pictures });
    commit("SET_WORKS_COUNT", {
      pictures: response.pictures,
      rootState: rootState
    });
  },

  changePage({ commit }, { index }) {
    commit("SET_CURRENT_PAGE", index);
  }
};

export const getters = {
  tabMenu: state => state.tabMenu,
  cards: state =>
    state.cardsFilters.slice(
      state.currentPage * state.cardsOnPage,
      state.currentPage * state.cardsOnPage + state.cardsOnPage
    ),
  pageCount: state => state.pageCount,
  currentPage: state => state.currentPage
};
