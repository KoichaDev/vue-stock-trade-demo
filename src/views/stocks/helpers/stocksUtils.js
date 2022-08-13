
export const calculateTotalStockPrices = (object = {}) => {
    return Object.values(object).reduce((total, price) => {
        return total + price;
    }, 0);
};

export const enteredStockBeenBought = (object = {}) => {
    return Object.values(object).some((value) => value !== 0);
}
