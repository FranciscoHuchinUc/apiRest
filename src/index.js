const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoute = require('./routes/user')

// settings
const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', userRoute)

// routes
app.get('/hola/', (req, res) => {
  res.send(200, { menssage: 'Bienvenido a mi Api REST' })
})

// conexion a la base de datos mongodB
mongoose.connect(process.env.MONGODB_KEY)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
