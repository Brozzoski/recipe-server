require("dotenv").config();
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
})

sequelize.authenticate()
  .then(() => console.log(`${process.env.NAME} is Connected`))
  .catch((err) => console.log(err))

recipe = sequelize.import('./models/recipe')
list = sequelize.import('./models/list')
user = sequelize.import('./models/user')

// user.hasMany(recipe)
// recipe.belongsTo(user)

// user.hasMany(list)
// list.belongsTo(user)

module.exports = sequelize
