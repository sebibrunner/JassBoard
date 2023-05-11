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
        },
        getSumLeft(state) {
            const values = Object.values(state.currentGame.positions);
            const sumLeft = values.reduce((accumulator, value) => {
                return accumulator + value.multiplier * value.resultLeft;
            }, 0);
            return sumLeft;
        },
        getSumRight(state) {
            const values = Object.values(state.currentGame.positions);
            const sumLeft = values.reduce((accumulator, value) => {
                return accumulator + value.multiplier * value.resultRight;
            }, 0);
            return sumLeft;
        },
        getGameTotal(state) {
            const values = Object.values(state.currentGame.positions);
            const sumLeft = values.reduce((accumulator, value) => {
                return accumulator + value.multiplier * value.resultLeft;
            }, 0);
            const sumRight = values.reduce((accumulator, value) => {
                return accumulator + value.multiplier * value.resultRight;
            }, 0);
            return sumLeft - sumRight;
        }
    },

    actions: {
        createGame() {
            this.currentGame.id = uuidv4();
            this.currentGame.positions = [
                { name: "Rose", multiplier: 1, resultLeft: 0, resultRight: 0 },
                { name: "Eichle", multiplier: 2, resultLeft: 0, resultRight: 0 },
                { name: "Schelle", multiplier: 3, resultLeft: 0, resultRight: 0 },
                { name: "Schilte", multiplier: 4, resultLeft: 0, resultRight: 0 },
                { name: "Obeabe", multiplier: 5, resultLeft: 0, resultRight: 0 },
                { name: "Uneufe", multiplier: 6, resultLeft: 0, resultRight: 0 },
                { name: "3x3", multiplier: 7, resultLeft: 0, resultRight: 0 },
                { name: "Slalom", multiplier: 8, resultLeft: 0, resultRight: 0 },
                { name: "5-4", multiplier: 9, resultLeft: 0, resultRight: 0 },
                { name: "Misere", multiplier: 10, resultLeft: 0, resultRight: 0 },
                { name: "Wunsch", multiplier: 11, resultLeft: 0, resultRight: 0 }
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