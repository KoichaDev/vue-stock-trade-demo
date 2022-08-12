import Vue from 'vue'
import VueRouter from 'vue-router'

import { HOME_ROUTE } from '@/router/routes/HomeRoute'
import { PORTFOLIO_ROUTE } from '@/router/routes/PortfolioRoute';
import { STOCK_ROUTE } from '@/router/routes/StockRoute'


Vue.use(VueRouter)

const routes = [
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
  STOCK_ROUTE
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
