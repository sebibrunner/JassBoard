<script setup lang="ts">
import { gameStore } from '@/store/store';

</script>

<script lang="ts">
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(gameStore, { getGames: 'games', sumLeft: 'getSumLeft', sumRight: 'getSumRight' }),
  },
  methods: {
    ...mapActions(gameStore, ['loadGame', 'deleteGame'])
  }
}
</script>

<template>
  <h1>History</h1>
  <div class="m-4">
    <div class="grid grid-flow-row grid-cols-1 auto-rows-auto gap-4 text-center">
      <div v-for="game in getGames" class="">
        <h2>ID: {{ game.id }}</h2>
        Result:
        Left: {{ sumLeft }}, right: {{ sumRight }}
        <div>
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
            @click="loadGame(game)">Load this Game!</button>
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow m-4"
            @click="deleteGame(game)">Delete this Game!</button>
        </div>
      </div>
  </div>
</div></template>