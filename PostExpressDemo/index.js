var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Anu", "Ann", "Ana", "Ani"];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/friends" , function(req, res){
    res.render("friends", {friendsArr : friends});
});

app.post("/addfriend", function(req,res){
    console.log(req.body);
    friends.push(req.body.newFriend);
    //res.send("friends");
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!");
});