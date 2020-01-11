class AttandanceSheet {
  constructor(db) {
    this.db = db;
  }

  insert(data, callback, error) {
    if (!data.BELT_NO) error("No belt no provided");
    let insertQuery = `INSERT INTO attendance_record set ?`;
    this.db.query(insertQuery, data, (err, response) => {
      if (err) {
        error(err);
        return;
      }
      // rows added
      callback("Inserted OK");
    });
  }

  update(data, callback, error) {
    if (!data.BELT_NO) error("No belt no provided");
    let insertQuery = `UPDATE attendance_record set ? where BELT_NO = ?`;
    this.db.query(insertQuery, [data,data.BELT_NO], (err, response) => {
      if (err) {
        error(err);
        return;
      }
      // rows added
      callback("Updated OK");
    });
  }
}

module.exports = AttandanceSheet;
