import Vue from "vue";
import Vuex from "vuex";
import GameMode from "@/types/GameMode.ts";
import PlayerModule from "@/store/modules/player";

Vue.use(Vuex);

const initGameModes: Array<GameMode> = new Array<GameMode>();
const rose = { name: "Rose", multiplier: 1 };
const eichle = { name: "Eichle", multiplier: 2 };
const schelle = { name: "Schelle", multiplier: 3 };
const schilte = { name: "Schilte", multiplier: 4 };
const obe = { name: "Obeabe", multiplier: 5 };
const une = { name: "Uneufe", multiplier: 6 };
const slalom = { name: "Slalom", multiplier: 7 };
const fivefour = { name: "Füf Vier", multiplier: 8 };
const threethree = { name: "Drü mol Drü", multiplier: 9 };
const misere = { name: "Misère", multiplier: 10 };
const wish = { name: "Wunsch", multiplier: 11 };
initGameModes.push(
  rose,
  eichle,
  schelle,
  schilte,  
  obe,
  une,
  slalom,  
  fivefour,
  threethree,
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
  modules: {
    PlayerModule,
  },
  getters: {
    allGameModes: state => {
      return state.gameModes;
    }
  }
});
