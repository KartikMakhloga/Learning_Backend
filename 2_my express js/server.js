const express = require("express");

let app = express();

app.get("/",function(req,res){
   res.send("<h1>namaskar</h1>");
})

app.get

app.listen(3001,function(){
    console.log("server started at port 3001");
});