import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '@/components/bbs/list'
import Vuetify from '@/components/ui/vuetify'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crud/basic',
    name: 'List',
    component: List
  },
  {
    path: '/ui/vuetify',
    name: 'Vuetify',
    component: Vuetify
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
