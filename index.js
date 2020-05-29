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
        date: "07-08-2020",
      },
      {
        title: "Switch off lights",
        description: "Switch off all the lights in the house",
        date: "05-07-2020",
      },
      {
        title: "Dentist appointment",
        description: "Go to dentist",
        date: "05-05-2020",
      },
      {
        title: "Go to supermarket",
        description: "Go for shoppoing in the supermarket",
        date: "03-03-2020",
      },
      {
        title: "Clean house",
        description: "Clean house as guest are coming",
        date: "31-12-2021",
      },
    ],
  })
);

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
