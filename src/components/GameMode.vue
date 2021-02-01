<template>
  <div class="gamemode">
    <h2>GameMode</h2>
    <div>Name: {{ this.gameMode.name }}</div>
    <div>Multiplier: {{ this.gameMode.multiplier }}</div>
    <v-btn @click="removeGameMode">Remove gamemode</v-btn>
  </div>
</template>

<script lang="ts">
import GameMode from "@/types/GameMode"
export default {
  name: "GameMode",
  props: {
    gameMode: {}
  },
  methods: {
    removeGameMode(){
      this.$emit("removeGameMode", this.gameMode);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
