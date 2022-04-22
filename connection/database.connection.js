const mysql = require("mysql2")


var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567890",
    database :"project"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  module.exports = conn