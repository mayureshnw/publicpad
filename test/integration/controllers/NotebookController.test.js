var request = require('supertest');

describe('NotebookController', function() {
  'use strict'

  describe('Creating a note', function() {

    it('should create a note with alphabets only',function(done){
      request(sails.hooks.http.app)
        .get('/Notebook/createNote?name=testonly')
        .expect(200)
        .expect('testonly',done)
    }),

    it('should create a note with numbers only',function(done){
      request(sails.hooks.http.app)
        .get('/Notebook/createNote?name=12345')
        .expect(200)
        .expect('125',done)
    })

  }),

  describe('gets an existing note',function(){
    it('brings a created note', function (done) {
      request(sails.hooks.http.app)
        .post('/Notebook/updateNote')
        .send({ urlname: 'Anote', urldata: 'Hello World' })
        .expect(200,done);
    });
  });
});
