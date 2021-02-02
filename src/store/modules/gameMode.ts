import { Module } from "vuex";
import GameMode from "@/types/GameMode";
import clonedeep from "lodash/cloneDeep"

const initGameModes: Array<GameMode> = [
    { name: "Rose", multiplier: 1 },
    { name: "Eichle", multiplier: 2 },
    { name: "Schelle", multiplier: 3 },
    { name: "Schilte", multiplier: 4 },
    { name: "Obeabe", multiplier: 5 },
    { name: "Uneufe", multiplier: 6 },
    { name: "Slalom", multiplier: 7 },
    { name: "Füf Vier", multiplier: 8 },
    { name: "Drü mol Drü", multiplier: 9 },
    { name: "Misère", multiplier: 10 },
    { name: "Wunsch", multiplier: 11 }
  ];

const gameModeModule: Module<any, any> = {
  state: {
    gameModes: clonedeep(initGameModes)
  },

  getters: {
      allGameModes(state: any){
          return state.gameModes;
      },
  },

  mutations: {
      addGameMode(state: any, item: GameMode){
          state.gameModes.push(item);
      },
      removeGameMode(state: any, item: GameMode){
        const index = state.gameModes.indexOf(item);
        state.gameModes.splice(index, 1);
      },
  },
};

export default gameModeModule;