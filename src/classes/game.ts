import GameMode from '@/types/GameMode'
import Vue from 'vue'
import Component from 'vue-class-component'
import Team from './team'

@Component
export default class Game extends Vue {
  teams: Array<Team> = []
  gameModes: Array<GameMode> = []
}