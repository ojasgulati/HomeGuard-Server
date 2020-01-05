var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: "root",
  password: "ojas123",
  database: "books",
  debug: false
});

pool.getConnection(function(err,connection){
    if (err) {
      console.log({"code" : 100, "status" : "Error in connection database"});
      return;
    }  

    console.log('connected as id ' + connection.threadId);
   
    connection.query("select * from user",function(err,rows){
        connection.release();
        if(!err) {
            console.log(rows);
        }          
    });

    connection.on('error', function(err) {      
          console.log({"code" : 100, "status" : "Error in connection database"});
          return;    
    });
});

module.exports = pool;
