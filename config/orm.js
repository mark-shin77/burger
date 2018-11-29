// import SQL connection
var connection = require("../config/connection.js");

var orm = {
    all: function(tableName, cb){
        connection.query('SELECT * FROM ' + tableName + ';', function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    update: function(tableName, condition, cb){
        connection.query('UPDATE ' + tableName + ' SET devoured = true WHERE id =' + condition + ';', function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    create: function(tableName, val, cb){
        connection.query("INSERT INTO " + tableName + " (burger_name) VALUES ('" + val + "');", function(err, result){
            if(err) throw err;
            cb(result);
        })
    }

}

module.exports = orm;