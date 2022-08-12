export const generateStockPrice = () => {
    return (Math.random() * (100 - 1) + 1).toFixed(2);
};

export const calculateTotalStockPrices = (object = {}) => {
    return Object.values(object).reduce((total, price) => {
        return total + price;
    }, 0);
};
