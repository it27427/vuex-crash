export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
    },
  },
  mutations: {
    incrementCount: (state) => {
      state.counter.count++;
    },
    decrementCount: (state) => {
      state.counter.count--;
    },
    incrementCountBy: (state, payload) => {
      state.counter.count = state.counter.count + payload.value;
    },
  },
  actions: {
    incrementCounter: ({ commit }) => {
      return commit("incrementCount");
    },
    decrementCounter: ({ commit }) => {
      return commit("decrementCount");
    },
    incrementCounterBy: ({ commit }, payload) => {
      return commit("incrementCountBy", payload);
    },
  },
};
