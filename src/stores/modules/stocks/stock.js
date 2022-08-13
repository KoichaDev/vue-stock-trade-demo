import { generateStockPrice } from './stockUtils'
import * as types from './stocksTypes';

const state = {
    stockPrice: {
        bmw: generateStockPrice(),
        google: generateStockPrice(),
        apple: generateStockPrice(),
        twitter: generateStockPrice(),
    }
};

const getters = {
    [types.STOCKS_PRICES]: (state) => state.stockPrice,
};

const mutations = {
    [types.END_DAY_STOCKS_PRICES]: (state) => {
        state.stockPrice = {
            bmw: generateStockPrice(),
            google: generateStockPrice(),
            apple: generateStockPrice(),
            twitter: generateStockPrice(),
        };
    }
};

const actions = {
    [types.END_DAY_STOCKS_PRICES]: (context) => {
        context.commit(types.END_DAY_STOCKS_PRICES);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
};
