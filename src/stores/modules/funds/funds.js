import * as types from './funds.types';

const state = {
    funds: 10000,
};

const getters = {
    [types.CURRENT_FUND]: (state) => state.funds,
};

const mutations = {
    decrease: (state, payload) => {
        state.funds -= payload;
    },
};

export default {
    state,
    getters,
    mutations,
};
