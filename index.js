const express = require("express");

const app = express();
const port = 5000;

const bootcamp = require("./bootcamp");

app.get("/", (req, res) => {
  console.log("hey from the backend!");
  res.send("hey from backend");
});

app.get("/bootcamp", (req, res) => {
  res.json(bootcamp);
});

app.listen(port, () => console.log(`server is running at port: ${port}`));
