import axios from "axios";

export default {
  namespaced: true,
  state: {
    userList: {
      loading: false,
      users: [],
      errorMessage: null,
    },
  },
  mutations: {
    getUsersRequest: (state) => {
      state.userList.loading = true;
    },
    getUsersSuccess: (state, payload) => {
      state.userList.loading = false;
      state.userList.users = payload.users;
    },
    getUsersFailure: (state, payload) => {
      state.userList.loading = false;
      state.userList.errorMessage = payload.error;
    },
  },
  actions: {
    getUsers: async function ({ commit }) {
      try {
        commit("getUsersRequest");
        let dataURL = "https://jsonplaceholder.typicode.com/users";
        let response = await axios.get(dataURL);
        commit("getUsersSuccess", { users: response.data });
      } catch (error) {
        commit("getUsersFailure", { error: error });
      }
    },
  },
};
