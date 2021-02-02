import { Module } from "vuex";
import Player from "@/classes/player";

const playerModule: Module<any, any> = {
  state: {
    newPlayer: Player,
    players: Array<Player>(),
  },

  getters: {
      allPlayers(state: any){
          return state.players;
      },
  },

  mutations: {
      addPlayer(state: any, item: Player){
          state.players.push(item);
      },
      removePlayer(state: any, item: Player){
        const index = state.players.indexOf(item);
        state.players.splice(index, 1);
      },
  },

  actions: {

  }
};

export default playerModule;