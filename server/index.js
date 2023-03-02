const express = require("express");
const cors = require("cors");
const { json } = require("express");

const app = express();

app.use(json());

app.use(
  cors({
    origin: "*",
  })
);

const booked = {
  monday: ["07:00"],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.post("/time", (req, res) => {
  if (!req.body.day || !req.body.time) {
    res.status(400).json({ message: "provide both day and time" });
    return;
  }

  const day = req.body.day;
  const time = req.body.time;

  if (!Object.keys(booked).includes(day)) {
    res.status(400).json({ message: "day format is incorrect" });
    return;
  }

  if (booked[day].includes(time)) {
    console.log("remove time from database");
  } else {
    console.log("add time to database");
  }

  res.json({
    message: "day and time sent",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
