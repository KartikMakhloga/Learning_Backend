const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Paris&id=524901&appid=d8c54bf4c262d7afb068f93cd26a8c40&units=metric";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.list[0].main.temp;
      const weatherDesc = weatherData.list[0].weather[0].description;
      const icon = weatherData.list[0].weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in Paris is " + temp + " degrees celcius.</h1>"
      );
      res.write("<p>The weather is currently" + weatherDesc + "</p>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("server is running at port 3001");
});
