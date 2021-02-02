<template>
  <div class="game">
    <h1>Game</h1>
    <h2>Select Players</h2>
    <div v-if="this.emptyActualGame">
      <v-row>
        <v-col>
          <div>Team 1</div>
      <PlayerSelection data-app :allPlayers="this.allPlayers" @saveTeam="updateTeam1" />
        </v-col>
        <v-col>
          <div>Team 2</div>
      <PlayerSelection data-app :allPlayers="this.allPlayers" @saveTeam="updateTeam2" />
        </v-col>
      </v-row>
      <h2>Select gameModes</h2>
      <v-select :items="allGameModes" v-model="currentGame.gameModes" ></v-select>
      <v-btn @click="startNewGame">Start new Game</v-btn>
    </div>
    <div v-else>
      <v-container class="grey lighten-5">
        <!-- Header -->
        <v-row>
          <v-col><v-card>Mutiplier</v-card></v-col>
          <v-col><v-card>Name</v-card></v-col>
          <v-col><v-card>Team 1</v-card></v-col>
          <v-col><v-card>Team 2</v-card></v-col>
          <v-col><v-card>Diff</v-card></v-col>
        </v-row>
        <v-row
          v-for="(gameMode, index) in this.currentGame.gameModes"
          :key="index"
        >
          <v-col>
            <v-card-text>{{ gameMode.multiplier }}</v-card-text>
          </v-col>
          <v-col>
            <v-card-text>{{ gameMode.name }}</v-card-text>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              hide-details
              outlined
              solo
              dense
              v-model.number="gameMode.resTeam1"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              hide-details
              outlined
              solo
              dense
              v-model.number="gameMode.resTeam2"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-card-text>{{
              gameMode.resTeam1 - gameMode.resTeam2
            }}</v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col>Sum: {{ this.totalCalc }}</v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import isEmpty from "lodash/isEmpty";
import sumBy from "lodash/sumBy";
import PlayerSelection from "@/components/PlayerSelection"
export default {
  name: "Game",
  components: {
    PlayerSelection
  },
  created() {
    if(isEmpty(this.actualGame)){
      this.$store.commit('startGame', this.newPlayer);
      this.currentGame = this.actualGame;
    }
  },
  data: () => {
    return {
      currentGame: {},
    };
  },
  computed: {
    allGameModes() {
      return this.$store.getters.allGameModes;
    },
    emptyActualGame() {
      return isEmpty(this.currentGame);
    },
    totalTeam1() {
      return sumBy(this.currentGame.gameModes, "resTeam1");
    },
    totalTeam2() {
      return sumBy(this.currentGame.gameModes, "resTeam2");
    },
    totalCalc() {
      this.currentGame.gameModes.forEach(element => {
        element.multipliedAbs =
          (element.resTeam1 - element.resTeam2) * element.multiplier;
      });
      let total = 0;
      this.currentGame.gameModes.forEach(element => {
        total += element.multipliedAbs;
      });
      return total;
    },
    actualGame() {
      return this.$store.getters.actualGame;
    },
    allPlayers() {
      return this.$store.getters.allPlayers;
    },
  },
  methods: {
    startNewGame() {
      this.$store.commit('startGame', this.newPlayer);
    },
    updateTeam1(selectedPlayers){
      this.$store.commit('updateTeam1', selectedPlayers);
    },
    updateTeam2(selectedPlayers){
      this.$store.commit('updateTeam2', selectedPlayers);
    },
  }
};
</script>
