// import SQL connection
var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, results){
            if (err) throw err;
            cb(results);
        })
    },

    update: function(tableInput, condition, cb){
        connection.query('UPDATE ' + tableInput + ' SET devoured = true WHERE id =' + condition + ';', function(err, result){
            if(err) throw err;
            cb(result);
        })
    }

}

module.exports = orm;