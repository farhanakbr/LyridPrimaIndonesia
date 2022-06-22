if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()

app.use([cors(), express.json(), express.urlencoded({ extended: false })])

app.use(router)

module.exports = app

