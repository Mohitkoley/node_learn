const express = require("express")


var app = express();

app.get("/",function (req,res){
    res.status(400).json("fuck you");
});

app.get("/user", function (req,res){
    res.json(
        {
            "name": "Mohit",
            "id": 1,       
         }
    );
});

app.listen(3000, function (){ 
    console.log("listening on 3000");
});