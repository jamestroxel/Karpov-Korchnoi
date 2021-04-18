import { createRouter, createWebHashHistory } from 'vue-router'
import playGame from '../views/playGame.vue'
import KvK from '../views/KvK.vue'
import Prologue from '../views/Prologue.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/prologue'
  },
  {
    path: '/play',
    name: 'Play',
    component: playGame,
    // props: route => ({ speciesFilter: route.query.species })
  },
  {
    path: '/kvk',
    name: 'KvK',
    component: KvK
  },
  {
    path: '/prologue',
    name: 'Prologue',
    component: Prologue
  },
  {
    path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#moved-the-base-option
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
