import Vue from 'vue'
import VueRouter from 'vue-router'

import { HOME_ROUTE } from '@/router/HomeRoute'

Vue.use(VueRouter)

const routes = [
  HOME_ROUTE
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
