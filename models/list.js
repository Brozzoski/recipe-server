const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('list', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        items: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
        },
    )
    return List;
}