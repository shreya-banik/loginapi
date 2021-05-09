let mongoose = require('mongoose');

//form schema
let formschema= mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

let form = module.exports = mongoose.model('form',formschema);
