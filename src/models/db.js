const Sequelize = require('sequelize');
require('dotenv').config();

//privately linking the application to the database without placing sensitive information where others can server
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
{
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },
  logging: false,
});

/*creates database if it doesn't exist
connects to the database in order to access information
*/
const url = sequelize.define('url', {
  url: {type: Sequelize.STRING},
  short: {type: Sequelize.STRING},
});

sequelize.sync();
exports.sequelize = sequelize;
exports.url = url;
