'use strict';

var db = require('redis').createClient();
var crypto = require('crypto');


module.exports = function(router) {

  router.get('/', function(req, res, next) {
    res.send('/hset\n');
  });

  router.post('/', function(req, res, next) {
    var uid, name, value, entry = {};

    uid = crypto.randomBytes(12).toString('hex');
    name = req.body.name;
    value = req.body.value;

    entry.uid = uid;

    Object.keys(value).forEach(function(key, val) {
      entry[key] = value[key];
    });

    db.HSET(name, uid, value, function(err) {
      if(err) {
        console.log(err);
      }

      res.json(value);
    });

  });

}
