import Vue from 'vue'
import App from './App.vue'
import router from './router'

import loadPlugins from './helpers/loadPlugins';
import { Plugin as VueFragment } from 'vue-fragment'

import { store } from './stores/store';

import './main.scss';

Vue.config.productionTip = false

loadPlugins([VueFragment])

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
