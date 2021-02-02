<template>

  <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-img
      :src="player.picture"
      height="200px"
    ></v-img>

    <v-card-title>
      {{this.player.name}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        icon
        @click="removePlayer"
      >
        <v-icon>{{ 'mdi-account-remove' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
