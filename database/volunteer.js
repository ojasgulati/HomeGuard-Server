const mysql = require("mysql");

class Volunteer {
  constructor(db) {
    this.db = db;
  }

  check() {
    console.log("DB refrence inside volunteer class " + this.db);
  }

  getAllVolunteerList(callback) {
    let selectQuery = "SELECT * FROM volunteers_list";
    this.db.query(selectQuery, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // rows fetch
      callback(data);
    });
  }

  getActiveVolunteerList(callback) {
    let selectQuery =
      "SELECT * FROM volunteers_list l,volunteers_list_active a where l.belt_no=a.belt_no;";
    this.db.query(selectQuery, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // rows fetch
      callback(data);
    });
  }

  getTrashVolunteerList(callback) {
    let selectQuery =
      "SELECT * FROM volunteers_list l,volunteers_list_trash t where l.belt_no=t.belt_no;";
    this.db.query(selectQuery, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // rows fetch
      callback(data);
    });
  }

  insert(VolunteerDetailJson) {
    console.log(VolunteerDetailJson);
  }
}

module.exports = Volunteer;
