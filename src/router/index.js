import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingView from "../views/BookingView.vue"
import AboutView from "../views/AboutView.vue"
import MakePayment from "../components/MakePayment.vue"
import CartVue from "../components/CartVue.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: '/Booking',
    name: 'booking',
    component: BookingView
  },
  {
    path: '/makePayment',
    name: 'payment',
    component: MakePayment
  },
  {
    path: '/cart',
    name: 'cartView',
    component: CartVue
  }
]

const router = new VueRouter({
  routes
})

export default router
