const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const homeRoute = require('./routes/home')
const genreRoute = require('./routes/genre')
const contactRoute = require('./routes/contact')
const loginRoute = require('./routes/login')
const welcomeRoute = require('./routes/welcome')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(homeRoute)
app.use(genreRoute)
app.use(contactRoute)
app.use(loginRoute)
app.use(welcomeRoute)

app.use(express.static(path.join(__dirname,'public')))

app.listen(3000)
