const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    let url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d8c54bf4c262d7afb068f93cd26a8c40&units=metric";
  https.get(url,function(response){
     
  });
  res.send("server is running");
});

app.listen(3001, function () {
  console.log("server is running");
});
