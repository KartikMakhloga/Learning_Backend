const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);
   let result = num1 + num2;
    res.send("The Result is " + result);
})
app.listen(3001,function(){
    console.log("listening at 3001");
})