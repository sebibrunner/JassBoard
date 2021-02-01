import Vue from "vue";
import Vuex from "vuex";
import GameMode from "@/types/GameMode.ts"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameModes: Array<GameMode>()
  },
  mutations: {
    addGameMode(state, gameMode: GameMode){
      state.gameModes.push(gameMode)
    },
  },
  actions: {},
  modules: {},
  getters: {
    allGameModes: state => {
      return state.gameModes;
    }
  }
});
