ConnectionDB = require("./connection");
Volunteer = require("./volunteer");

connectionDB = new ConnectionDB("root", "mysql");
connectionDB.makeConnection();

volunteer = new Volunteer(connectionDB.getDB());
//volunteer.check();
module.exports = { volunteer };
