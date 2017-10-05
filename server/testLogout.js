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

describe("Cek Logout", function(){
  it('token should be null', function(done){
    chai.request(app)
    
  })
})
