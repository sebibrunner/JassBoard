import Vue from "vue";
import Vuex from "vuex";
import PlayerModule from "@/store/modules/player";
import GameModeModule from "@/store/modules/gameMode";
import TeamModule from "@/store/modules/team";
import GameModule from "@/store/modules/game";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {},
  modules: {
    PlayerModule,
    GameModeModule,
    TeamModule,
    GameModule,
  },
  getters: {

  }
});
