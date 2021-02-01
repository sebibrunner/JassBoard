import Vue from "vue";
import Vuex from "vuex";
import GameMode from "@/types/GameMode.ts";

Vue.use(Vuex);

const initGameModes: Array<GameMode> = new Array<GameMode>();
const rose = { name: "Rose", multiplier: 1 };
const eichle = { name: "Eichle", multiplier: 2 };
const schelle = { name: "Schelle", multiplier: 3 };
const schilte = { name: "Schilte", multiplier: 4 };
const une = { name: "Uneufe", multiplier: 5 };
const obe = { name: "Obeabe", multiplier: 6 };
const slalom = { name: "Slalom", multiplier: 7 };
const threethree = { name: "Drü mol Drü", multiplier: 8 };
const fivefour = { name: "Füf Vier", multiplier: 9 };
const misere = { name: "Misère", multiplier: 10 };
const wish = { name: "Wunsch", multiplier: 11 };
initGameModes.push(
  rose,
  eichle,
  schelle,
  schilte,
  une,
  obe,
  slalom,
  threethree,
  fivefour,
  misere,
  wish
);

export default new Vuex.Store({
  state: {
    gameModes: initGameModes
  },
  mutations: {
    addGameMode(state, gameMode: GameMode) {
      state.gameModes.push(gameMode);
    },
    removeGameMode(state, gameMode: GameMode) {
      console.log(gameMode);
      const index = state.gameModes.indexOf(gameMode);
      state.gameModes.splice(index, 1);
    }
  },
  actions: {},
  modules: {},
  getters: {
    allGameModes: state => {
      return state.gameModes;
    }
  }
});
