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
        <div v-for="position in getCurrentGame.positions">
        Name: {{ position.name }}, Multiplier: {{ position.multiplier }}, ResultLeft: {{ position.resultLeft }}, ResultRight: {{ position.resultRight }}
        </div>
        <button @click="saveGame(getCurrentGame)">Save this Game!</button>
    
</template>