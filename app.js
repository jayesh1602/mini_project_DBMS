const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");

const app = express();
app.use(express.json());

let corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5000"],
};
app.use(cors(corsOptions));

mongoose
  .connect(
    "mongodb+srv://jayesh1602:jayesh1234@cluster0.fblrp1p.mongodb.net/student"
  )
  .then(() => console.log("connected to DB"));

app.get("/", (req, res) => {
  res.send("hii i am getting");
});

app.use(adminRoute);
app.use(studentRoute);

app.listen(5000, function () {
  console.log("connected");
});
