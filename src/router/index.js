import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarketPlace from '../views/MarketPlaceView.vue'
import Login from '../views/LoginView.vue'
import PetHealth from '../views/PetHealthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: MarketPlace
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pethealth',
      name: 'pethealth',
      component: PetHealth
    },
  ]
})

export default router
