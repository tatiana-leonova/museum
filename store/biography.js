export const state = () => ({
  historicalEvents: []
});

export const mutations = {
  SET_BIOGRAPHY(state, data) {
    state.historicalEvents = state.historicalEvents.concat(data);
  },
  HIDE_BIOGRAPHY(state, data) {
    state.historicalEvents = state.historicalEvents.slice(0, 2);
  }
};

export const actions = {
  async fetchBiography({ commit }, { offset, limit }) {
    const data = await this.$axios.$get(
      "https://api.npoint.io/dfc3ca68e1ee5eb00f99"
    );
    commit("SET_BIOGRAPHY", data.slice(offset, limit));
  },
  hideText({ commit }) {
    commit("HIDE_BIOGRAPHY");
  }
};

export const getters = {
  historicalEvents: state => state.historicalEvents
};
