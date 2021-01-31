<template>
  <div class="gamemode">
    <h2>GameMode</h2>
    <div>Name: {{this.gameMode.name}}</div>
    <div>Multiplier: {{this.gameMode.multiplier}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "GameMode",
  props: {
      gameMode: {},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
