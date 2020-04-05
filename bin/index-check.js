const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Will get usefull information')
    .option('--coin <type>', 'Select a currancy you want to display. NOTE: Will get current price for all currencies available.', '')
    .option('--cur <currency>', 'Change the currency. default(USD)', 'USD')
    .action((cmd) => check.current(cmd))


program
    .command('interval')
    .description('Will price changed in a interval')
    .option('--coin <type>', 'Add spesific coin types in CSV format. Default(BTC,ETH,XPR)', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .option('--days <days>', 'Spesific day(s) you want. Default(1 day)', '1')
    .action((cmd) => check.interval(cmd))
    


program.parse(process.argv);