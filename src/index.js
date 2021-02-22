const { urlencoded } = require("express");
const express = require("express");
const path = require("path");

const routes = require("./routes");

const app = express();

// configura as views como html
app.set("views", path.join(path.dirname(__dirname), "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// nao sei direito a utilidade principal mas acostumei assim
app.use(express.static("./public"));

// nem precisa explicar
app.use(routes);

// receber requisições no body via post
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.listen(3030, () => {
  console.log("Running on http://localhost:3030/");
});
