export const state = () => ({
  historicalEvents: []
});

export const mutations = {
  CONCAT_HISTORICAL_EVENTS(state, data) {
    state.historicalEvents = state.historicalEvents.concat(data);
  },
  // возвращаем к первоначальному значению(до открытия)
  HIDE_HISTORICAL_EVENTS(state) {
    state.historicalEvents = state.historicalEvents.slice(0, 2);
  }
};

export const actions = {
  async fetchHistoricalEvents({ commit }, { offset, limit }) {
    const data = await this.$axios.$get(
      "https://api.npoint.io/dfc3ca68e1ee5eb00f99"
    );
    // костыль, чтобы имитировать порционную подгрузку данных
    commit("CONCAT_HISTORICAL_EVENTS", data.slice(offset, limit));
  },
  hideHistoricalEvents({ commit }) {
    commit("HIDE_HISTORICAL_EVENTS");
  }
};

export const getters = {
  historicalEvents: state => state.historicalEvents
};
