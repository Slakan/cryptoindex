const axios = require('axios');
const colors = require('colors');
// const APIHandler = require('../lib/API-handler');


class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPriceCurrent(coin, cur) {
        try {
            //formatter for nice currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: cur,
            });           

            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coin}&convert=${cur}`);

            let output = '';

            res.data.forEach(type => {
                output += `${type.symbol} (${type.name.yellow}) | Price: ${formatter.format(type.price).green} | Rank: ${type.rank.red}\n`;
            });

            return output;

        } catch (err) {
            handleAPIError(err);
        }
    }

    async getPricedays(coin, cur, days) {
        try {
            //formatter for nice currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: cur,
            });
            
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coin}&interval=${days}d&convert=${cur}`);

            let interval = days + "d"
            let output = '';

            res.data.forEach(type => {
                const coinType = `Coin: ${type.symbol}(${type.name.yellow})`
                const price_change = " | Price changed in " + interval.red + ": " + formatter.format(type[interval]['price_change']).green
                output += coinType + price_change + "\n";
            });
            return output;

        } catch (err) {

            handleAPIError(err);
        }
    }

}



function handleAPIError(err) {
    if (err.response.status === 401) {
      throw new Error('Your API key is invalid');
    } else if (err.response.status === 404) {
      throw new Error('Your API is not responding');
    } else {
      throw new Error('API is not working correctly.');
    }
  }

module.exports = API;