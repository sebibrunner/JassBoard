import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Overview,
    },
    {
      path: '/game',
      component: () => import('@/views/CurrentGame.vue'),
    },
    {
      path: '/history',
      component: () => import('@/views/History.vue'),
    },
  ],
})
