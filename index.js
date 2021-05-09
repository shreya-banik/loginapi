const express=require('express');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://localhost/last_task');

let db= mongoose.connection;

let form=require('./form');

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err)
     console.error(err);
  else
     console.log("Connected to the mongodb");
});

db.once('open',function(){
  console.log('Connected to mongodb...');
});

db.on('error',function(err){
  console.log(err);
});

app.get('/welcome',function(req,res){
  form.find({},function(err,form) {
    if(err){
      console.log(err);
    }else{
      res.render('index4',{
        username:'form',
        form:form
      });
    }
  });
});

app.get('/register',function(req,res){
   res.sendfile('registration.html');
});

app.get('/login',function(req,res){
   res.sendfile('login.html');
});

app.listen(3000, function(req,res){
  console.log('Server has started on port 3000...');
});
