require('dotenv').config()
const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const btcService = require('./service/bitcoinService')
const scheduler = require('./scheduler/scheduler')

const app = express()

process.on('uncaughtException', err =>
  console.error('uncaught exception: ', err))
process.on('unhandledRejection', (reason, p) =>
  console.error('unhandled rejection: ', reason, p))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger(process.env.LOG_ENV))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(express.static(path.join(__dirname, '/../public'))) // public folder!

// running scheduler
const apiData = scheduler.runScheduler()

// routes
app.get('/', (req, res) => {
  res.render('index')
})

// routes
app.get('/bitcoinprice', async(req, res) => {
  const priceData = await btcService.getBitcoinData()
  const date = priceData[0]
  const marketCap = priceData[1]
  const averagePrice = priceData[2]
  res.render('bitcoinprice', { date, marketCap, averagePrice })
})

// routes
app.get('/serverdata', (req, res) => {
  const chartData = []
  for (let i = 0; i < 7; i += 1) {
    chartData.push(Math.random() * 50)
  }
  const result = JSON.stringify(chartData)

  res.render('serverdata', { result })
})

// routes
app.get('/realTime', (req, res) => {
  console.log(`test: ${apiData}`)

  res.render('realtime', { apiData })
})

// Start Server
const port = process.env.APP_PORT || 8080
const host = process.env.APP_HOST || 'localhost'

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`)
})

module.exports = app
