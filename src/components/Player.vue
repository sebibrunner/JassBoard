<template>
  <div class="player">
    <h2>Player</h2>
    <div>Name: {{ this.player.name }}</div>
    <figure class="figure">
      <img :src="player.picture" class="img-responsive" />
    </figure>
    <v-btn @click="removeGameMode">Remove player</v-btn>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    player: {}
  },
  methods: {
    removePlayer() {
      this.$emit("removePlayer", this.player);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
