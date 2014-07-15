'use strict';

var request = require('supertest')
  , test = require('tape');


test('Hash', function(t) {

  t.test('GET hset', function(t) {

    t.plan(1);

    function done(err) {
      t.ok('GET hset', 'GET hset');
      t.end();
    }

    request('http://localhost:8000')
      .get('/hset')
      .expect(200)
      .expect('Content-Type', 'text/plain')
      .end(done);

  });

  t.test('POST hset', function(t) {

    t.plan(1);

    function done(err) {
      t.ok('POST hset', 'POST hset');
      t.end();
    }

    request('http://localhost:8000')
      .post('/hset')
      .send({ name: 'mydb', value: 'myjson' })
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect({ name: 'mydb', value: 'myjson' })
      .end(done);

  });

  t.test('PUT hset', function(t) {

    t.plan(1);

    function done(err) {
      t.ok('PUT /hset', 'PUT /hset');
      t.end();
    }

    request('http://localhost:8000')
      .put('/hset')
      .send({"uid":"296b1a6ae1ff4d961195258e","name":"shimdb","value":{"key":"newValue"}})
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect({"uid":"296b1a6ae1ff4d961195258e","key":"newValue"})
      .end(done);

  });

});
