const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  

  const query = req.body.cityName;;
  const apiKey = "524901&appid=d8c54bf4c262d7afb068f93cd26a8c40";
  const unit = "metric";
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    query +
    "&id=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.list[0].main.temp;
      const weatherDesc = weatherData.list[0].weather[0].description;
      const icon = weatherData.list[0].weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in " + query + " is " + temp + " degrees celcius.</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.write("<p>The weather is currently " + weatherDesc + "</p>");
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("server is running at port 3001");
});
