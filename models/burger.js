var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burgers', function(response){
            cb(response);
        })
    },
    update: function(id, cb){
        orm.update('burgers', id, cb);
    }
}

module.exports = burger;