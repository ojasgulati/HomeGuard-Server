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
    this.db.query(insertQuery, [data, data.BELT_NO], (err, response) => {
      if (err) {
        error(err);
        return;
      }
      // rows added
      callback("Updated OK");
    });
  }

  genrateAttandanceSheet(data, callback, error) {
    //if(!data.NO_OF_CANDIDATE) error("No of candidates are required");
    //First Select all the reserved candidates from
    this.getReservedCandidates(function callback(data) {
      console.log(data);
    });
  }

  getReservedCandidates(callback, error) {
    // TODO: Update query to use table of monthly attandance
    let selectQuery = `SELECT * 
    FROM volunteers_list l,
    volunteers_list_active a 
    where l.belt_no=a.belt_no 
    and l.category = "reserved";`;

    this.db.query(selectQuery, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // rows fetch
      //Promise.resolve(data);
      callback(data);
    });
  }

  getApplicationCanditates(callback, error) {
    // TODO: Update query to use table of monthly attandance
    // QUESTION : DO application candidates require to give attandance next month?
    let selectQuery = `SELECT *
    FROM volunteers_list l
    INNER JOIN volunteers_list_active a ON l.belt_no=a.belt_no
    INNER JOIN volunteers_applications va ON a.belt_no = va.belt_no;`;

    this.db.query(selectQuery, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      callback(data);
    });
  }
}

module.exports = AttandanceSheet;
