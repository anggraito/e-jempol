const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
chai.use(chaiHttp)
const app = require('../app.js');
const data = {
  token: 'EAAWrhx0WIGYBADwuUOmSZAzb6MvsWV3CxIeOSZANnA0yK4BxEf7ZAVH9ImU1Iq07YqiPdMZBExOAyFsZBo4t6ivciySEVTX8mPmdwZBjnhSh6Yzr1JKOv3tCy8OAg1ZAhGYfWBWVR9PZCZBqg5oqyzaeL1F58g8iRaXjrz1mviol3JxX87v4PW4A6xW2JIPWFaLspZAj6z12WrjgZDZD',
  name: "test",
  id: "test"
}

describe('Cek Login', function(){
  it('harus mengembalikan data', function(done){
    chai.request(app)
    .post('/login')
    .send(data)
    .end(function(err,response){
      console.log(data);
      response.status.should.equal(200)
      response.body.should.be.an('object')
      response.body.name.should.equal('test')
      response.body.should.be.have.property('token')
      response.body.should.be.have.property('name')
      response.body.should.be.have.property('id')
      done()
    })
  })
})
