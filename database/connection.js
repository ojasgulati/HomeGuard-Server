var mysql = require("mysql");

class ConnectionDB {
  constructor(username, password) {
    this.db = mysql.createPool({
      connectionLimit: 100, //important
      host: "localhost",
      user: username,
      password: password,
      database: "homeguard",
      debug: false
    });
  }

  makeConnection() {
    this.db.getConnection(function(err, connection) {
      if (err) {
        console.log({ code: 100, status: "Error in connection database" });
        return;
      }
      connection.on("error", function(err) {
        console.log({
          code: 100,
          status: "Connection Error in connection database"
        });
        return;
      });

      console.log("Database connection Successfull");
    });
  }

  getDB() {
    return this.db;
  }
}

module.exports = ConnectionDB;
