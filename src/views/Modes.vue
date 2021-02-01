<template>
  <div class="modes">
    <h1>Modes</h1>
    <GameMode
      v-for="(gameMode, index) in allGameModes"
      :key="index"
      :gameMode="gameMode"
      @removeGameMode="removeGameMode"
    ></GameMode>
    <GameModeDialog
      data-app
      v-if="isGameModeDialogOpen"
      @close="toggleGameModeDialog"
      @save="addGameMode"
    ></GameModeDialog>
    <v-dialog></v-dialog>
    <v-btn
      v-if="!this.isGameModeDialogOpen"
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="toggleGameModeDialog"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import GameMode from "@/components/GameMode.vue";
import GameModeDialog from "@/components/GameModeDialog.vue";
export default {
  name: "Modes",
  components: {
    GameMode,
    GameModeDialog
  },
  data: () => {
    return {
      isGameModeDialogOpen: false
    };
  },
  methods: {
    toggleGameModeDialog() {
      this.isGameModeDialogOpen = !this.isGameModeDialogOpen;
    },
    addGameMode(gameMode) {
      this.$store.commit("addGameMode", gameMode);
      this.toggleGameModeDialog();
    },
    removeGameMode(gameMode) {
      this.$store.commit("removeGameMode", gameMode);
    }
  },
  computed: {
    allGameModes() {
      return this.$store.getters.allGameModes;
    }
  }
};
</script>
<style lang="less">
.gameModeDialog {
}
</style>
