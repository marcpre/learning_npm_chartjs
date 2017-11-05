const fs = require('fs')
const path = require('path')

async function getBitcoinData() {
  const bitcoinData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/bitcoinPrice.json'), 'utf8'))

  const date = []
  const averagePrice = []
  const marketCap = []

  for (let m = 0; m < bitcoinData.length; m += 1) {
    const subPrice = (parseFloat(bitcoinData[m].High) - parseFloat(bitcoinData[m].Low))
    const price = subPrice / 2
    averagePrice.push(price)
    marketCap.push(bitcoinData[m]['Market Cap'])
    date.push(Date.parse(bitcoinData[m].Date))
  }
  const result = [date, marketCap, averagePrice]
  /*
  const lineChartData = {
    labels: date,
    datasets: [{
      label: 'Price',
      borderColor: 'rgba(255,99,132,1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
      data: averagePrice,
      yAxisID: 'y-axis-1',
    }, {
      label: 'MarketCap',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      backgroundColor: 'rgba(54, 162, 235, 1)',
      fill: false,
      data: marketCap,
      yAxisID: 'y-axis-2',
    }],
  }
*/
  return result
}

module.exports = {
  getBitcoinData,
}
