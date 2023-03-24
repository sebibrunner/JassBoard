<script setup lang="ts">
import {gameStore} from '@/store/store'
</script>

<script lang="ts">
import { mapActions, mapState } from 'pinia'

export default {
  computed: {
    ...mapState(gameStore, {getCurrentGame: 'currentGame'}),
    
  },

  methods: {
    ...mapActions(gameStore, ['saveGame', 'createGame'])
  }
};
</script>

<template>
    <button @click="createGame()">New Game!</button>

    <h1>Game</h1>
        ID: {{ getCurrentGame.id }}
        <div v-for="position in getCurrentGame.positions" class="grid grid-cols-7">
          <div>Name: {{ position.name }}</div>
          <div>Multiplier: {{ position.multiplier }}</div>
          <div><label>ResultLeft: </label><input v-model="position.resultLeft"></div>
          <div>ResultRight: <input v-model="position.resultRight"></div>
          <div>Difference: {{ position.resultLeft - position.resultRight }}</div>
        </div>
        <button @click="saveGame(getCurrentGame)">Save this Game!</button>
    
</template>