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
    <h4>ID: {{ getCurrentGame.id }}</h4>
    <ui-grid class="demo-grid">
      <ui-grid-cell class="demo-cell" columns="1">
        Type
      </ui-grid-cell>
      <ui-grid-cell class="demo-cell" columns="1">
        Multiplier
      </ui-grid-cell>
      <ui-grid-cell class="demo-cell" columns="1">
        Team 1
      </ui-grid-cell>
      <ui-grid-cell class="demo-cell" columns="1">
        Team 2
      </ui-grid-cell>
      <ui-grid-cell class="demo-cell" columns="1">
        Diff
      </ui-grid-cell>
    </ui-grid>
    <ui-grid>
      <ui-grid-cell v-for="position in getCurrentGame.positions">
        {{ position.name }}
      </ui-grid-cell>
    </ui-grid>
        
        <div class="grid grid-cols-5">
          <div>Type</div>
          <div>Multiplier</div>
          <div>Team 1</div>
          <div>Team 2</div>
          <div>Diff</div>
        </div>
        <div v-for="position in getCurrentGame.positions" class="grid grid-cols-5">
          <div>{{ position.name }}</div>
          <div>{{ position.multiplier }}</div>
          <div><ui-textfield v-model="position.resultLeft" placeholder="Result Team 1" type="number"></ui-textfield></div>
          <div><ui-textfield v-model="position.resultRight" placeholder="Result Team 2" type="number"></ui-textfield></div>
          <div>{{ position.resultLeft - position.resultRight }}</div>
        </div>
        <button @click="saveGame(getCurrentGame)">Save this Game!</button>
    
</template>