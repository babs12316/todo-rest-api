// simple Express.js RESTful API
"use strict";

// initialize
const port = 8888,
  express = require("express"),
  app = express();


app.get("/data/", (req, res) =>
  res.append('Access-Control-Allow-Origin', '*').json({
    todos: [
      {
        title: "Taking pills",
        description: "Take pills at 10pm",
        date: "2020-03-27",
      },
      {
        title: "Switch off lights",
        description: "Switch off all the lights in the house",
        date: "2020-07-01",
      },
      {
        title: "Dentist appointment",
        description: "Go to dentist",
        date: "2020-04-05",
      },
      {
        title: "Go to supermarket",
        description: "Go for shoppoing in the supermarket",
        date: "2020-02-20",
      },
      {
        title: "Clean house",
        description: "Clean house as guest are coming",
        date: "2020-07-27",
      },
    ],
  })
);

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
