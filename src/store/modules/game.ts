import { Module } from "vuex";
import Game from "@/classes/game";
import Team from "@/classes/team";

const gameModule: Module<any, any> = {
  state: {
    actualGame: Game,
    games: Array<Game>(),
  },

  getters: {
      allGames(state: any){
          return state.games;
      },
      actualGame(state: any){
        return state.actualGame;
      },
  },

  mutations: {
      addPlayer(state: any, item: Game){
          state.games.push(item);
      },
      removePlayer(state: any, item: Game){
        const index = state.games.indexOf(item);
        state.games.splice(index, 1);
      },
      startGame(state: any, item: Game){
          state.actualGame = item;
      },
      endGame(state: any){
          state.games.push(state.actualGame);
          state.actualgame = Game;
      },
      updateTeam1(state: any, item: Team){
        state.actualGame.teams[0] = item;
      },
      updateTeam2(state: any, item: Team){
        state.actualGame.teams[1] = item;
      },
  },

  actions: {

  }
};

export default gameModule;