const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();
    
poloniex.returnTicker((err, ticker) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(ticker);
  }
});
