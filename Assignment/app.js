var express = require("express");

var app = express();

console.log("============================== Routes==============================");

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my Assignment!");
})

/* Pattern - Animal Speak /speak/animalType*/
app.get("/speak/:animalType", function(req, res){
    
    var animal = req.params.animalType.toLowerCase();
    var sounds ={
        pig : "oink",
        cow : "Moo",
        dog : "woof woof!",
        cat : "Meow"
    };
    
    var sound = sounds[animal];
    
    res.send( animal + " says '" + sound + "'" );
    
    /* if(req.params.animalType === "pig"){
        res.send( req.params.animalType + " says Oink");
    }else if(req.params.animalType === "dog"){
        res.send(req.params.animalType + " says Woof Woof!");
    }else if(req.params.animalType === "cow"){
        res.send(req.params.animalType + " says moo");
    }else{
        res.send("Sorry page not found :( ");
    } */
})

// Pattern /repeat/:word/:numOfTimes
app.get("/repeat/:message/:numOfTimes", function(req, res) {
    var message = req.params.message;
    var num = Number(req.params.numOfTimes);
    var result = "";
    for(var i=0; i< num; i++ ){
        result += " " + message;
    }
    
    res.send(result);
})

// For other requests
app.get("*", function(req, res){
    res.send("Sorry page not found :( ");
})

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started!");
})
    


