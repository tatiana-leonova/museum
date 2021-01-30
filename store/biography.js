export const state = () => ({
  historicalEvents: []
});

export const mutations = {
  SET_BIOGRAPHY(state, data) {
    state.historicalEvents = data;
  }
};

export const actions = {
  async fetchBiography({ commit }) {
    const data = await this.$axios.$get(
      "https://api.npoint.io/dfc3ca68e1ee5eb00f99"
    );
    commit("SET_BIOGRAPHY", data);
  }
};

export const getters = {
  historicalEvents: state => state.historicalEvents
};
