const getHomePage = (req, res) => {
  res.render("home", { title: "Home Page" });
};

module.exports = {
  getHomePage,
};
