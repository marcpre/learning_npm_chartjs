const Poloniex = require('poloniex-api-node')


async function getExchangeTicker() {
  const poloniex = new Poloniex()
  try {
    const ticker = await poloniex.returnTicker()
    return ticker
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  getExchangeTicker,
}
