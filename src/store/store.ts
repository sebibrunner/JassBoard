import { defineStore } from 'pinia'
import { Game } from '@/types/game';
import { v4 as uuidv4 } from "uuid";
import { useStorage } from '@vueuse/core'

export const gameStore = defineStore('game-store', {
    state: () => {
        return {
            currentGame: useStorage('currentGame', {} as Game),
            games: useStorage('games', [] as Array<Game>)
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
            this.currentGame.positions = [
                {name: "Rose", multiplier: 1},
                {name: "Eischle", multiplier: 2},
                {name: "Schelle", multiplier: 3},
                {name: "Schilte", multiplier: 4},
            ]
        },
        saveGame(game: Game) {
            this.games.push(game);
        },
        deleteGame(game: Game) {
            const index = this.games.indexOf(game);
            this.games.splice(index, 1);
        },
        loadGame(game: Game) {
            const index = this.games.indexOf(game);
            this.currentGame = this.games[index];
        }
    }
})