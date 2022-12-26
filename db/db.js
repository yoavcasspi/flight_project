
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yoav1303',
    database: 'flight_project'
})
const knex = require('knex').knex({
   client: 'mysql',
   connection: {
       host: '127.0.0.1',
       port: 3307,
       user: 'root',
       password: 'yoav1303',
       database: 'flight_project'
   }
});
module.exports = { knex }