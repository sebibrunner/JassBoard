import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Player extends Vue {
  // `message` will not be reactive value
  name = undefined
  picture = undefined
}