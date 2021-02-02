import { Module } from "vuex";
import Team from "@/classes/team";

const teamModule: Module<any, any> = {
  state: {
    teams: Array<Team>()
  },

  getters: {
      allTeams(state: any){
          return state.teams;
      },
  },

  mutations: {
      addTeam(state: any, item: Team){
          state.teams.push(item);
      },
      removeTeam(state: any, item: Team){
        const index = state.teams.indexOf(item);
        state.teams.splice(index, 1);
      },
  },

  actions: {

  }
};

export default teamModule;