import Vue from 'vue'
import Component from 'vue-class-component'
import Player from './player'

@Component
export default class Team extends Vue {
  players: Array<Player> = [];
}