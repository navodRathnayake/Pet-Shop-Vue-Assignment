import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarketPlace from '../views/MarketPlaceView.vue'
import Login from '../views/LoginView.vue'
import PetHealth from '../views/PetHealthView.vue'
import Register from '../views/RegisterView.vue'
import Cart from '../views/CartViewPage.vue'
import About from '../components/AboutUSComponent.vue'
import Contact from '../components/ContactUSComponent.vue'
import Rescue from '../views/RescueView.vue'
import Voucher from '../views/VoucherView.vue'

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
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/rescue',
      name: 'rescue',
      component: Rescue
    },
    {
      path: '/voucher',
      name: 'voucher',
      component: Voucher
    },
  ]
})

export default router
