const express = require("express");
// const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const hostName = process.env.HOST_NAME || "localhost";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
