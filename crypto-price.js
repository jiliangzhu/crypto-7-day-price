const axios = require('axios');

async function getAveragePrice(cryptoId, days) {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`;
        const response = await axios.get(url);
        const prices = response.data.prices;
        const sum = prices.reduce((total, current) => total + current[1], 0);
        const average = sum / prices.length;
        return average;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = {
    getAveragePrice
};
