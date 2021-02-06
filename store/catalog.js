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
  cards: [],
  cardsFilters: []
});

export const mutations = {
  SET_TABS(state, cards) {
    state.cards = cards;
    state.cardsFilters = cards;
    state.pageCount = state.cards.length / state.cardsOnPage;
  },

  SET_ACTIVE(state, { tabId, cards }) {
    state.tabMenu.active = tabId;
    state.cards = cards;
    state.cardsFilters = cards;
  },

  SET_CURRENT_PAGE(state, index) {
    state.currentPage = index;
  },

  SET_WORKS_COUNT(state, { cards, rootState }) {
    _.forEach(rootState.catalogFilter.filterItems.work.items, function(item) {
      item.count = _.filter(cards, function(card) {
        if (card.work === item.id) return card;
      }).length;
    });
  }
};

export const actions = {
  async fetchTab({ commit, rootState }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_TABS", response.pictures);
    commit("SET_WORKS_COUNT", {
      cards: response.pictures,
      rootState: rootState
    });
  },

  async changeTabActive({ commit, rootState }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_ACTIVE", { tabId: tab.id, cards: response.pictures });
    commit("SET_WORKS_COUNT", {
      cards: response.pictures,
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
