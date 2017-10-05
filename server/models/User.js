const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fb_id: String,
  name: String,
  email: String,
  password: String
},{
  timestamps: true
})

const user = mongoose.model('user',userSchema)

module.exports = user;
