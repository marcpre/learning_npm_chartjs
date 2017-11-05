const exchangePoloniex = require('../exchange/poloniex')
const exchangeCCTX = require('../exchange/cctx')

async function getAllTickers() {
  const exchanges = [
    exchangePoloniex,
    exchangeCCTX,
  ]

  let res
  exchanges.forEach((exchange) => {
    res = exchange.getExchangeTicker()
  })
  return res
}

async function runScheduler() {
  setInterval(() => {
    const res = getAllTickers()
    console.log(`res: ${res}`)
    return res
  }, 10000)
}

module.exports = {
  runScheduler,
}
