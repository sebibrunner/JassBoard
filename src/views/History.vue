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
    <ui-list>
      <ui-item v-for="game in getGames" :key="game">
        <ui-item-text-content>
          ID: {{ game.id }}
        </ui-item-text-content>
        <ui-item-last-content>
          <ui-icon @click="loadGame(game)">file_upload</ui-icon>
          <ui-icon @click="deleteGame(game)">clear</ui-icon>
        </ui-item-last-content>
      </ui-item>
    </ui-list>

</template>