import { createApp } from 'vue'
import Game from './Game.vue'
import VueGtag from 'vue-gtag'
import './game.css'

// resize for scaling the board size
window.addEventListener('resize', onResize)
// set size on startup
onResize()

function onResize() {
  // get actual vh on mobile
  document.body.style.setProperty('--vh', window.innerHeight + 'px')
}

createApp(Game).use(VueGtag, {
  config: { id: 303661180 }
}).mount('#app')
