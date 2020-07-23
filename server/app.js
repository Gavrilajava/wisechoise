const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')

app.get('/', (req, res) => res.send('success!'))

mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true,  useUnifiedTopology: true }, 
  () => console.log("connected to db")
)

app.listen(4000)

