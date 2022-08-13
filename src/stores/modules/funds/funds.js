import * as types from './funds.types';

const state = {
    funds: 10000,
    stockPortfolio: [],
};

const getters = {
    [types.CURRENT_FUND]: (state) => state.funds,
    [types.CURRENT_STOCK_COLLECTION]: (state) => state.stockPortfolio,
};

const mutations = {
    [types.BUY_STOCK]: (state, payload) => {
        state.funds -= payload;
    },
    [types.ADD_STOCK_COLLECTION]: (state, payload) => {
        state.stockPortfolio = [payload];
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
