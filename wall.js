var express = require('express');
var parser =require('body-parser');
var mongoose=require('mongoose');
var app=express();
var router = require('./routes/rou');

app.use(parser.urlencoded({extended:false}));
app.use('/add',router);

mongoose.connect("mongodb+srv://userdb:ava1996@cluster0-nbbrc.mongodb.net/test?retryWrites=true&w=majority");
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});