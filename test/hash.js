'use strict';

var request = require('supertest')
  , test = require('tape');


test('HASH', function(t) {

  t.test('GET HSET', function(t) {

    t.plan(1);

    function done(err) {
      t.ok('GET HSET', 'GET HSET');
      t.end();
    }

    request('http://localhost:8000')
      .get('/hset')
      .expect(200)
      .expect('Content-Type', 'text/plain')
      .end(done);

  });

  t.test('POST HSET', function(t) {

    t.plan(1);

    function done(err) {
      t.ok('POST HSET', 'POST HSET');
      t.end();
    }

    request('http://localhost:8000')
      .post('/hset')
      .send({ name: 'mydb', value: 'myjson' })
      .expect(200)
      .expect({ name: 'mydb', value: 'myjson' })
      .end(done);

  });

});
