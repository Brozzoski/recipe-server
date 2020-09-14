const sequelize = require('../db')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
  
    },
    confirmpassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    terms: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    remember: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  })

  return User
}
