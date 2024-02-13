const { Sequelize } = require("sequelize"); //this is a class

const sequelize = new Sequelize(process.env.MYSQL_URI); //this is an object

sequelize.authenticate(); //checks password

console.log("DB connection is working");

module.exports = sequelize;