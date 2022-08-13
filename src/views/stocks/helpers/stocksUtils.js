export const calculatePurchasedStocks = (objA = {}, objB = {}) => {
    return Object.keys(objA).reduce((acc, key) => {
        acc[key] = objA[key] * objB[key];
        return acc;
    }, {});
}

export const sumTotalStockPrices = (object = {}) => {
    return Object.values(object).reduce((total, price) => {
        return total + price;
    }, 0);
};

export const enteredStockBeenBought = (object = {}) => {
    return Object.values(object).some((value) => value !== 0);
}
