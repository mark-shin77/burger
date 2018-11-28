var orm = require('../config/orm');

var burger = {
    all: function(cb){
        orm.all('burgers', function(response){
            cb(response);
        })
    }
}

module.exports = burger;