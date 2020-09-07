const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {


      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      temp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      time: {
          type: DataTypes.STRING,
          allowNull: false,
      },

      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instruction: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  })
  return Recipe;
}