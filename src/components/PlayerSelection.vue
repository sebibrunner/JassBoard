<template>
<v-container fluid>
    <v-row align="center">
    <v-col
      >
        <v-select
          v-model="selectedPlayers"
          :items="allPlayers"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="Select the Team 1 Players"
          persistent-hint
          item-text="name"
          item-value="name"
          @change="saveTeam"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
                <v-btn @click="saveTeam">Save Team</v-btn>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "PlayerSelection",
  data: () => {
    return {
        selectedPlayers: null
    }
    },
    props: {
        allPlayers: {},
    },
    methods: {
        saveTeam(){
            this.$emit("saveTeam", this.selectedPlayers)
        },
    },
}
</script>