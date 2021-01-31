import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameModes: {},
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    allGameModes: state => {
        return state.gameModes
    },
  },
});
