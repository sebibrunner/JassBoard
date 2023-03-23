<script setup lang="ts">
import {gameStore} from '@/store/store'
</script>

<script lang="ts">
import { mapActions, mapState } from 'pinia'

export default {
  computed: {
    ...mapState(gameStore, {getGames: 'games'}),
    
  },

  methods: {
    ...mapActions(gameStore, ['createGame'])
  }
};
</script>

<template>
    <button @click="createGame()">New Game!</button>
    
</template>