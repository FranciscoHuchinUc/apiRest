require('dotenv').config()
require('./lib/db')
const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user')

// settings
const app = express()
const port = process.env.PORT || 3333

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.get("/", async (req, res) => {
  res.send(200, { message: "Please visit /api/users to view all users" })
})

app.use('/api', userRoute)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
