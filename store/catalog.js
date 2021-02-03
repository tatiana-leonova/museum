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
        json: "https://api.npoint.io/f4454ef4e05caa4f5b9a"
      },
      {
        id: "philately",
        title: "Филателия",
        json: "https://api.npoint.io/d746638a9035c662e7a2"
      }
    ],
    active: "rarity"
  },
  cards: [],
  cardsFilters: []
});

export const mutations = {
  SET_TABS(state, cards) {
    state.cards = cards;
    state.cardsFilters = cards;
  },

  SET_ACTIVE(state, { tabId, cards }) {
    state.tabMenu.active = tabId;
    state.cards = cards;
  }
};

export const actions = {
  async fetchTab({ commit }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_TABS", response.pictures);
  },

  async changeTabActive({ commit }, { tab }) {
    const response = await this.$axios.$get(tab.json);
    commit("SET_ACTIVE", { tabId: tab.id, cards: response.pictures });
  }
};

export const getters = {
  tabMenu: state => state.tabMenu,
  cards: state => state.cardsFilters
};
