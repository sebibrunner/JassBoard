<script setup lang="ts">
import { gameStore } from '@/store/store';

</script>

<script lang="ts">
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(gameStore, {getGames: 'games'}),
    
  },  
  methods: {
    ...mapActions(gameStore, ['loadGame', 'deleteGame'])
  }
}
</script>

<template>
    <h1>History</h1>
    <div v-for="game in getGames">
        ID: {{ game.id }}
        <div v-for="position in game.positions">
        Name: {{ position.name }}, Multiplier: {{ position.multiplier }}, ResultLeft: {{ position.resultLeft }}, ResultRight: {{ position.resultRight }}
        </div>
        <button @click="loadGame(game)">Load this Game!</button>
        <button @click="deleteGame(game)">Delete this Game!</button>
    </div>
</template>