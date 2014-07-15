'use strict';

var ds = require('../../lib/data-structures');


module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.json(ds);
  });
}
