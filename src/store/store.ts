import { defineStore } from 'pinia'
import { Game } from '@/types/game';
import { v4 as uuidv4 } from "uuid";

export const gameStore = defineStore('game-store', {
    state: () => {
        return {
            currentGame: {} as Game,
            games: [] as Array<Game>
        }
    },

    getters: {
        getGames(state) {
            return state.games;
        },
        getCurrentGame(state) {
            return state.currentGame;
        }
    },

    actions: {
        createGame() {
            this.currentGame.id = uuidv4();
        },
    }
})