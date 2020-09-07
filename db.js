const Sequelize = require('sequelize')

const sequelize = new Sequelize('foodie', 'postgres', 'runMoonmelon', {
  host: 'localhost',
  dialect: 'postgres',
})

sequelize
  .authenticate()
  .then(() => console.log(`${process.env.NAME} is Connected`))
  .catch((err) => console.log(err))

// recipe= sequelize.import('./models/recipe');
// list = sequelize.import('./models/list');
// user = sequelize.import('./models/user');

// user.hasMany(recipes);
// recipes.belongsTo(user);

// user.hasMany(lists);
// lists.belongsTo(user);

module.exports = sequelize
