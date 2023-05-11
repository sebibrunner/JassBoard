<script setup lang="ts">
import { gameStore } from '@/store/store'
</script>

<script lang="ts">
import { mapActions, mapState } from 'pinia'

export default {
  computed: {
    ...mapState(gameStore, { getCurrentGame: 'currentGame', gameTotal: 'getGameTotal' }),
  },
  methods: {
    ...mapActions(gameStore, ['saveGame', 'createGame'])
  }
};
</script>

<template>
  <div class="m-4">
    <div class="flex justify-end">
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
        @click="createGame()">New Game</button>

    </div>

    <h1 class="flex justify-center">Game</h1>
    <div class="flex justify-center">ID: {{ getCurrentGame.id }}</div>
    <div class="grid grid-flow-row grid-cols-5 auto-rows-auto gap-4 text-center">
      <!-- Header -->
      <div>Name</div>
      <div>Multiplier</div>
      <div>ResultLeft</div>
      <div>ResultRight</div>
      <div>Difference</div>

      <!-- Main -->
    </div>
    <div v-for="position in getCurrentGame.positions"
      class="grid grid-flow-row grid-cols-5 auto-rows-auto gap-4 text-center">
      <div>{{ position.name }}</div>
      <div>{{ position.multiplier }}</div>
      <div><input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-emerald-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
          v-model.number="position.resultLeft"></div>
      <div><input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-pink-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
          v-model.number="position.resultRight"></div>
      <div
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        :class="{ 'bg-emerald-300': (position.resultLeft - position.resultRight) > 0, 'bg-pink-300': (position.resultLeft - position.resultRight) < 0 }">
        {{ (position.resultLeft - position.resultRight) * position.multiplier }}</div>
    </div>

    <!-- Total -->
    <div class="grid grid-flow-row grid-cols-5 auto-rows-auto gap-4 text-center">
      Total:
      <div class="col-end-6" :class="{ 'bg-emerald-300': gameTotal > 0, 'bg-pink-300': gameTotal < 0 }">{{ gameTotal }}
      </div>
    </div>
    <div class="flex justify-center">
      <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
      @click="saveGame(getCurrentGame)">Save</button>
  </div>
</div></template>
