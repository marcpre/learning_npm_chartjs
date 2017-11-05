const ccxt = require('ccxt')

async function getExchangeTicker() {
  const bitfinex = new ccxt.bitfinex({ verbose: true })
  const data = await bitfinex.fetchTicker('btcusd')
  return data
}

module.exports = {
  getExchangeTicker,
}
