const express = require("express");

const app = express();
const port = 5000;

const bootcamp = require("./bootcamp");

app.get("/", (req, res) => {
  console.log("hey from the backend!", req);
  res.send("hey from backend");
});

app.get("/bootcamp", (req, res) => {
  res.json(bootcamp);
});

app.get("/bootcamp/students/under22", (req, res) => {
  let youngStudents = bootcamp.students.filter((element) => element.age < 23);
  res.json(youngStudents);
});

app.listen(port, () => console.log(`server is running at port: ${port}`));
