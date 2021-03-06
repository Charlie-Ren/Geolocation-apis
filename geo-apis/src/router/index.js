import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import geo from '../views/geolocation.vue'
import geocode from '../views/geocode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/geo',
    name: 'geo',
    component: geo
  },
  {
    path: '/geocode',
    name: 'geocode',
    component: geocode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
