import { generateStockPrice } from '../helpers/stocksUtils'

export const STOCK_DATA = {
    stockPrice: {
        bmw: generateStockPrice(),
        google: generateStockPrice(),
        apple: generateStockPrice(),
        twitter: generateStockPrice(),
    },
}