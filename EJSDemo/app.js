var express = require("express");

var app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");

/*** Route **/
/* EJS - Embeded Java Script */
/* res.render() is used to call other Html or JS files */
app.get("/", function(req, res){
   // res.send("Welcome to Home page !");
   res.render("home");
});

app.get("/love/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res) {
    var blogposts = [
        {title:"Fruits", author : "anu"},
        {title:"Games", author:"shan"},
        {title:"Series", author: "shan anu"}];
        
    res.render("posts", {posts : blogposts});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!");
});