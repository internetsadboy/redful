'use strict';

var db = require('redis').createClient();
var crypto = require('crypto');


module.exports = function(router) {

  router.get('/', function(req, res, next) {
    res.send('/hset\n');
  });

  router.post('/', function(req, res, next) {
    var uid, name, value;

    uid = crypto.randomBytes(12).toString('hex');
    name = req.body.name;
    value = req.body.value;

    db.HSET(name, uid, value, function(err) {
      if(err) {
        console.log(err);
      }

      res.json(value);
    });
  });

}
