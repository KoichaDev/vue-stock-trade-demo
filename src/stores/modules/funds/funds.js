import * as types from './funds.types';

const state = {
    funds: 10000,
};

const getters = {
    [types.CURRENT_FUND]: (state) => state.funds,
};

const mutations = {
    [types.BUY_STOCK]: (state, payload) => {
        state.funds -= payload;
    },
};

const actions = {
    [types.BUY_STOCK]: (context, payload) => {
        context.commit(types.BUY_STOCK, payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};
