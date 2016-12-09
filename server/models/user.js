var mongoose = require('mongoose');

// new user model
//property; email - require, -trim, -set min length of 1, -set type
var User = mongoose.model('User',{
    email: {
      type: String,
      required: true,
      minglenth: 1,
      trim: true}
  });



  module.exports = {
    User
  };
