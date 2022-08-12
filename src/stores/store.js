import Vue from 'vue';
import Vuex from 'vuex';

import Funds from './modules/funds/funds';

Vue.use(Vuex);

console.log(Funds.getters)

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // Strict mode helps with preventing accidental mutations of the Vuex store
    modules: {
        funds: Funds,
    }
});
