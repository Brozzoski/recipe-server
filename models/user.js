const sequelize = require("../db");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {

      name: {
          type: DataTypes.STRING,
          allowNull: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      confirmpassword: {
          type: DataTypes.STRING,
          allowNull: false
      },
            terms: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
      remember: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

  }) 

  return User
  
}