<template>
  <div class="modes">
    <h1>Modes</h1>
    <GameMode v-for="gameMode in allGameModes" :key="gameMode"></GameMode>
  </div>
</template>

<script>
import GameMode from "@/components/GameMode.vue";
export default {
    name: "Modes",
    components: {
        GameMode,
    },
    computed: {
        allGameModes () {
            return this.$store.getters.allGameModes
        }
    }
}
</script>