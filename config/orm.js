// import SQL connection
var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, results){
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;