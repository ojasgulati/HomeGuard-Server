ConnectionDB = require("./connection");
Volunteer = require("./volunteer");
AttandanceSheet = require("./attendanceSheet");

connectionDB = new ConnectionDB("root", "12345");
connectionDB.makeConnection();

volunteer = new Volunteer(connectionDB.getDB());
//volunteer.check();
attandanceSheet = new AttandanceSheet(connectionDB.getDB());
module.exports = { volunteer, attandanceSheet };
