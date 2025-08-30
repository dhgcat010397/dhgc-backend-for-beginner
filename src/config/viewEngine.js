const configViewEngine = (app, express, path) => {
  // configure express to use EJS (template engine)
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  // configure express to serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, "public")));
};

module.exports = configViewEngine;
