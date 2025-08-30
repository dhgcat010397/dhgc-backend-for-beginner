require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 3000;
const hostName = process.env.HOST_NAME || "localhost";

// configure express to use EJS (template engine)
configViewEngine(app, express, path);

// routes
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
