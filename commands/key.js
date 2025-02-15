const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const {isRequired} = require('../utils/validation');

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([{
            type: 'input',
            name: 'key',
            message: 'Enter API Key'.green,
            validate: isRequired
        }]);

        const key = keyManager.setKey(input.key);

        if(key) {
            console.log('API Key set'.yellow)
        }

    },

    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API Key:', key.yellow);
        } catch (err) {
            console.error(err.message.red);
        }
    },

    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('API Key is removed.')
            return;
        } catch (error) {
            console.error(err.message.red);
        }
    }
}

module.exports = key;