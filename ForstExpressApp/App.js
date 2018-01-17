var express = require("express");

var app = express();

/* ROUTES-- Sequence of defining rerquests (ROUTES) matters. */

/* "/"  -- Hi There*/
app.get("/", function(req, res){
    res.send("Hi There !!!");
})

/* "/bye"  -- Goodbye*/
app.get("/bye", function(req,res){
    res.send("GOODBYE!!!");
})

/* Request Pattern*/
app.get("/r/:subreddittname", function(req, res) {
    res.send("Welcome to Subbreddit!");
})

/* For all requests other than defined here. */
    
app.get("*", function(req, res) {
    res.send("I am the best!!");
})

/*  Tell Express to Listen the port */
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});