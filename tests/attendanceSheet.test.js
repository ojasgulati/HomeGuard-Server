ConnectionDB = require("../database/connection");
Volunteer = require("../database/volunteer");
AttandanceSheet = require("../database/attendanceSheet");

connectionDB = new ConnectionDB("root", "mysql");
connectionDB.makeConnection();

volunteer = new Volunteer(connectionDB.getDB());
//volunteer.check();
attandanceSheet = new AttandanceSheet(connectionDB.getDB());

attandanceSheet.genrateAttandanceSheet();
