export const STOCK_ROUTE = {
    path: '/stocks',
    name: 'stocks-view',
    component: () => import('@/views/stocks/AddStock.vue')
}