# cryptoindex
Command line interace (CLI) written in node.js to check cryptocurrency.

Thanks to Traversy Media for the tutorial: https://www.youtube.com/watch?v=-6OAHsde15E 

## How do it use it?
```
npm install

npm link
```

## Commands

#### cryptoindex
```
Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  key             Manage the API Key -> https://nomics.com
  check           Get information about coin
  help [command]  display help for command
```


#### cryptoindex key
```
Options:
  -h, --help      display help for command

Commands:
  set             Set the API Key -> https://nomics.com
  show            Show API Key
  remove          Remove API Key
  help [command]  display help for command
```
#### cryptoindex check
```
Options:
  -h, --help          display help for command

Commands:
  price [options]     Will get usefull information
  interval [options]  Will price changed in a interval
  help [command]      display help for command
```

#### cryptoindex check price -h
```
Will get usefull information

Options:
  --coin <type>     Select a currancy you want to display. NOTE: Will get current price for all currencies available. (default: "")
  --cur <currency>  Change the currency. default(USD) (default: "USD")
  -h, --help        display help for command
```

#### cryptoindex check interval -h
```
Will price changed in a interval

Options:
  --coin <type>     Add spesific coin types in CSV format. Default(BTC,ETH,XPR) (default: "BTC,ETH,XRP")
  --cur <currency>  Change the currency (default: "USD")
  --days <days>     Spesific day(s) you want 1d,7d,30,d,365d. Default(1 day) (default: "1")
  -h, --help        display help for command
```

## Example of usage
```
cryptoindex check price --coin=BTC --cur=NOK

BTC (Bitcoin) | Price: NOK 72,134.76 | Rank: 1
```

```
cryptoindex check interval --coin=ETH --cur=NOK --days=7

Coin: ETH(Ethereum) | Price changed in 7d: NOK 116.43
```
