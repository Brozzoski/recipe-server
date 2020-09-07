//! ENV
require('dotenv').config()
let bcrypt = require('bcryptjs')

//! EXPRESS
const express = require('express')
const app = express()

//! CONTROLLERS
const recipe = require('./controller/recipecontroller')
const list = require('./controller/listcontroller')
const user = require('./controller/usercontroller')

//! DATABASE
const sequelize = require('./db')
// sequelize.sync()
// sequelize.sync({force: true})
app.use(express.json())
app.use(require('./middleware/headers'))

//! ROUTES
app.use('/recipe', recipe)
app.use('/list', list)
app.use('/user', user)

app.listen(3001, function () {
  console.log('App is listening on port 3001')
})
