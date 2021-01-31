<template>
  <v-row justify="center">
      <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title>
          <span class="headline">GameMode</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="gameMode.name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="gameMode.multiplier"
                  label="Multiplier"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('save', gameMode)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
  </v-row>
</template>

<script>
import GameMode from "@/types/GameMode";
export default {
    data(){
        return {
            dialog: true,
            gameMode: GameMode,
        }
    }
}
</script>