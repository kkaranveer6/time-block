const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "hello world" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
