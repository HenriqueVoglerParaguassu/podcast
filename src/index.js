const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.listen(3030, () => {
  console.log("Running on http://localhsot:3030/");
});
