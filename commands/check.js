const KeyManager = require('../lib/KeyManager');
const API = require('../lib/API');

const check = {
    async current(cmd){
        try {
            keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new API(key);
            const priceData = await api.getPriceCurrent(cmd.coin, cmd.cur);
            console.log(priceData)
        } catch (err) {
            console.error(err.message.red);
        }
    },

    async interval(cmd){
        try {
            keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new API(key);
            const priceData = await api.getPricedays(cmd.coin, cmd.cur, cmd.days);
            console.log(priceData)
        } catch (err) {
            console.error(err.message.red);
        }
    }
}


module.exports = check;