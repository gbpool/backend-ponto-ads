<<<<<<< HEAD
const { sequelize } = require('sequelize');
require('dotenv').config();






const sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DP_PASS, {
=======
const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
>>>>>>> 3e6a7a87cf67544f5b9a8fba79aeb4d1ffa10504
    host: process.env.DB_HOST,
    dialect: 'postgres'
});


module.exports = sequelize;