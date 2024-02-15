const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define("Author", {
    authorName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
},
{ timestamps: false });

module.exports = Author;