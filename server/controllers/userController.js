const modelUser = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()
var jwt = require('jsonwebtoken')

var createUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt)
  modelUser.create({
    username: req.body.username,
    password: hash
  })
  .then(userbaru => {
    res.send(userbaru)
  })
  .catch(err => {
    res.send(err)
  })
}

var signin = (req,res) => {
  user.findOne({
    user_id: req.body.user_id
  })
  .then(datauser => {
    if(bcrypt.compareSync(req.body.user_password, datauser.user_password)){
      var token = jwt.sign({
        user_id: datauser.user_id,
        email: datauser.email,
        name: datauser.name,
        id: datauser._id
      }, process.env.SECRET_TOKEN);
      res.send({msg: "login success",token: token})
    } else {res.send('password anda salah')}
  })
  .catch(err => {
    res.send(err)
  })
}



module.exports = {createUser,signin};
