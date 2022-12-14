import * as types from './funds.types';

const state = {
    funds: 10000,
    quantityStocks: {},
};

const getters = {
    [types.CURRENT_FUND]: (state) => state.funds.toFixed(2),
    [types.CURRENT_STOCK_COLLECTION]: (state) => state.quantityStocks,
};

const mutations = {
    [types.BUY_STOCK]: (state, payload) => {
        state.funds -= payload;
    },
    [types.ADD_STOCK_COLLECTION]: (state, payload) => {
        state.quantityStocks = payload;
    }
};

const actions = {
    [types.BUY_STOCK]: (context, payload) => {
        context.commit(types.BUY_STOCK, payload);
    },
    [types.ADD_STOCK_COLLECTION]: (context, payload) => {
        context.commit(types.ADD_STOCK_COLLECTION, payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};
